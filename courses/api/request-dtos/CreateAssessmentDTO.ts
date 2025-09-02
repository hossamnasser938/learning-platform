import { QuestionType } from "@l-p/courses/domain/models/assessment/Question/QuestionType";

export class CreateAssessmentQuestionDTO {
  constructor(
    public readonly type: QuestionType,
    public readonly body: string,
    public readonly options: string[],
    public readonly correctOptionIndices: number[],
  ) {}
}

export class CreateAssessmentDTO {
  constructor(
    public readonly title: string,
    public readonly description: string,
    public readonly questions: CreateAssessmentQuestionDTO[]
  ) {}
}
