import { CreateLessonCommand } from "./CreateLessonCommand";
import { Lesson } from "@l-p/courses/domain/models";
import {
  inject,
  injectable,
} from "@l-p/shared/infrastructure/dependency-injection/utils";
import { lessonRepoID, courseCreationServiceID } from "@l-p/courses/infrastructure/dependency-injection/tokens";
import { ILessonRepo } from "@l-p/courses/domain/contracts";
import { ICourseCreationService } from "@l-p/courses/domain/services";
import { ICreateLessonHandler } from "./ICreateLessonHandler";

@injectable()
export class CreateLessonHandler implements ICreateLessonHandler
{
  constructor(
    @inject(courseCreationServiceID) private readonly courseCreationService: ICourseCreationService,
    @inject(lessonRepoID) private readonly lessonRepo: ILessonRepo,
  ) {}

  async handle(command: CreateLessonCommand): Promise<Lesson> {
    const lesson = await this.courseCreationService.createNewLesson(
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
