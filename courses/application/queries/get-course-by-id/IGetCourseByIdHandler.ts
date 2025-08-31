import { IQueryHandler } from "@l-p/shared/domain/contracts";
import { GetCourseByIdQuery } from "./GetCourseByIdQuery";
import { Course } from "@l-p/courses/domain/models";

export interface IGetCourseByIdHandler
  extends IQueryHandler<GetCourseByIdQuery, Course> {}
