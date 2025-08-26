import { AddLearnerDTO } from "./request-dtos";
import { AddLearnerResponse, GetLearnersResponse, EnrollLearnerInCourseResponse } from "./responses";
import { GetLearnersQuery } from "../application/queries/get-learners";

export interface ILearnersApi {
  healthCheck(): Promise<boolean>;

  startService(): Promise<void>;

  addLearner(dto: AddLearnerDTO): Promise<AddLearnerResponse>;

  getLearners(getLearnersQuery: GetLearnersQuery): Promise<GetLearnersResponse>;

  enrollLearnerInCourse(learnerId: string, courseId: string): Promise<EnrollLearnerInCourseResponse>;
}
