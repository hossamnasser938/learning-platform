import { GetCoursesByIdsQuery } from "./GetCoursesByIdsQuery";
import { ICourseRepo } from "@l-p/courses/domain/contracts";
import { inject, injectable } from "@l-p/shared/infrastructure/dependency-injection/utils";
import { courseRepoID } from "@l-p/courses/infrastructure/dependency-injection/tokens";
import { Course } from "@l-p/courses/domain/models";
import { IGetCoursesByIdsHandler } from "./IGetCoursesByIdsHandler";

@injectable()
export class GetCoursesByIdsHandler implements IGetCoursesByIdsHandler {
  constructor(
    @inject(courseRepoID) private readonly courseRepo: ICourseRepo
  ) {}

  async handle(query: GetCoursesByIdsQuery): Promise<Array<Course | null>> {
    return await this.courseRepo.getByIds(query.courseIds);
  }
}
