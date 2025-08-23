import { ILessonService } from "./ILessonService";
import { Lesson } from "../../models";
import { IChapterRepo } from "../../contracts";
import { IUniqueIDGenerator } from "@l-p/shared/domain/contracts";
import { inject, injectable } from "@l-p/shared/infrastructure/dependency-injection/utils";
import { chapterRepoID } from "@l-p/courses/infrastructure/dependency-injection/tokens";
import { uniqueIDGeneratorId } from "@l-p/shared/infrastructure/dependency-injection/tokens";
import { ChapterNotFoundException } from "../../models/chapter/exceptions/ChapterExceptions";

@injectable()
export class LessonService implements ILessonService {
  constructor(
    @inject(chapterRepoID) private readonly chapterRepo: IChapterRepo,
    @inject(uniqueIDGeneratorId) private readonly idGenerator: IUniqueIDGenerator
  ) {}

  async createNewLesson(
    title: string,
    content: string,
    order: number,
    chapterId: string
  ): Promise<Lesson> {
    const chapter = await this.chapterRepo.getById(chapterId);
    
    const chapterExists = !!chapter;
    if (!chapterExists) {
      throw new ChapterNotFoundException(chapterId);
    }

    const lessonId = this.idGenerator.generate();

    const lesson = Lesson.newLesson(lessonId, title, content, order, chapterId);

    chapter.addLesson(lesson);

    return lesson;
  }
}
