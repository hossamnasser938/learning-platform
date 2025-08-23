import { ICommandHandler } from "@l-p/shared/domain/contracts/ICommandHandler";
import { CreateCourseCommand } from "./CreateCourseCommand";
import { ICourseRepo } from "@l-p/courses/domain/contracts/ICourseRepo";
import { Course } from "@l-p/courses/domain/models/course/Course";
import {
  inject,
  injectable,
} from "@l-p/shared/infrastructure/dependency-injection/utils";
import {
  courseRepoID,
  courseServiceID,
} from "@l-p/courses/infrastructure/dependency-injection/tokens";
import { CourseService } from "@l-p/courses/domain/services/course/CourseService";

@injectable()
export class CreateCourseHandler
  implements ICommandHandler<CreateCourseCommand, Course>
{
  constructor(
    @inject(courseRepoID) private readonly courseRepo: ICourseRepo,
    @inject(courseServiceID) private readonly courseService: CourseService
  ) {}

  async handle(command: CreateCourseCommand): Promise<Course> {
    const course = await this.courseService.createNewCourse(command.title, command.description, command.instructorId);

    await this.courseRepo.create(course);
    // TODO: fire events

    return course;
  }
}
