import { ICommandHandler } from "@l-p/shared/domain/contracts/ICommandHandler";
import { CreateLessonCommand } from "./CreateLessonCommand";
import { ILessonRepo } from "@l-p/courses/domain/contracts/ILessonRepo";
import { Lesson } from "@l-p/courses/domain/models/lesson/Lesson";
import { IUniqueIDGenerator } from "@l-p/shared/domain/contracts/IUniqueIDGenerator";
import {
  inject,
  injectable,
} from "@l-p/shared/infrastructure/dependency-injection/utils";
import {
  lessonRepoID,
  chapterRepoID,
} from "@l-p/courses/infrastructure/dependency-injection/tokens";
import { uniqueIDGeneratorId } from "@l-p/shared/infrastructure/dependency-injection/tokens";
import { IChapterRepo } from "@l-p/courses/domain/contracts/IChapterRepo";
import { EntityNotFoundException } from "@l-p/shared/domain/exceptions";

@injectable()
export class CreateLessonHandler
  implements ICommandHandler<CreateLessonCommand>
{
  constructor(
    @inject(lessonRepoID) private readonly lessonRepo: ILessonRepo,
    @inject(chapterRepoID) private readonly chapterRepo: IChapterRepo,
    @inject(uniqueIDGeneratorId)
    private readonly idGenerator: IUniqueIDGenerator
  ) {}

  async handle(command: CreateLessonCommand): Promise<void> {
    const chapter = await this.chapterRepo.getById(command.chapterId);
    if (!chapter) {
      throw new EntityNotFoundException("Chapter not found");
    }

    const lessonId = this.idGenerator.generate();

    const lesson = Lesson.newLesson(
      lessonId,
      command.title,
      command.content,
      command.chapterId
    );

    chapter.addLesson(lesson);

    await this.lessonRepo.create(lesson);
  }
}
