import { GetCourseByIdResponse, GetCoursesResponse } from "@l-p/courses/api/responses";

export interface ICoursesGateway {
  getCourseById(courseId: string): Promise<GetCourseByIdResponse>;
  getCoursesByIds(courseIds: string[]): Promise<GetCoursesResponse>;
}
