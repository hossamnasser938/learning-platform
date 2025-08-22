import { CreateInstructorCommand } from "./CreateInstructorCommand";
import { Instructor } from "@l-p/courses/domain/models/instructor/Instructor";
import { IInstructorRepo } from "@l-p/courses/domain/contracts/IInstructorRepo";
import {
  inject,
  injectable,
} from "@l-p/shared/infrastructure/dependency-injection/utils";
import { instructorRepoID } from "@l-p/courses/infrastructure/dependency-injection/tokens";
import { ICommandHandler } from "@l-p/shared/domain/contracts/ICommandHandler";
import { IUniqueIDGenerator } from "@l-p/shared/domain/contracts/IUniqueIDGenerator";
import { uniqueIDGeneratorId } from "@l-p/shared/infrastructure/dependency-injection/tokens";

@injectable()
export class CreateInstructorHandler
  implements ICommandHandler<CreateInstructorCommand, void>
{
  constructor(
    @inject(instructorRepoID)
    private readonly instructorRepository: IInstructorRepo,
    @inject(uniqueIDGeneratorId)
    private readonly idGenerator: IUniqueIDGenerator
  ) {}

  async handle(command: CreateInstructorCommand): Promise<void> {
    const { name, bio } = command;
    const id = this.idGenerator.generate();
    const instructor = Instructor.newInstructor(id, name, bio);
    await this.instructorRepository.create(instructor);
  }
}
