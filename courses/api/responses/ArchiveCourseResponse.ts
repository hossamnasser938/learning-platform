import { Course } from "@l-p/courses/domain/models";

    export class ArchiveCourseResponse {
  constructor(
    public readonly id: string,
    public readonly title: string,
    public readonly description: string,
    public readonly instructorId: string,
    public readonly status: string
  ) {}

  static fromDomain(course: Course): ArchiveCourseResponse {
    return new ArchiveCourseResponse(
      course.getId().getValue(),
      course.getTitle().getValue(),
      course.getDescription().getValue(),
      course.getInstructorId().getValue(),
      course.getStatus()
    );
  }
}
