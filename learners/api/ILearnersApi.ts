import { AddLearnerDTO, EnrollLearnerInCourseDTO, GetLearnerCoursesDTO } from "./request-dtos";
import { AddLearnerResponse, GetLearnersResponse, EnrollLearnerInCourseResponse } from "./responses";
import { GetLearnersQuery } from "../application/queries/get-learners";
import { GetCoursesResponse } from "@l-p/courses/api/responses";

export interface ILearnersApi {
  healthCheck(): Promise<boolean>;

  startService(): Promise<void>;

  addLearner(dto: AddLearnerDTO): Promise<AddLearnerResponse>;

  getLearners(getLearnersQuery: GetLearnersQuery): Promise<GetLearnersResponse>;

  getCourseLearners(courseId: string): Promise<GetLearnersResponse>;

  enrollLearnerInCourse(dto: EnrollLearnerInCourseDTO): Promise<EnrollLearnerInCourseResponse>;

  getLearnerCourses(dto: GetLearnerCoursesDTO): Promise<GetCoursesResponse>;
}
