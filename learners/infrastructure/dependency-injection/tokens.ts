import { ServiceIdentifier } from "@l-p/shared/infrastructure/dependency-injection/utils";
import { ILearnersApi } from "@l-p/learners/api/ILearnersApi";
import { IEventBusConsumer } from "@l-p/shared/domain/contracts";
import { ILearnerRepo } from "../../domain/contracts";
import { IAddLearnerHandler } from "../../application/commands/add-learner";
import { IGetLearnersHandler } from "../../application/queries/get-learners";

export const learnersApiID: ServiceIdentifier<ILearnersApi> =
  Symbol.for("LearnersApi");
export const eventBusConsumerID: ServiceIdentifier<IEventBusConsumer> =
  Symbol.for("EventBusConsumer");

export const addLearnerHandlerID: ServiceIdentifier<IAddLearnerHandler> =
  Symbol.for("IAddLearnerHandler");
export const getLearnersHandlerID: ServiceIdentifier<IGetLearnersHandler> =
  Symbol.for("IGetLearnersHandler");
export const learnerRepoID: ServiceIdentifier<ILearnerRepo> = Symbol.for(
  "LearnerRepository"
);