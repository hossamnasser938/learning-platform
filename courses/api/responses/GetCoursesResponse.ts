import { Course } from "@l-p/courses/domain/models/course/Course";

class CourseResponse {
  constructor(
    public readonly id: string,
    public readonly title: string,
    public readonly description: string,
    public readonly instructorId: string
  ) {}
}

export class GetCoursesResponse {
  private constructor(public readonly courses: CourseResponse[]) {}

  static fromDomain(courses: Course[]): GetCoursesResponse {
    const courseResponses = courses.map(
      (course) =>
        new CourseResponse(
          course.getId(),
          course.getTitle(),
          course.getDescription(),
          course.getInstructorId()
        )
    );
    return new GetCoursesResponse(courseResponses);
  }
}
