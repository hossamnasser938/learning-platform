import { ConsoleLogger } from "@l-p/shared/infrastructure/services/ConsoleLogger";
import { loggerId } from "./tokens";
import { Container } from "./utils";

export function bindDependencies(container: Container) {
  container.bind(loggerId).to(ConsoleLogger);
}
