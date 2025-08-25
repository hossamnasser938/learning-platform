import { AddLearnerDTO } from "./request-dtos";
import { AddLearnerResponse } from "./responses";

export interface ILearnersApi {
  healthCheck(): Promise<boolean>;

  startService(): Promise<void>;

  addLearner(dto: AddLearnerDTO): Promise<AddLearnerResponse>;
}
