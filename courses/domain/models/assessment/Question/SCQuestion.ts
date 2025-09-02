import { Question } from "./Question";
import { ModelId, ItemOrder } from "@l-p/shared/domain/models";
import { QuestionBody } from "./QuestionBody";
import { QuestionOption } from "./QuestionOption";
import { QuestionCorrectOptionIndex } from "./QuestionCorrectOptionIndex";
import { 
  InsufficientQuestionOptionsException, 
  QuestionCorrectOptionIndexOutOfBoundsException,
  MissingQuestionOptionsException,
  MissingCorrectOptionIndicesException
} from "./exceptions/QuestionException";

export class SCQuestion extends Question {
  static MIN_OPTIONS = 2;

  private constructor(
    id: ModelId,
    body: QuestionBody,
    order: ItemOrder,
    assessmentId: ModelId,
    private readonly options: QuestionOption[],
    private readonly correctOptionIndex: QuestionCorrectOptionIndex
  ) {
    super(id, body, order, assessmentId);
  }

  private static validateSingleChoiceQuestion(options: string[], correctOptionIndex: number): void {
    if (!options) {
      throw new MissingQuestionOptionsException();
    }

    if (typeof correctOptionIndex !== 'number') {
      throw new MissingCorrectOptionIndicesException();
    }

    if (options.length < SCQuestion.MIN_OPTIONS) {
      throw new InsufficientQuestionOptionsException(options.length);
    }

    if (correctOptionIndex < 0 || correctOptionIndex >= options.length) {
      throw new QuestionCorrectOptionIndexOutOfBoundsException(correctOptionIndex, options.length);
    }
  }

  public static create(
    id: string,
    body: string,
    order: number,
    assessmentId: string,
    options: string[],
    correctOptionIndex: number
  ): SCQuestion {
    SCQuestion.validateSingleChoiceQuestion(options, correctOptionIndex);

    const questionOptions = options.map(option => QuestionOption.create(option));
    const correctIndex = QuestionCorrectOptionIndex.create(correctOptionIndex);

    return new SCQuestion(
      ModelId.create(id),
      QuestionBody.create(body),
      ItemOrder.create(order),
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
