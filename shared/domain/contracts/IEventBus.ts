export interface IEventBus {
  subscribe(eventType: string, handler: (event: any) => void): void;
  unsubscribe(eventType: string, handler: (event: any) => void): void;
  emit(eventType: string, event: any): void;
}
