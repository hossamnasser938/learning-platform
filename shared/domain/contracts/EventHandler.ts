import { EventDTO } from "./EventDTO";

export interface EventHandler<T extends EventDTO> {
  handle(event: T): void;
}