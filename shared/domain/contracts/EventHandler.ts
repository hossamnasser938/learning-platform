export interface EventHandler<T extends any> {
  handle(event: T): void;
}