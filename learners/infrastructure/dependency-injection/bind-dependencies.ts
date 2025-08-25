import { Container } from "@l-p/shared/infrastructure/dependency-injection/utils";
import { LearnersApi } from "@l-p/learners/api/LearnersApi";
import {  } from "./tokens";
import { EventBusConsumer } from "@l-p/learners/infrastructure/event-bus-consumer";
import { LearnerRepo } from "../repositories/in-memory/LearnerRepo";
import { AddLearnerHandler } from "../../application/commands/add-learner/AddLearnerHandler";
import {
  learnerRepoID,
  addLearnerHandlerID,
  learnersApiID, 
  eventBusConsumerID
} from "./tokens";

export function bindDependencies(container: Container) {
  container.bind(learnersApiID).to(LearnersApi);
  
  container.bind(eventBusConsumerID).to(EventBusConsumer);

  container.bind(addLearnerHandlerID).to(AddLearnerHandler);
  container.bind(learnerRepoID).to(LearnerRepo).inSingletonScope();
}