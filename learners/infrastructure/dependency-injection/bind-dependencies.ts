import { Container } from "@l-p/shared/infrastructure/dependency-injection/utils";
import { LearnersApi } from "@l-p/learners/api/LearnersApi";
import { learnersApiID } from "./tokens";
import { eventBusConsumerID } from "./tokens";
import { EventBusConsumer } from "@l-p/learners/infrastructure/event-bus-consumer";

export function bindDependencies(container: Container) {
  container.bind(learnersApiID).to(LearnersApi);
  container.bind(eventBusConsumerID).to(EventBusConsumer);
}