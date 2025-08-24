import { CourseStatus } from "@l-p/courses/domain/models/course/CourseStatus";
import { CourseEventDTO } from "./CourseEventDTO";

export class CoursePublishedEventDTO extends CourseEventDTO {
  constructor(
    public readonly courseId: string,
    public readonly title: string,
    public readonly description: string,
    public readonly instructorId: string,
    public readonly status: CourseStatus,
  ) {
    super();
  }
}