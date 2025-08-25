import { IQueryHandler } from "@l-p/shared/domain/contracts";
import { GetCourseChaptersQuery } from "./GetCourseChaptersQuery";
import { Chapter } from "@l-p/courses/domain/models";

export interface IGetCourseChaptersHandler
  extends IQueryHandler<GetCourseChaptersQuery, Chapter[]> {}
