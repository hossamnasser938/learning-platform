import { GetLearnersQuery } from "../application/queries/get-learners";
import { AddLearnerDTO } from "./request-dtos";
import { AddLearnerResponse, GetLearnersResponse } from "./responses";

export interface ILearnersApi {
  healthCheck(): Promise<boolean>;

  startService(): Promise<void>;

  addLearner(dto: AddLearnerDTO): Promise<AddLearnerResponse>;

  getLearners(getLearnersQuery: GetLearnersQuery): Promise<GetLearnersResponse>;
}
