import { ICommandHandler } from "@l-p/shared/domain/contracts";
import { CreateLessonCommand } from "./CreateLessonCommand";
import { Lesson } from "@l-p/courses/domain/models";
import {
  inject,
  injectable,
} from "@l-p/shared/infrastructure/dependency-injection/utils";
import { lessonRepoID, lessonServiceID } from "@l-p/courses/infrastructure/dependency-injection/tokens";
import { ILessonService } from "@l-p/courses/domain/services";
import { ILessonRepo } from "@l-p/courses/domain/contracts";

@injectable()
export class CreateLessonHandler
  implements ICommandHandler<CreateLessonCommand, Lesson>
{
  constructor(
    @inject(lessonServiceID) private readonly lessonService: ILessonService,
    @inject(lessonRepoID) private readonly lessonRepo: ILessonRepo,
  ) {}

  async handle(command: CreateLessonCommand): Promise<Lesson> {
    const lesson = await this.lessonService.createNewLesson(
      command.title,
      command.content,
      command.order,
      command.chapterId
    );

    await this.lessonRepo.create(lesson);
    // TODO: fire events

    return lesson;
  }
}
