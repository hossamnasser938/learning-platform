import { IQueryHandler } from "@l-p/shared/domain/contracts";
import { GetLearnersQuery } from "./GetLearnersQuery";
import { Learner } from "@l-p/learners/domain/models";

export interface IGetLearnersHandler
  extends IQueryHandler<GetLearnersQuery, Learner[]> {}
