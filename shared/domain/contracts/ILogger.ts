export interface ILogger {
  log(message: string): void;
  info(message: string): void;
  debug(message: string): void;
  error(error: string): void;
}
