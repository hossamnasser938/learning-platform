import { GetLearnerCoursesQuery } from "./GetLearnerCoursesQuery";
import { ICourseEnrollmentRepo } from "@l-p/learners/domain/contracts";
import { inject, injectable } from "@l-p/shared/infrastructure/dependency-injection/utils";
import { courseEnrollmentRepoID, coursesGatewayID } from "@l-p/learners/infrastructure/dependency-injection/tokens";
import { IGetLearnerCoursesHandler } from "./IGetLearnerCoursesHandler";
import { ICoursesGateway } from "@l-p/learners/infrastructure/gateway";
import { GetCoursesResponse } from "@l-p/courses/api/responses";

@injectable()
export class GetLearnerCoursesHandler implements IGetLearnerCoursesHandler {
  constructor(
    @inject(courseEnrollmentRepoID) private readonly courseEnrollmentRepo: ICourseEnrollmentRepo,
    @inject(coursesGatewayID) private readonly coursesGateway: ICoursesGateway
  ) {}

  async handle(query: GetLearnerCoursesQuery): Promise<GetCoursesResponse> {
    const courseIds = await this.courseEnrollmentRepo.getLearnerEnrollments(query.learnerId);
    
    return await this.coursesGateway.getCoursesByIds(courseIds);
  }
}
