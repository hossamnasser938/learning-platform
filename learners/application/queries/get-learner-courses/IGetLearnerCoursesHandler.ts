import { IQueryHandler } from "@l-p/shared/domain/contracts";
import { GetLearnerCoursesQuery } from "./GetLearnerCoursesQuery";
import { GetCoursesResponse } from "@l-p/courses/api/responses";

export interface IGetLearnerCoursesHandler
  extends IQueryHandler<GetLearnerCoursesQuery, GetCoursesResponse> {}
