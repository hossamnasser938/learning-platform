import { IUniqueIDGenerator } from "@l-p/shared/domain/contracts";
import { AddLearnerCommand } from "./AddLearnerCommand";
import { ILearnerRepo } from "../../../domain/contracts";
import { Learner } from "../../../domain/models/learner/Learner";
import { inject, injectable } from "@l-p/shared/infrastructure/dependency-injection/utils";
import { learnerRepoID } from "../../../infrastructure/dependency-injection/tokens";
import { uniqueIDGeneratorID } from "@l-p/shared/infrastructure/dependency-injection/tokens";
import { IAddLearnerHandler } from "./IAddLearnerHandler";

@injectable()
export class AddLearnerHandler implements IAddLearnerHandler
{
  constructor(
    @inject(learnerRepoID) private readonly learnerRepo: ILearnerRepo,
    @inject(uniqueIDGeneratorID)
    private readonly idGenerator: IUniqueIDGenerator
  ) {}

  async handle(command: AddLearnerCommand): Promise<Learner> {
    const learnerId = this.idGenerator.generate();

    const learner = Learner.newLearner(
      learnerId,
      command.name,
      command.age,
      command.country,
      command.preferredCourseCategories
    );

    await this.learnerRepo.create(learner);

    return learner;
  }
}
