import { Question } from "./Question";
import { ModelId, ItemOrder } from "@l-p/shared/domain/models";
import { QuestionBody } from "./QuestionBody";
import { QuestionOption } from "./QuestionOption";
import { QuestionCorrectOptionIndex } from "./QuestionCorrectOptionIndex";
import { 
  InsufficientQuestionOptionsException, 
  InvalidMultiChoiceCorrectOptionsException,
  QuestionCorrectOptionIndexOutOfBoundsException,
  MissingQuestionOptionsException,
  MissingCorrectOptionIndicesException
} from "./exceptions/QuestionException";

export class MCQuestion extends Question {
  static MIN_OPTIONS = 2;
  static MIN_CORRECT_OPTIONS = 1;

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

  private static validateMultiChoiceQuestion(options: string[], correctOptionIndices: number[]): void {
    if (!options) {
      throw new MissingQuestionOptionsException();
    }

    if (!correctOptionIndices || correctOptionIndices.length === 0) {
      throw new MissingCorrectOptionIndicesException();
    }

    if (options.length < MCQuestion.MIN_OPTIONS) {
      throw new InsufficientQuestionOptionsException(options.length);
    }

    if (correctOptionIndices.length < MCQuestion.MIN_CORRECT_OPTIONS) {
      throw new InvalidMultiChoiceCorrectOptionsException(correctOptionIndices.length);
    }

    for (const index of correctOptionIndices) {
      if (index < 0 || index >= options.length) {
        throw new QuestionCorrectOptionIndexOutOfBoundsException(index, options.length);
      }
    }
  }

  static create(
    id: string,
    body: string,
    order: number,
    assessmentId: string,
    options: string[],
    correctOptionIndices: number[]
  ): MCQuestion {
    MCQuestion.validateMultiChoiceQuestion(options, correctOptionIndices);

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
