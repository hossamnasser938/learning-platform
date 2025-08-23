import { ILogger, IEventBus, IUniqueIDGenerator } from "@l-p/shared/domain/contracts";
import { ServiceIdentifier } from "./utils";

export const loggerID: ServiceIdentifier<ILogger> = Symbol.for("Logger");
export const eventBusID: ServiceIdentifier<IEventBus> = Symbol.for("EventBus");
export const uniqueIDGeneratorID: ServiceIdentifier<IUniqueIDGenerator> = Symbol.for("UniqueIDGenerator");
