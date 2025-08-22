import { ICourseRepo } from "@l-p/courses/domain/contracts/ICourseRepo";
import { Course } from "@l-p/courses/domain/models/course/Course";
import { Instructor } from "@l-p/courses/domain/models/instructor/Instructor";
import { injectable } from "@l-p/shared/infrastructure/dependency-injection/utils";

@injectable()
export class CourseRepo implements ICourseRepo {
  private courses: Course[] = [];

  async getById(id: string): Promise<Course | null> {
    return this.courses.find((course) => course.getId() === id) || null;
  }

  async getAll(): Promise<Course[]> {
    return this.courses;
  }

  async create(course: Course, instructor: Instructor): Promise<void> {
    this.courses.push(course);
  }

  async update(course: Course): Promise<void> {
    const index = this.courses.findIndex((c) => c.getId() === course.getId());
    if (index !== -1) {
      this.courses[index] = course;
    }
  }

  async delete(course: Course): Promise<void> {
    this.courses = this.courses.filter((c) => c.getId() !== course.getId());
  }
}
