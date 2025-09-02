import { CreateAssessmentDTO } from "@l-p/courses/api/request-dtos";
import { Assessment } from "../../models/assessment/Assessment";

export interface IAssessmentCreationService {
  createAssessment(createAssessmentDTO: CreateAssessmentDTO): Promise<Assessment>;
}
