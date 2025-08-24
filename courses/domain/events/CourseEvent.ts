import { DomainEvent } from "@l-p/shared/domain/models/domain-event";

export abstract class CourseEvent extends DomainEvent {
  constructor(public readonly courseId: string) {
    super();
  }

  getCourseId(): string {
    return this.courseId;
  }
}