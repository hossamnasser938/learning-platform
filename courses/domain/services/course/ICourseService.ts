import { Course } from "../../models";

export interface ICourseService {
  createNewCourse(title: string, description: string, instructorId: string): Promise<Course>;
  publishCourse(courseId: string): Promise<Course>;
  archiveCourse(courseId: string): Promise<Course>;
}