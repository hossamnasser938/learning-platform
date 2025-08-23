import { Lesson } from "@l-p/courses/domain/models";
import { ICommandHandler } from "@l-p/shared/domain/contracts";
import { CreateLessonCommand } from "./CreateLessonCommand";

export interface ICreateLessonHandler
  extends ICommandHandler<CreateLessonCommand, Lesson> {}
