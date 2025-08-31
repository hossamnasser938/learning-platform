import { GetCourseByIdQuery } from "./GetCourseByIdQuery";
import { ICourseRepo } from "@l-p/courses/domain/contracts";
import {
  inject,
  injectable,
} from "@l-p/shared/infrastructure/dependency-injection/utils";
import { courseRepoID } from "@l-p/courses/infrastructure/dependency-injection/tokens";
import { Course } from "@l-p/courses/domain/models";
import { IGetCourseByIdHandler } from "./IGetCourseByIdHandler";
import { CourseNotFoundException } from "@l-p/courses/domain/models/course/exceptions/CourseException";

@injectable()
export class GetCourseByIdHandler implements IGetCourseByIdHandler {
  constructor(@inject(courseRepoID) private readonly courseRepo: ICourseRepo) {}

  async handle(query: GetCourseByIdQuery): Promise<Course> {
    const course = await this.courseRepo.getById(query.courseId);
    if (!course) {
      throw new CourseNotFoundException(query.courseId);
    }

    return course;
  }
}
