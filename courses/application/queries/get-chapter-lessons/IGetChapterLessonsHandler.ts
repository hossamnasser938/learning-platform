import { IQueryHandler } from "@l-p/shared/domain/contracts";
import { GetChapterLessonsQuery } from "./GetChapterLessonsQuery";
import { Lesson } from "@l-p/courses/domain/models";

export interface IGetChapterLessonsHandler
  extends IQueryHandler<GetChapterLessonsQuery, Lesson[]> {}
