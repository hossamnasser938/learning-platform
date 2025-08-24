import { ILearnersApi } from "@l-p/learners/api/ILearnersApi";
import { IEventBusConsumer } from "@l-p/shared/domain/contracts";
import { ServiceIdentifier } from "@l-p/shared/infrastructure/dependency-injection/utils";

export const learnersApiID: ServiceIdentifier<ILearnersApi> =
  Symbol.for("LearnersApi");
export const eventBusConsumerID: ServiceIdentifier<IEventBusConsumer> =
  Symbol.for("EventBusConsumer");
