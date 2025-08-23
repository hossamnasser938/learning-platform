import { ICommandHandler } from "@l-p/shared/domain/contracts/ICommandHandler";
import { CreateCourseCommand } from "./CreateCourseCommand";
import { ICourseRepo } from "@l-p/courses/domain/contracts/ICourseRepo";
import { Course } from "@l-p/courses/domain/models/course/Course";
import { IUniqueIDGenerator } from "@l-p/shared/domain/contracts/IUniqueIDGenerator";
import {
  inject,
  injectable,
} from "@l-p/shared/infrastructure/dependency-injection/utils";
import {
  courseRepoID,
  instructorRepoID,
} from "@l-p/courses/infrastructure/dependency-injection/tokens";
import { uniqueIDGeneratorId } from "@l-p/shared/infrastructure/dependency-injection/tokens";
import { IInstructorRepo } from "@l-p/courses/domain/contracts/IInstructorRepo";
import { EntityNotFoundException } from "@l-p/shared/domain/exceptions";

@injectable()
export class CreateCourseHandler
  implements ICommandHandler<CreateCourseCommand, Course>
{
  constructor(
    @inject(courseRepoID) private readonly courseRepo: ICourseRepo,
    @inject(uniqueIDGeneratorId)
    private readonly idGenerator: IUniqueIDGenerator,
    @inject(instructorRepoID) private readonly instructorRepo: IInstructorRepo
  ) {}

  async handle(command: CreateCourseCommand): Promise<Course> {
    const instructor = await this.instructorRepo.getById(command.instructorId);
    if (!instructor) {
      throw new EntityNotFoundException("Instructor not found");
    }

    const courseId = this.idGenerator.generate();

    const course = Course.newCourse(
      courseId,
      command.title,
      command.description,
      command.instructorId
    );

    await this.courseRepo.create(course, instructor);

    return course;
  }
}
