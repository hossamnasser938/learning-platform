import { Course } from "../models/course/Course";
import { Instructor } from "../models/instructor/Instructor";

export interface ICourseRepo {
  getById(id: string): Promise<Course | null>;
  getAll(): Promise<Course[]>;
  create(course: Course, instructor: Instructor): Promise<void>;
  update(course: Course): Promise<void>;
  delete(course: Course): Promise<void>;
}
