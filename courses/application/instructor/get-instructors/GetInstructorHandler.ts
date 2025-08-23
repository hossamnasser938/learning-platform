import { GetInstructorsQuery } from "./GetInstructorQuery";
import { IInstructorRepo } from "@l-p/courses/domain/contracts";
import { IQueryHandler } from "@l-p/shared/domain/contracts";
import { inject, injectable } from "@l-p/shared/infrastructure/dependency-injection/utils";
import { instructorRepoID } from "@l-p/courses/infrastructure/dependency-injection/tokens";
import { Instructor } from "@l-p/courses/domain/models";

@injectable()
export class GetInstructorsHandler implements IQueryHandler<GetInstructorsQuery, Instructor[]> {
  constructor(
    @inject(instructorRepoID) private readonly instructorRepo: IInstructorRepo
  ) {}

  async handle(query: GetInstructorsQuery): Promise<Instructor[]> {
    return await this.instructorRepo.getAll();
  }
}
