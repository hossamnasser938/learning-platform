import { Container } from "@l-p/shared/infrastructure/dependency-injection/utils";
import { LearnersApi } from "@l-p/learners/api/LearnersApi";
import { learnersApiID } from "./tokens";

export function bindDependencies(container: Container) {
  container.bind(learnersApiID).to(LearnersApi);
}
