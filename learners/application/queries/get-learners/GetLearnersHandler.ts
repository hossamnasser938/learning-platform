import { GetLearnersQuery } from "./GetLearnersQuery";
import { ILearnerRepo } from "@l-p/learners/domain/contracts";
import { inject, injectable } from "@l-p/shared/infrastructure/dependency-injection/utils";
import { learnerRepoID } from "@l-p/learners/infrastructure/dependency-injection/tokens";
import { Learner } from "@l-p/learners/domain/models";
import { IGetLearnersHandler } from "./IGetLearnersHandler";

@injectable()
export class GetLearnersHandler implements IGetLearnersHandler {
  constructor(
    @inject(learnerRepoID) private readonly learnerRepo: ILearnerRepo
  ) {}

  async handle(query: GetLearnersQuery): Promise<Learner[]> {
    return await this.learnerRepo.getAll();
  }
}
