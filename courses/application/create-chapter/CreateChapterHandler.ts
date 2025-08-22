import { ICommandHandler } from "@l-p/shared/domain/contracts/ICommandHandler";
import { CreateChapterCommand } from "./CreateChapterCommand";
import { IChapterRepo } from "@l-p/courses/domain/contracts/IChapterRepo";
import { Chapter } from "@l-p/courses/domain/models/chapter/Chapter";
import { IUniqueIDGenerator } from "@l-p/shared/domain/contracts/IUniqueIDGenerator";
import {
  inject,
  injectable,
} from "@l-p/shared/infrastructure/dependency-injection/utils";
import {
  chapterRepoID,
  courseRepoID,
} from "@l-p/courses/infrastructure/dependency-injection/tokens";
import { uniqueIDGeneratorId } from "@l-p/shared/infrastructure/dependency-injection/tokens";
import { ICourseRepo } from "@l-p/courses/domain/contracts/ICourseRepo";
import { EntityNotFoundException } from "@l-p/shared/domain/exceptions";

@injectable()
export class CreateChapterHandler
  implements ICommandHandler<CreateChapterCommand>
{
  constructor(
    @inject(chapterRepoID) private readonly chapterRepo: IChapterRepo,
    @inject(courseRepoID) private readonly courseRepo: ICourseRepo,
    @inject(uniqueIDGeneratorId)
    private readonly idGenerator: IUniqueIDGenerator
  ) {}

  async handle(command: CreateChapterCommand): Promise<void> {
    const course = await this.courseRepo.getById(command.courseId);
    if (!course) {
      throw new EntityNotFoundException("Course not found");
    }

    const chapterId = this.idGenerator.generate();

    const chapter = Chapter.create(
      chapterId,
      command.title,
      command.description,
      command.order,
      command.courseId
    );

    course.addChapter(chapter);

    await this.chapterRepo.create(chapter);
  }
}
