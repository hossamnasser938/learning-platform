import { IEventBus, IEventBusConsumer } from "@l-p/shared/domain/contracts";
import { CoursePublishedEventDTO } from "@l-p/courses/api/event-dtos";
import { CoursePublishedEventHandler } from "@l-p/learners/application/event-handlers/course-published";
import { eventBusID } from "@l-p/shared/infrastructure/dependency-injection/tokens";
import { inject } from "@l-p/shared/infrastructure/dependency-injection/utils";

export class EventBusConsumer implements IEventBusConsumer {
  constructor(@inject(eventBusID) private readonly eventBus: IEventBus) {}

  start() {
    const coursePublishedEventHandler = new CoursePublishedEventHandler();
    this.eventBus.subscribe(CoursePublishedEventDTO, coursePublishedEventHandler.handle);
  }
}