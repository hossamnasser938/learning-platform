export class EnrollLearnerInCourseCommand {
  constructor(
    public readonly learnerId: string,
    public readonly courseId: string
  ) {}
}
