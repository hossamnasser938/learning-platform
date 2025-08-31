import { GetLearnerCoursesQuery } from "./GetLearnerCoursesQuery";
import { ICourseEnrollmentRepo, ILearnerRepo } from "@l-p/learners/domain/contracts";
import { inject, injectable } from "@l-p/shared/infrastructure/dependency-injection/utils";
import { courseEnrollmentRepoID, coursesGatewayID, learnerRepoID } from "@l-p/learners/infrastructure/dependency-injection/tokens";
import { IGetLearnerCoursesHandler } from "./IGetLearnerCoursesHandler";
import { GetCoursesResponse } from "@l-p/courses/api/responses";
import { LearnerNotFoundException } from "@l-p/learners/domain/models/learner/exceptions";
import { container } from "@l-p/shared/infrastructure/dependency-injection";

@injectable()
export class GetLearnerCoursesHandler implements IGetLearnerCoursesHandler {
  constructor(
    @inject(learnerRepoID) private readonly learnerRepo: ILearnerRepo,
    @inject(courseEnrollmentRepoID) private readonly courseEnrollmentRepo: ICourseEnrollmentRepo,
  ) {}

  async handle(query: GetLearnerCoursesQuery): Promise<GetCoursesResponse> {
    const coursesGateway = container.get(coursesGatewayID)
    
    const learner = await this.learnerRepo.getById(query.learnerId);
    if (!learner) {
      throw new LearnerNotFoundException(query.learnerId);
    }

    const courseIds = await this.courseEnrollmentRepo.getLearnerEnrollments(query.learnerId);
    
    return await coursesGateway.getCoursesByIds(courseIds);
  }
}
