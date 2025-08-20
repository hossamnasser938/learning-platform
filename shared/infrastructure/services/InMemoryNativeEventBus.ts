import { IEventBus } from "@l-p/shared/domain/contracts/IEventBus";

export class InMemoryNativeEventBus implements IEventBus {
  private eventsSubscribers: Record<string, Set<(event: any) => void>> = {};

  subscribe(eventType: string, handler: (event: any) => void): void {
    if (!this.eventsSubscribers[eventType]) {
      this.eventsSubscribers[eventType] = new Set();
    }
    this.eventsSubscribers[eventType].add(handler);
  }

  unsubscribe(eventType: string, handler: (event: any) => void): void {
    this.eventsSubscribers[eventType]?.delete(handler);
  }

  emit(eventType: string, event: any): void {
    this.eventsSubscribers[eventType]?.forEach((subscriber) => {
      subscriber(event);
    });
  }
}
