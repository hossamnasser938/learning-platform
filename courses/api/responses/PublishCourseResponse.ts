import { Course } from "@l-p/courses/domain/models";

export class PublishCourseResponse {
  constructor(
    public readonly id: string,
    public readonly title: string,
    public readonly description: string,
    public readonly instructorId: string,
    public readonly status: string
  ) {}

  static fromDomain(course: Course): PublishCourseResponse {
    return new PublishCourseResponse(
      course.getId().getValue(),
      course.getTitle().getValue(),
      course.getDescription().getValue(),
      course.getInstructorId().getValue(),
      course.getStatus()
    );
  }
}
