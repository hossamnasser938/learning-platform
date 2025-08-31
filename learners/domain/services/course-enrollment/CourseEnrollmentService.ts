import { ICourseEnrollmentService } from "./ICourseEnrollmentService";
import { ILearnerRepo, ICourseEnrollmentRepo } from "../../contracts";
import { Learner } from "../../models";
import { ModelId } from "@l-p/shared/domain/models";
import { LearnerNotFoundException, LearnerAlreadyEnrolledException } from "../../models/learner/exceptions";
import { inject } from "@l-p/shared/infrastructure/dependency-injection/utils";
import { learnerRepoID, courseEnrollmentRepoID, coursesGatewayID } from "@l-p/learners/infrastructure/dependency-injection/tokens";
import { IEventBus } from "@l-p/shared/domain/contracts";
import { eventBusID } from "@l-p/shared/infrastructure/dependency-injection/tokens";
import { LearnerEventMapper } from "@l-p/learners/infrastructure/event-mappers";
import { container } from "@l-p/shared/infrastructure/dependency-injection";
import { CourseNotFoundException } from "@l-p/courses/domain/models/course/exceptions";

export class CourseEnrollmentService implements ICourseEnrollmentService {
  constructor(
    @inject(learnerRepoID) private readonly learnerRepo: ILearnerRepo,
    @inject(courseEnrollmentRepoID) private readonly courseEnrollmentRepo: ICourseEnrollmentRepo,
    @inject(eventBusID) private readonly eventBus: IEventBus
  ) {}

  private async assertCourseExists(courseId: string) {
    const coursesGateway = container.get(coursesGatewayID)
    await coursesGateway.getCourseById(courseId);
  }

  private async assertLearnerExists(learnerId: string) {
    const learner = await this.learnerRepo.getById(learnerId);
    if (!learner) {
      throw new LearnerNotFoundException(learnerId);
    }

    return learner;
  }

  async enrollLearnerInCourse(learnerId: string, courseId: string): Promise<Learner> {
    await this.assertCourseExists(courseId);

    const learner = await this.assertLearnerExists(learnerId);

    const isEnrolled = await this.courseEnrollmentRepo.isEnrolled(learnerId, courseId);
    if (isEnrolled) {
      throw new LearnerAlreadyEnrolledException(learnerId, courseId);
    }

    const courseModelId = ModelId.create(courseId);

    learner.enrollInCourse(courseModelId);

    await this.courseEnrollmentRepo.addEnrollment(learnerId, courseId);

    learner.publishEvents(LearnerEventMapper.toDTO, this.eventBus);

    return learner;
  }
}
