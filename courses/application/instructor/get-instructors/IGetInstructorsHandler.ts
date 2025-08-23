import { IQueryHandler } from "@l-p/shared/domain/contracts";
import { GetInstructorsQuery } from "./GetInstructorQuery";
import { Instructor } from "@l-p/courses/domain/models";

export interface IGetInstructorsHandler
  extends IQueryHandler<GetInstructorsQuery, Instructor[]> {}
