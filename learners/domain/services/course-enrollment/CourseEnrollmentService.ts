import { ICourseEnrollmentService } from "./ICourseEnrollmentService";
import { ILearnerRepo, ICourseEnrollmentRepo } from "../../contracts";
import { Learner } from "../../models";
import { ModelId } from "@l-p/shared/domain/models";
import { LearnerNotFoundException, LearnerAlreadyEnrolledException } from "../../models/learner/exceptions";
import { inject } from "@l-p/shared/infrastructure/dependency-injection/utils";
import { learnerRepoID, courseEnrollmentRepoID } from "@l-p/learners/infrastructure/dependency-injection/tokens";

export class CourseEnrollmentService implements ICourseEnrollmentService {
  constructor(
    @inject(learnerRepoID) private readonly learnerRepo: ILearnerRepo,
    @inject(courseEnrollmentRepoID) private readonly courseEnrollmentRepo: ICourseEnrollmentRepo
  ) {}

  async enrollLearnerInCourse(learnerId: string, courseId: string): Promise<Learner> {
    const learner = await this.learnerRepo.getById(learnerId);
    if (!learner) {
      throw new LearnerNotFoundException(learnerId);
    }

    const isEnrolled = await this.courseEnrollmentRepo.isEnrolled(learnerId, courseId);
    if (isEnrolled) {
      throw new LearnerAlreadyEnrolledException(learnerId, courseId);
    }

    const courseModelId = ModelId.create(courseId);

    learner.enrollInCourse(courseModelId);

    await this.courseEnrollmentRepo.addEnrollment(learnerId, courseId);

    // TODO: publish integration events

    return learner;
  }
}
