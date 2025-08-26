import { LearnerEvent } from "./LearnerEvent";

export class LearnerEnrolledInCourseEvent extends LearnerEvent {
  constructor(learnerId: string, readonly courseId: string) {
    super(learnerId);
  }
}
