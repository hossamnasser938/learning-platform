import { CourseArchivedEventDTO, CoursePublishedEventDTO } from "@l-p/courses/api/event-dtos";
import { CourseEventDTO } from "@l-p/courses/api/event-dtos/CourseEventDTO";
import { CourseArchivedEvent } from "@l-p/courses/domain/events/CourseArchivedEvent";
import { CourseEvent } from "@l-p/courses/domain/events/CourseEvent";
import { CoursePublishedEvent } from "@l-p/courses/domain/events/CoursePublishedEvent";

export class CourseEventsMapper {
  static toDTO(event: CourseEvent): CourseEventDTO {
    switch (event.constructor) {
      case CoursePublishedEvent:
        const publishedEvent = event as CoursePublishedEvent;
        return new CoursePublishedEventDTO(
          publishedEvent.courseId, 
          publishedEvent.title, 
          publishedEvent.description, 
          publishedEvent.instructorId, 
          publishedEvent.status
        );
      case CourseArchivedEvent:
        const archivedEvent = event as CourseArchivedEvent;
        return new CourseArchivedEventDTO(
          archivedEvent.courseId, 
          archivedEvent.title, 
          archivedEvent.description, 
          archivedEvent.instructorId, 
          archivedEvent.status
        );
      default:
        throw new Error(`Unknown event constructor: ${event.constructor.name}`)
    }
  }
}