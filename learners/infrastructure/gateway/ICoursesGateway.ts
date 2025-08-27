import { GetCoursesResponse } from "@l-p/courses/api/responses";

export interface ICoursesGateway {
  getCoursesByIds(courseIds: string[]): Promise<GetCoursesResponse>;
}
