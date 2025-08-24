import { Course } from "../models";
import { CourseStatus } from "../models/course/CourseStatus";
import { CourseEvent } from "./CourseEvent";

export class CoursePublishedEvent extends CourseEvent {
  private constructor(
    public readonly courseId: string,
    public readonly title: string,
    public readonly description: string,
    public readonly instructorId: string,
    public readonly status: CourseStatus,
  ) {
    super(courseId);
  }

  static fromDomain(course: Course): CoursePublishedEvent {
    return new CoursePublishedEvent(
      course.getId().getValue(),
      course.getTitle().getValue(),
      course.getDescription().getValue(),
      course.getInstructorId().getValue(),
      course.getStatus(),
    );
  }
}