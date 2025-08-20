import { ILearnersApi } from "./ILearnersApi";

export class LearnersApi implements ILearnersApi {
  async healthCheck(): Promise<boolean> {
    return true;
  }
}
