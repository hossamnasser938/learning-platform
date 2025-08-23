export class CreateCourseResponse {
  constructor(
    public readonly id: string,
    public readonly title: string,
    public readonly description: string,
    public readonly instructorId: string
  ) {}

  static fromDomain(course: any): CreateCourseResponse {
    return new CreateCourseResponse(
      course.getId().getValue(),
      course.getTitle(),
      course.getDescription(),
      course.getInstructorId().getValue()
    );
  }
}
