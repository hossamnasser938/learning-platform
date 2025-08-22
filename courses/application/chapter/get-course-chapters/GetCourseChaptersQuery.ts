import { GetCourseChaptersDTO } from "@l-p/courses/api/dtos/GetCourseChaptersDTO";

export class GetCourseChaptersQuery {
  constructor(public readonly courseId: string) {}

  static fromDTO(dto: GetCourseChaptersDTO) {
    return new GetCourseChaptersQuery(dto.courseId);
  }
}
