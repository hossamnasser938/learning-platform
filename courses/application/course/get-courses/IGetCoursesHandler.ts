import { IQueryHandler } from "@l-p/shared/domain/contracts";
import { GetCoursesQuery } from "./GetCoursesQuery";
import { Course } from "@l-p/courses/domain/models";

export interface IGetCoursesHandler
  extends IQueryHandler<GetCoursesQuery, Course[]> {}
