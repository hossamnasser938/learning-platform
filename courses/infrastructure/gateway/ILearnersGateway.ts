import { GetLearnersResponse } from "@l-p/learners/api/responses";

export interface ILearnersGateway {
  getCourseLearners(courseId: string): Promise<GetLearnersResponse>;
}

