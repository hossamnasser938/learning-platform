import { GetChapterLessonsQuery } from "./GetChapterLessonsQuery";
import { IChapterRepo, ILessonRepo } from "@l-p/courses/domain/contracts";
import { inject, injectable } from "@l-p/shared/infrastructure/dependency-injection/utils";
import { chapterRepoID, lessonRepoID } from "@l-p/courses/infrastructure/dependency-injection/tokens";
import { Lesson } from "@l-p/courses/domain/models";
import { IGetChapterLessonsHandler } from "./IGetChapterLessonsHandler";
import { ChapterNotFoundException } from "@l-p/courses/domain/models/chapter/exceptions/ChapterExceptions";

@injectable()
export class GetChapterLessonsHandler implements IGetChapterLessonsHandler
{
  constructor(
    @inject(chapterRepoID) private readonly chapterRepo: IChapterRepo,
    @inject(lessonRepoID) private readonly lessonRepo: ILessonRepo
  ) {}

  async handle(query: GetChapterLessonsQuery): Promise<Lesson[]> {
    const chapter = await this.chapterRepo.getById(query.chapterId);
    if (!chapter) {
      throw new ChapterNotFoundException(query.chapterId);
    }

    return await this.lessonRepo.getByChapterId(query.chapterId);
  }
}
