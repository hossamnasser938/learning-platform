import { LearnerEventDTO } from "./LearnerEventDTO";

export class LearnerEnrolledInCourseEventDTO extends LearnerEventDTO {
  constructor(
    public readonly learnerId: string,
    public readonly courseId: string,
    public readonly occurredOn: Date = new Date()
  ) {
    super();
  }
}
