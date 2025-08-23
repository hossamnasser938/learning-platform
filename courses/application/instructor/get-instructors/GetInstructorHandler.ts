import { GetInstructorsQuery } from "./GetInstructorQuery";
import { IInstructorRepo } from "@l-p/courses/domain/contracts";
import { inject, injectable } from "@l-p/shared/infrastructure/dependency-injection/utils";
import { instructorRepoID } from "@l-p/courses/infrastructure/dependency-injection/tokens";
import { Instructor } from "@l-p/courses/domain/models";
import { IGetInstructorsHandler } from "./IGetInstructorsHandler";

@injectable()
export class GetInstructorsHandler implements IGetInstructorsHandler {
  constructor(
    @inject(instructorRepoID) private readonly instructorRepo: IInstructorRepo
  ) {}

  async handle(query: GetInstructorsQuery): Promise<Instructor[]> {
    return await this.instructorRepo.getAll();
  }
}
