import { CreateChapterCommand } from "./CreateChapterCommand";
import { IChapterRepo } from "@l-p/courses/domain/contracts";
import { Chapter } from "@l-p/courses/domain/models";
import {
  inject,
  injectable,
} from "@l-p/shared/infrastructure/dependency-injection/utils";
import {
  chapterRepoID,
  courseCreationServiceID,
} from "@l-p/courses/infrastructure/dependency-injection/tokens";
import { ICourseCreationService } from "@l-p/courses/domain/services";
import { ICreateChapterHandler } from "./ICreateChapterHandler";

@injectable()
export class CreateChapterHandler implements ICreateChapterHandler {
  constructor(
    @inject(courseCreationServiceID) private readonly courseCreationService: ICourseCreationService,
    @inject(chapterRepoID) private readonly chapterRepo: IChapterRepo
  ) {}

  async handle(command: CreateChapterCommand): Promise<Chapter> {
    const chapter = await this.courseCreationService.createNewChapter(
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
