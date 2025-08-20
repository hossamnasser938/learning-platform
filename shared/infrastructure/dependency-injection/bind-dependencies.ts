import { ConsoleLogger } from "@l-p/shared/infrastructure/services/ConsoleLogger";
import { eventBusId, loggerId } from "./tokens";
import { Container } from "./utils";
import { InMemoryNativeEventBus } from "../services/InMemoryNativeEventBus";

export function bindDependencies(container: Container) {
  container.bind(loggerId).to(ConsoleLogger);
  container.bind(eventBusId).to(InMemoryNativeEventBus);
}
