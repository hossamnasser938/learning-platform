import { Question } from "./Question";
import { ModelId, ItemOrder } from "@l-p/shared/domain/models";
import { QuestionBody } from "./QuestionBody";
import { QuestionOption } from "./QuestionOption";
import { QuestionCorrectOptionIndex } from "./QuestionCorrectOptionIndex";

export class MCQuestion extends Question {
  private constructor(
    id: ModelId,
    body: QuestionBody,
    order: ItemOrder,
    assessmentId: ModelId,
    private readonly options: QuestionOption[],
    private readonly correctOptionIndices: QuestionCorrectOptionIndex[]
  ) {
    super(id, body, order, assessmentId);
  }

  static create(
    id: string,
    body: string,
    order: number,
    assessmentId: string,
    options: string[],
    correctOptionIndices: number[]
  ): MCQuestion {
    const questionOptions = options.map(option => QuestionOption.create(option));
    const correctIndices = correctOptionIndices.map(index => QuestionCorrectOptionIndex.create(index));

    return new MCQuestion(
      ModelId.create(id),
      QuestionBody.create(body),
      ItemOrder.create(order),
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
