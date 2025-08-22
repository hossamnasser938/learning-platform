import { ConsoleLogger } from "@l-p/shared/infrastructure/services/ConsoleLogger";
import { eventBusId, loggerId, uniqueIDGeneratorId } from "./tokens";
import { Container } from "./utils";
import { InMemoryNativeEventBus } from "../services/InMemoryNativeEventBus";
import { UUIDGenerator } from "../services/UUIDGenerator";

export function bindDependencies(container: Container) {
  container.bind(loggerId).to(ConsoleLogger);
  container.bind(eventBusId).to(InMemoryNativeEventBus);
  container.bind(uniqueIDGeneratorId).to(UUIDGenerator);
}
