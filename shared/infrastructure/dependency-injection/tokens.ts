import { ILogger } from "@l-p/shared/domain/contracts/ILogger";
import { IEventBus } from "@l-p/shared/domain/contracts/IEventBus";
import { ServiceIdentifier } from "./utils";
import { IUniqueIDGenerator } from "@l-p/shared/domain/contracts/IUniqueIDGenerator";

export const loggerId: ServiceIdentifier<ILogger> = Symbol.for("Logger");
export const eventBusId: ServiceIdentifier<IEventBus> = Symbol.for("EventBus");
export const uniqueIDGeneratorId: ServiceIdentifier<IUniqueIDGenerator> =
  Symbol.for("UniqueIDGenerator");
