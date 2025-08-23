import { Course } from "@l-p/courses/domain/models";

export class CreateCourseResponse {
  constructor(
    public readonly id: string,
    public readonly title: string,
    public readonly description: string,
    public readonly instructorId: string
  ) {}

  static fromDomain(course: Course): CreateCourseResponse {
    return new CreateCourseResponse(
      course.getId().getValue(),
      course.getTitle().getValue(),
      course.getDescription().getValue(),
      course.getInstructorId().getValue()
    );
  }
}
