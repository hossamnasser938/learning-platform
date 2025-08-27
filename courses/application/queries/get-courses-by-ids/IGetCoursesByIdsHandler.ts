import { IQueryHandler } from "@l-p/shared/domain/contracts";
import { GetCoursesByIdsQuery } from "./GetCoursesByIdsQuery";
import { Course } from "@l-p/courses/domain/models";

export interface IGetCoursesByIdsHandler
  extends IQueryHandler<GetCoursesByIdsQuery, Array<Course | null>> {}
