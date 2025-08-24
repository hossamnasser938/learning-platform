export interface IEventBus {
  subscribe(eventClass: Function, handler: (event: any) => void): void;
  unsubscribe(eventClass: Function, handler: (event: any) => void): void;
  publish(event: any): void;
}
