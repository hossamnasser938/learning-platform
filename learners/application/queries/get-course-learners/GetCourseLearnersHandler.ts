import { GetCourseLearnersQuery } from "./GetCourseLearnersQuery";
import { ICourseEnrollmentRepo, ILearnerRepo } from "../../../domain/contracts";
import { inject, injectable } from "@l-p/shared/infrastructure/dependency-injection/utils";
import { courseEnrollmentRepoID, coursesGatewayID, learnerRepoID } from "../../../infrastructure/dependency-injection/tokens";
import { GetLearnersResponse } from "../../../api/responses";
import { IGetCourseLearnersHandler } from "./IGetCourseLearnersHandler";
import { Learner } from "../../../domain/models";
import { container } from "@l-p/shared/infrastructure/dependency-injection";
import { CourseNotFoundException } from "@l-p/courses/domain/models/course/exceptions";

@injectable()
export class GetCourseLearnersHandler implements IGetCourseLearnersHandler {
  constructor(
    @inject(courseEnrollmentRepoID) private readonly courseEnrollmentRepo: ICourseEnrollmentRepo,
    @inject(learnerRepoID) private readonly learnerRepo: ILearnerRepo
  ) {}

  async handle(query: GetCourseLearnersQuery): Promise<GetLearnersResponse> {
    const coursesGateway = container.get(coursesGatewayID)

    const course = await coursesGateway.getCourseById(query.courseId);
    if (!course) {
      throw new CourseNotFoundException(query.courseId);
    }

    const learnerIds = await this.courseEnrollmentRepo.getCourseEnrollments(query.courseId);
    
    if (learnerIds.length === 0) {
      return { learners: [] } as GetLearnersResponse;
    }
    
    const learners = await this.learnerRepo.getByIds(learnerIds);
    const validLearners = learners.filter((learner): learner is Learner => learner !== null);
    
    return GetLearnersResponse.fromDomain(validLearners);
  }
}
