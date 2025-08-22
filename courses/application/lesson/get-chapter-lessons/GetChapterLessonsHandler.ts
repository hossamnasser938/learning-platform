import { IQueryHandler } from "@l-p/shared/domain/contracts/IQueryHandler";
import { GetChapterLessonsQuery } from "./GetChapterLessonsQuery";
import { ILessonRepo } from "@l-p/courses/domain/contracts/ILessonRepo";
import { Lesson } from "@l-p/courses/domain/models/lesson/Lesson";
import {
  inject,
  injectable,
} from "@l-p/shared/infrastructure/dependency-injection/utils";
import {
  lessonRepoID,
} from "@l-p/courses/infrastructure/dependency-injection/tokens";

@injectable()
export class GetChapterLessonsHandler
  implements IQueryHandler<GetChapterLessonsQuery, Lesson[]>
{
  constructor(
    @inject(lessonRepoID) private readonly lessonRepo: ILessonRepo
  ) {}

  async handle(query: GetChapterLessonsQuery): Promise<Lesson[]> {
    return await this.lessonRepo.getByChapterId(query.chapterId);
  }
}
