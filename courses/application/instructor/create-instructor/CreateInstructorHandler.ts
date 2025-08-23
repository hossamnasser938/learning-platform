import { ICommandHandler } from "@l-p/shared/domain/contracts/ICommandHandler";
import { CreateInstructorCommand } from "./CreateInstructorCommand";
import { IInstructorRepo } from "@l-p/courses/domain/contracts/IInstructorRepo";
import { Instructor } from "@l-p/courses/domain/models/instructor/Instructor";
import { IUniqueIDGenerator } from "@l-p/shared/domain/contracts/IUniqueIDGenerator";
import {
  inject,
  injectable,
} from "@l-p/shared/infrastructure/dependency-injection/utils";
import {
  instructorRepoID,
} from "@l-p/courses/infrastructure/dependency-injection/tokens";
import { uniqueIDGeneratorId } from "@l-p/shared/infrastructure/dependency-injection/tokens";

@injectable()
export class CreateInstructorHandler
  implements ICommandHandler<CreateInstructorCommand, Instructor>
{
  constructor(
    @inject(instructorRepoID) private readonly instructorRepo: IInstructorRepo,
    @inject(uniqueIDGeneratorId)
    private readonly idGenerator: IUniqueIDGenerator
  ) {}

  async handle(command: CreateInstructorCommand): Promise<Instructor> {
    const instructorId = this.idGenerator.generate();

    const instructor = Instructor.newInstructor(
      instructorId,
      command.name,
      command.bio
    );

    await this.instructorRepo.create(instructor);

    return instructor;
  }
}
