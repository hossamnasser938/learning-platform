import { CreateCourseCommand } from "./CreateCourseCommand";
import { ICourseRepo } from "@l-p/courses/domain/contracts";
import { Course } from "@l-p/courses/domain/models";
import { inject, injectable } from "@l-p/shared/infrastructure/dependency-injection/utils";
import { courseRepoID } from "@l-p/courses/infrastructure/dependency-injection/tokens";
import { courseCreationServiceID } from "@l-p/courses/infrastructure/dependency-injection/tokens";
import { ICourseCreationService } from "@l-p/courses/domain/services";
import { ICreateCourseHandler } from "./ICreateCourseHandler";

@injectable()
export class CreateCourseHandler implements ICreateCourseHandler
{
  constructor(
    @inject(courseRepoID) private readonly courseRepo: ICourseRepo,
    @inject(courseCreationServiceID) private readonly courseCreationService: ICourseCreationService
  ) {}

  async handle(command: CreateCourseCommand): Promise<Course> {
    const course = await this.courseCreationService.createNewCourse(command.title, command.description, command.instructorId);

    await this.courseRepo.create(course);
    // TODO: fire events

    return course;
  }
}
