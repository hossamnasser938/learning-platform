import { ILogger } from "@l-p/shared/domain/contracts/ILogger";

export class ConsoleLogger implements ILogger {
  log(message: string) {
    console.log(message);
  }
  info(message: string) {
    console.info(message);
  }
  debug(message: string) {
    console.debug(message);
  }
  error(error: string) {
    console.error(error);
  }
}
