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
  private constructor(public readonly courses: Array<CourseResponse | null>) {}

  static fromDomain(courses: Array<Course | null>): GetCoursesResponse {
    const courseResponses = courses.map((course) => {
      if (!course) {
        return null;
      }
      return new CourseResponse(
        course.getId().getValue(),
        course.getTitle().getValue(),
        course.getDescription().getValue(),
        course.getInstructorId().getValue()
      );
    });
    return new GetCoursesResponse(courseResponses);
  }
}
