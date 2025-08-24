import { IEventBus } from "@l-p/shared/domain/contracts/IEventBus";

export class InMemoryNativeEventBus implements IEventBus {
  private eventsSubscribers: Record<string, Set<(event: any) => void>> = {};

  private getEventName(event: any): string {
    return event.constructor.name;
  }

  subscribe(event: any, handler: (event: any) => void): void {
    const eventName = this.getEventName(event);
    if (!this.eventsSubscribers[eventName]) {
      this.eventsSubscribers[eventName] = new Set();
    }
    this.eventsSubscribers[eventName].add(handler);
  }

  unsubscribe(event: any, handler: (event: any) => void): void {
    const eventName = this.getEventName(event);
    this.eventsSubscribers[eventName]?.delete(handler);
  }

  publish = (event: any): void => {
    const eventName = this.getEventName(event);
    this.eventsSubscribers[eventName]?.forEach((subscriber) => {
      subscriber(event);
    });
  }
}
