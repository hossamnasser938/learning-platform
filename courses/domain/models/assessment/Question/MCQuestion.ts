import { Question } from "./Question";
import { ModelId } from "@l-p/shared/domain/models/ModelId";
import { QuestionBody } from "./QuestionBody";
import { QuestionOption } from "./QuestionOption";
import { QuestionCorrectOptionIndex } from "./QuestionCorrectOptionIndex";

export class MCQuestion extends Question {
  private constructor(
    id: ModelId,
    body: QuestionBody,
    assessmentId: ModelId,
    private readonly options: QuestionOption[],
    private readonly correctOptionIndices: QuestionCorrectOptionIndex[]
  ) {
    super(id, body, assessmentId);
  }

  static create(
    id: string,
    body: string,
    assessmentId: string,
    options: string[],
    correctOptionIndices: number[]
  ): MCQuestion {
    const questionOptions = options.map(option => QuestionOption.create(option));
    const correctIndices = correctOptionIndices.map(index => QuestionCorrectOptionIndex.create(index));

    return new MCQuestion(
      ModelId.create(id),
      QuestionBody.create(body),
      ModelId.create(assessmentId),
      questionOptions,
      correctIndices
    );
  }

  getOptions(): QuestionOption[] {
    return this.options;
  }

  getCorrectOptionIndices(): QuestionCorrectOptionIndex[] {
    return this.correctOptionIndices;
  }
}
