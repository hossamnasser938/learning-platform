import { ICourseRepo } from "@l-p/courses/domain/contracts/ICourseRepo";
import { CreateCourseCommand } from "./CreateCourseCommand";
import { Course } from "@l-p/courses/domain/models/course/Course";
import { ICommandHandler } from "@l-p/shared/domain/contracts/ICommandHandler";
import {
  inject,
  injectable,
} from "@l-p/shared/infrastructure/dependency-injection/utils";
import {
  courseRepoID,
  instructorRepoID,
} from "@l-p/courses/infrastructure/dependency-injection/tokens";
import { uniqueIDGeneratorId } from "@l-p/shared/infrastructure/dependency-injection/tokens";
import { IUniqueIDGenerator } from "@l-p/shared/domain/contracts/IUniqueIDGenerator";
import { IInstructorRepo } from "@l-p/courses/domain/contracts/IInstructorRepo";
import { EntityNotFoundException } from "@l-p/shared/domain/exceptions";

@injectable()
export class CreateCourseHandler
  implements ICommandHandler<CreateCourseCommand>
{
  constructor(
    @inject(courseRepoID) private readonly courseRepository: ICourseRepo,
    @inject(instructorRepoID) private readonly instructorRepo: IInstructorRepo,
    @inject(uniqueIDGeneratorId)
    private readonly idGenerator: IUniqueIDGenerator
  ) {}

  async handle(command: CreateCourseCommand): Promise<void> {
    const instructor = await this.instructorRepo.getById(command.instructorId);
    if (!instructor) {
      throw new EntityNotFoundException("Instructor not found");
    }

    const id = this.idGenerator.generate();
    const course = Course.newCourse(
      id,
      command.title,
      command.description,
      instructor.getId().getValue()
    );

    instructor.addCourse(course);

    await this.courseRepository.create(course, instructor);
  }
}
