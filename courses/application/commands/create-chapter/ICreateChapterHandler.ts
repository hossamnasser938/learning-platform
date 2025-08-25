import { Chapter } from "@l-p/courses/domain/models";
import { ICommandHandler } from "@l-p/shared/domain/contracts";
import { CreateChapterCommand } from "./CreateChapterCommand";

export interface ICreateChapterHandler
  extends ICommandHandler<CreateChapterCommand, Chapter> {}
