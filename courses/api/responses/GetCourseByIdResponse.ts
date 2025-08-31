import { Course } from "@l-p/courses/domain/models/course/Course";

export class GetCourseByIdResponse {
    private constructor(
        public readonly id: string,
        public readonly title: string,
        public readonly description: string,
        public readonly instructorId: string
      ) {}

  static fromDomain(course: Course): GetCourseByIdResponse {
    return new GetCourseByIdResponse(
      course.getId().getValue(),
      course.getTitle().getValue(),
      course.getDescription().getValue(),
      course.getInstructorId().getValue()
    );
    
  }
}
