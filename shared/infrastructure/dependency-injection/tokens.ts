import { ILogger } from "@l-p/shared/domain/contracts/ILogger";
import { ServiceIdentifier } from "./utils";

export const loggerId: ServiceIdentifier<ILogger> = Symbol.for("Logger");
