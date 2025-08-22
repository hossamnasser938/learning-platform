import { GetCoursesDTO } from "@l-p/courses/api/dtos/GetCoursesDTO";

export class GetCoursesQuery {
  static fromDTO(dto: GetCoursesDTO): GetCoursesQuery {
    return new GetCoursesQuery();
  }
}
