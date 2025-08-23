import { ICommandHandler } from "@l-p/shared/domain/contracts";
import { CreateChapterCommand } from "./CreateChapterCommand";
import { Chapter } from "@l-p/courses/domain/models";
import {
  inject,
  injectable,
} from "@l-p/shared/infrastructure/dependency-injection/utils";
import { chapterRepoID, chapterServiceID } from "@l-p/courses/infrastructure/dependency-injection/tokens";
import { IChapterService } from "@l-p/courses/domain/services";
import { IChapterRepo } from "@l-p/courses/domain/contracts";

@injectable()
export class CreateChapterHandler
  implements ICommandHandler<CreateChapterCommand, Chapter>
{
  constructor(
    @inject(chapterServiceID) private readonly chapterService: IChapterService,
    @inject(chapterRepoID) private readonly chapterRepo: IChapterRepo,
  ) {}

  async handle(command: CreateChapterCommand): Promise<Chapter> {
    const chapter = await this.chapterService.createNewChapter(
      command.title,
      command.description,
      command.order,
      command.courseId
    );

    await this.chapterRepo.create(chapter);
    // TODO: fire events

    return chapter;
  }
}
