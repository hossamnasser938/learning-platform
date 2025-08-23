import { ICommandHandler } from "@l-p/shared/domain/contracts";
import { CreateCourseCommand } from "./CreateCourseCommand";
import { ICourseRepo } from "@l-p/courses/domain/contracts";
import { Course } from "@l-p/courses/domain/models";
import { inject, injectable } from "@l-p/shared/infrastructure/dependency-injection/utils";
import { courseRepoID } from "@l-p/courses/infrastructure/dependency-injection/tokens";
import { ICourseService } from "@l-p/courses/domain/services/course/ICourseService";
import { courseServiceID } from "@l-p/courses/infrastructure/dependency-injection/tokens";

@injectable()
export class CreateCourseHandler
  implements ICommandHandler<CreateCourseCommand, Course>
{
  constructor(
    @inject(courseRepoID) private readonly courseRepo: ICourseRepo,
    @inject(courseServiceID) private readonly courseService: ICourseService
  ) {}

  async handle(command: CreateCourseCommand): Promise<Course> {
    const course = await this.courseService.createNewCourse(command.title, command.description, command.instructorId);

    await this.courseRepo.create(course);
    // TODO: fire events

    return course;
  }
}
