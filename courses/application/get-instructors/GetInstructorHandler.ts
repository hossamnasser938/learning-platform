import { IInstructorRepo } from "@l-p/courses/domain/contracts/IInstructorRepo";
import { Instructor } from "@l-p/courses/domain/models/instructor/Instructor";
import { instructorRepoID } from "@l-p/courses/infrastructure/dependency-injection/tokens";
import { IQueryHandler } from "@l-p/shared/domain/contracts/IQueryHandler";
import {
  inject,
  injectable,
} from "@l-p/shared/infrastructure/dependency-injection/utils";
import { GetInstructorsQuery } from "./GetInstructorQuery";

@injectable()
export class GetInstructorsHandler
  implements IQueryHandler<GetInstructorsQuery, Instructor[]>
{
  constructor(
    @inject(instructorRepoID)
    private readonly instructorRepository: IInstructorRepo
  ) {}

  async handle(query: GetInstructorsQuery): Promise<Instructor[]> {
    return this.instructorRepository.getAll();
  }
}
