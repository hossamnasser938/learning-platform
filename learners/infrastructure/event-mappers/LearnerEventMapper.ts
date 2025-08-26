import { LearnerEnrolledInCourseEventDTO } from "@l-p/learners/api/event-dtos/LearnerEnrolledInCourseEventDTO";
import { LearnerEventDTO } from "@l-p/learners/api/event-dtos/LearnerEventDTO";
import { LearnerEnrolledInCourseEvent, LearnerEvent } from "@l-p/learners/domain/events";

export class LearnerEventMapper {
  static toDTO(event: LearnerEvent): LearnerEventDTO {
    switch (event.constructor) {
      case LearnerEnrolledInCourseEvent:
        const enrolledEvent = event as LearnerEnrolledInCourseEvent;
        return new LearnerEnrolledInCourseEventDTO(enrolledEvent.learnerId, enrolledEvent.courseId);
      default:
        throw new Error(`Unknown event type: ${event.constructor.name}`);
    }
  }
}