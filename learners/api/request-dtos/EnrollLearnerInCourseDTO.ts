export class EnrollLearnerInCourseDTO {
  constructor(
    public readonly learnerId: string,
    public readonly courseId: string
  ) {}
}
