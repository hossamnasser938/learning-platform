import { IChapterRepo } from "@l-p/courses/domain/contracts/IChapterRepo";
import { IQueryHandler } from "@l-p/shared/domain/contracts/IQueryHandler";
import { Chapter } from "@l-p/courses/domain/models/chapter/Chapter";
import { GetCourseChaptersQuery } from "./GetCourseChaptersQuery";
import { ICourseRepo } from "@l-p/courses/domain/contracts/ICourseRepo";
import { EntityNotFoundException } from "@l-p/shared/domain/exceptions";
import { inject } from "inversify";
import {
  chapterRepoID,
  courseRepoID,
} from "@l-p/courses/infrastructure/dependency-injection/tokens";

export class GetCourseChaptersHandler
  implements IQueryHandler<GetCourseChaptersQuery, Chapter[]>
{
  constructor(
    @inject(chapterRepoID) private readonly chapterRepo: IChapterRepo,
    @inject(courseRepoID) private readonly courseRepo: ICourseRepo
  ) {}

  async handle(query: GetCourseChaptersQuery): Promise<Chapter[]> {
    const course = await this.courseRepo.getById(query.courseId);
    if (!course) {
      throw new EntityNotFoundException("Course not found");
    }

    return await this.chapterRepo.getByCourseId(query.courseId);
  }
}
