import { GetInstructorsDTO } from "@l-p/courses/api/dtos/GetInstructorsDTO";

export class GetInstructorsQuery {
  static fromDTO(dto: GetInstructorsDTO): GetInstructorsQuery {
    return new GetInstructorsQuery();
  }
}
