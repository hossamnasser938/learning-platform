import { ConsoleLogger } from "@l-p/shared/infrastructure/services/ConsoleLogger";
import { loggerID, eventBusID, uniqueIDGeneratorID } from "./tokens";
import { Container } from "./utils";
import { InMemoryNativeEventBus } from "../services/InMemoryNativeEventBus";
import { UUIDGenerator } from "../services/UUIDGenerator";

export function bindDependencies(container: Container) {
  container.bind(loggerID).to(ConsoleLogger);
  container.bind(eventBusID).to(InMemoryNativeEventBus).inSingletonScope();
  container.bind(uniqueIDGeneratorID).to(UUIDGenerator);
}
