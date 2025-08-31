import { IQueryHandler } from "@l-p/shared/domain/contracts";
import { GetCourseLearnersQuery } from "./GetCourseLearnersQuery";
import { GetLearnersResponse } from "../../../api/responses";

export interface IGetCourseLearnersHandler
  extends IQueryHandler<GetCourseLearnersQuery, GetLearnersResponse> {}
