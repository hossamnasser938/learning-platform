import { ILearnersGateway } from "./ILearnersGateway";
import { GetLearnersResponse } from "@l-p/learners/api/responses";
import { learnersApiID } from "@l-p/learners/infrastructure/dependency-injection/tokens";
import { ILearnersApi } from "@l-p/learners/api/ILearnersApi";
import { GetCourseLearnersQuery } from "@l-p/learners/application/queries/get-course-learners";
import { inject } from "@l-p/shared/infrastructure/dependency-injection/utils";

export class LearnersGateway implements ILearnersGateway {

  constructor(
    @inject(learnersApiID) private readonly learnersApi: ILearnersApi
  ) {}

  async getCourseLearners(courseId: string): Promise<GetLearnersResponse> {
    const query = new GetCourseLearnersQuery(courseId);
    return await this.learnersApi.getCourseLearners(query);
  }
}

