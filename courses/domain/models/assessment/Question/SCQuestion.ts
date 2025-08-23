import { Question } from "./Question";
import { ModelId } from "@l-p/shared/domain/models/ModelId";
import { QuestionBody } from "./QuestionBody";
import { QuestionOption } from "./QuestionOption";
import { QuestionCorrectOptionIndex } from "./QuestionCorrectOptionIndex";

export class SCQuestion extends Question {
  private constructor(
    id: ModelId,
    body: QuestionBody,
    assessmentId: ModelId,
    private readonly options: QuestionOption[],
    private readonly correctOptionIndex: QuestionCorrectOptionIndex
  ) {
    super(id, body, assessmentId);
  }

  public static create(
    id: string,
    body: string,
    assessmentId: string,
    options: string[],
    correctOptionIndex: number
  ): SCQuestion {
    const questionOptions = options.map(option => QuestionOption.create(option));
    const correctIndex = QuestionCorrectOptionIndex.create(correctOptionIndex);

    return new SCQuestion(
      ModelId.create(id),
      QuestionBody.create(body),
      ModelId.create(assessmentId),
      questionOptions,
      correctIndex
    );
  }

  getOptions(): QuestionOption[] {
    return this.options;
  }

  getCorrectOptionIndex(): QuestionCorrectOptionIndex {
    return this.correctOptionIndex;
  }
}
