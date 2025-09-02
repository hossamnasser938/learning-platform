import { CreateAssessmentDTO } from "@l-p/courses/api/request-dtos";

export class CreateAssessmentCommand {
  constructor(
    public readonly createAssessmentDTO: CreateAssessmentDTO
  ) {}
}
