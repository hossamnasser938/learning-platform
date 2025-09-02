import { Assessment } from "@l-p/courses/domain/models/assessment/Assessment";
import { QuestionType } from "@l-p/courses/domain/models/assessment/Question/QuestionType";
import { SCQuestion } from "@l-p/courses/domain/models/assessment/Question/SCQuestion";
import { MCQuestion } from "@l-p/courses/domain/models/assessment/Question/MCQuestion";

class QuestionResponse {
  constructor(
    public readonly id: string,
    public readonly type: QuestionType,
    public readonly body: string,
    public readonly options: string[],
    public readonly correctOptionIndices: number[],
    public readonly order: number
  ) {}
}

export class CreateAssessmentResponse {
  private constructor(
    public readonly id: string,
    public readonly title: string,
    public readonly description: string,
    public readonly questions: QuestionResponse[]
  ) {}

  static fromDomain(assessment: Assessment): CreateAssessmentResponse {
    const questionResponses = assessment.getQuestions().map(question => {
      let type: QuestionType;
      let correctOptionIndices: number[];

      if (question instanceof SCQuestion) {
        type = QuestionType.SINGLE_CHOICE;
        correctOptionIndices = [question.getCorrectOptionIndex().getValue()];
      } else if (question instanceof MCQuestion) {
        type = QuestionType.MULTI_CHOICE;
        correctOptionIndices = question.getCorrectOptionIndices().map(index => index.getValue());
      } else {
        throw new Error('Unknown question type');
      }

      return new QuestionResponse(
        question.getId().getValue(),
        type,
        question.getBody().getValue(),
        question.getOptions().map(option => option.getValue()),
        correctOptionIndices,
        question.getOrder().getValue()
      );
    });

    return new CreateAssessmentResponse(
      assessment.getId().getValue(),
      assessment.getTitle().getValue(),
      assessment.getDescription().getValue(),
      questionResponses
    );
  }
}
