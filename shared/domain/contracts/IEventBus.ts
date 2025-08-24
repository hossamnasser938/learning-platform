import { EventDTO } from "./EventDTO";

export interface IEventBus {
  subscribe(eventClass: Function, handler: (event: EventDTO) => void): void;
  unsubscribe(eventClass: Function, handler: (event: EventDTO) => void): void;
  publish(event: EventDTO): void;
}
