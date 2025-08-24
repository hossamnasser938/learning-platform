import { EventHandler } from "@l-p/shared/domain/contracts";
import { CoursePublishedEventDTO } from "@l-p/courses/api/event-dtos";

export class CoursePublishedEventHandler implements EventHandler<CoursePublishedEventDTO> {
  handle(event: CoursePublishedEventDTO): void {
    console.log("Learners CoursePublishedEventHandler", event);
  }
}