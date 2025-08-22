import { GetInstructorsDTO } from "@l-p/courses/api/dtos/GetInstructorsDTO";

export class GetInstructorsQuery {
  static fromDTO(dto: GetInstructorsDTO): GetInstructorsQuery {
    const query = new GetInstructorsQuery();
    return query;
  }
}
