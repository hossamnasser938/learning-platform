import { Course } from "../models/course/Course";

export interface ICourseRepo {
  getById(id: string): Promise<Course | null>;
  getByIds(ids: string[]): Promise<Array<Course | null>>;
  getAll(): Promise<Course[]>;
  create(course: Course): Promise<void>;
  update(course: Course): Promise<void>;
  delete(course: Course): Promise<void>;
}
