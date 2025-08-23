import {
  inject,
  injectable,
} from "@l-p/shared/infrastructure/dependency-injection/utils";
import { ICourseRepo } from "../../contracts";
import { Course } from "../../models";
import { courseRepoID } from "@l-p/courses/infrastructure/dependency-injection/tokens";
import { ICourseStatusUpdateService } from "./ICourseStatusUpdateService";
import { CourseNotFoundException } from "../../models/course/exceptions";

@injectable()
export class CourseStatusUpdateService implements ICourseStatusUpdateService {
  constructor(
    @inject(courseRepoID) private readonly courseRepo: ICourseRepo
  ) {}

  private async assertCourseExists(courseId: string) {
    const course = await this.courseRepo.getById(courseId);

    const courseExists = !!course;
    if (!courseExists) {
      throw new CourseNotFoundException(courseId);
    }

    return course;
  }

  async publishCourse(courseId: string): Promise<Course> {
    const course = await this.assertCourseExists(courseId);

    course.publish();

    return course;
  }

  async archiveCourse(courseId: string): Promise<Course> {
    const course = await this.assertCourseExists(courseId);

    course.archive();

    return course;
  }
}
