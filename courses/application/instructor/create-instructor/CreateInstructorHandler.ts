import { IUniqueIDGenerator } from "@l-p/shared/domain/contracts";
import { CreateInstructorCommand } from "./CreateInstructorCommand";
import { IInstructorRepo } from "@l-p/courses/domain/contracts";
import { Instructor } from "@l-p/courses/domain/models";
import { inject, injectable } from "@l-p/shared/infrastructure/dependency-injection/utils";
import { instructorRepoID } from "@l-p/courses/infrastructure/dependency-injection/tokens";
import { uniqueIDGeneratorID } from "@l-p/shared/infrastructure/dependency-injection/tokens";
import { ICreateInstructorHandler } from "./ICreateInstructorHandler";

@injectable()
export class CreateInstructorHandler implements ICreateInstructorHandler
{
  constructor(
    @inject(instructorRepoID) private readonly instructorRepo: IInstructorRepo,
    @inject(uniqueIDGeneratorID)
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
