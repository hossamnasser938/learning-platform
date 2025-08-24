import { EventDTO } from "@l-p/shared/domain/contracts";
import { IEventBus } from "@l-p/shared/domain/contracts/IEventBus";

export class InMemoryNativeEventBus implements IEventBus {
  private eventsSubscribers: Record<string, Set<(event: EventDTO) => void>> = {};

  private getEventName(event: EventDTO): string {
    return event.constructor.name;
  }

  subscribe(eventClass: Function, handler: (event: EventDTO) => void): void {
    const eventName = eventClass.name;
    if (!this.eventsSubscribers[eventName]) {
      this.eventsSubscribers[eventName] = new Set();
    }
    this.eventsSubscribers[eventName].add(handler);
  }

  unsubscribe(eventClass: Function, handler: (event: EventDTO) => void): void {
    const eventName = eventClass.name;
    this.eventsSubscribers[eventName]?.delete(handler);
  }

  publish = (event: EventDTO): void => {
    const eventName = this.getEventName(event);
    
    this.eventsSubscribers[eventName]?.forEach((subscriber) => {
      subscriber(event);
    });
  }
}
