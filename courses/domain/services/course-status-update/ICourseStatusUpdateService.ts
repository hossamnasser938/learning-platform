import { Course } from "../../models";

export interface ICourseStatusUpdateService {
  publishCourse(courseId: string): Promise<Course>;
  archiveCourse(courseId: string): Promise<Course>;
}
