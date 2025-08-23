import { DomainEvent } from "../domain-event";
import { Entity } from "../entity";
import { ValueObject } from "../value-object";

export class AggregateRoot<T extends ValueObject> extends Entity<T> {
  private events: DomainEvent[] = [];

  constructor(id: T) {
    super(id);
  }

  private clearEvents(): void {
    this.events = [];
  }

  public addEvent(event: DomainEvent): void {
    this.events.push(event);
  }

  public getEvents(): DomainEvent[] {
    const currentEvents = [...this.events];
    this.clearEvents();

    return currentEvents;
  }
}