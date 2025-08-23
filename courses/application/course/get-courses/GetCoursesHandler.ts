import { GetCoursesQuery } from "./GetCoursesQuery";
import { ICourseRepo } from "@l-p/courses/domain/contracts";
import { IQueryHandler } from "@l-p/shared/domain/contracts";
import {
  inject,
  injectable,
} from "@l-p/shared/infrastructure/dependency-injection/utils";
import { courseRepoID } from "@l-p/courses/infrastructure/dependency-injection/tokens";
import { Course } from "@l-p/courses/domain/models";

@injectable()
export class GetCoursesHandler
  implements IQueryHandler<GetCoursesQuery, Course[]>
{
  constructor(@inject(courseRepoID) private readonly courseRepo: ICourseRepo) {}

  async handle(query: GetCoursesQuery): Promise<Course[]> {
    return await this.courseRepo.getAll();
  }
}
