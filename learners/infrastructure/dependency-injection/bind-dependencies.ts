import { Container } from "@l-p/shared/infrastructure/dependency-injection/utils";
import { LearnersApi } from "@l-p/learners/api/LearnersApi";
import {  } from "./tokens";
import { EventBusConsumer } from "@l-p/learners/infrastructure/event-bus-consumer";
import { LearnerRepo } from "../repositories/in-memory/LearnerRepo";
import { AddLearnerHandler } from "../../application/commands/add-learner/AddLearnerHandler";
import { GetLearnersHandler } from "../../application/queries/get-learners/GetLearnersHandler";
import {
  learnerRepoID,
  addLearnerHandlerID,
  learnersApiID, 
  eventBusConsumerID,
  getLearnersHandlerID
} from "./tokens";

export function bindDependencies(container: Container) {
  container.bind(learnersApiID).to(LearnersApi);
  
  container.bind(eventBusConsumerID).to(EventBusConsumer);

  container.bind(addLearnerHandlerID).to(AddLearnerHandler);
  container.bind(getLearnersHandlerID).to(GetLearnersHandler);
  container.bind(learnerRepoID).to(LearnerRepo).inSingletonScope();
}