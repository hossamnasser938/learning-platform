import { DomainException } from "@l-p/shared/domain/exceptions";
import { ExceptionType } from "@l-p/shared/domain/exceptions/ExceptionType";
import { ItemOrder } from "@l-p/shared/domain/models";

export class QuestionException extends DomainException {
  constructor(message: string, errorType?: ExceptionType) {
    super(message, errorType);
    this.name = 'QuestionException';
  }
}

export class InvalidEmptyQuestionOptionException extends QuestionException {
  constructor(option: string) {
    super(`Invalid empty question option: ${option}`, ExceptionType.INVALID_DATA);
    this.name = 'InvalidEmptyQuestionOptionException';
  }
}

export class InvalidQuestionOptionTooLongException extends QuestionException {
  constructor(option: string) {
    super(`Invalid question option too long: ${option}`, ExceptionType.INVALID_DATA);
    this.name = 'InvalidQuestionOptionTooLongException';
  }
}

export class InvalidQuestionCorrectOptionIndexException extends QuestionException {
  constructor(index: number) {
    super(`Invalid question correct option index: ${index}`, ExceptionType.INVALID_DATA);
    this.name = 'InvalidQuestionCorrectOptionIndexException';
  }
}

export class InvalidExistingQuestionOrderException extends QuestionException {
  constructor(order: ItemOrder) {
    super(`Question with order ${order} already exists`, ExceptionType.INVALID_DATA);
    this.name = 'InvalidExistingQuestionOrderException';
  }
}

export class InvalidEmptyQuestionBodyException extends QuestionException {
  constructor(body: string) {
    super(`Invalid empty question body: ${body}`, ExceptionType.INVALID_DATA);
    this.name = 'InvalidEmptyQuestionBodyException';
  }
}

export class InvalidQuestionBodyMaxLengthException extends QuestionException {
  constructor(body: string) {
    super(`Invalid question body too long: ${body}`, ExceptionType.INVALID_DATA);
    this.name = 'InvalidQuestionBodyMaxLengthException';
  }
}

export class InsufficientQuestionOptionsException extends QuestionException {
  constructor(optionCount: number) {
    super(`Question must have at least 2 options, got ${optionCount}`, ExceptionType.INVALID_DATA);
    this.name = 'InsufficientQuestionOptionsException';
  }
}

export class InvalidSingleChoiceCorrectOptionsException extends QuestionException {
  constructor(correctOptionCount: number) {
    super(`Single choice question must have exactly one correct option, got ${correctOptionCount}`, ExceptionType.INVALID_DATA);
    this.name = 'InvalidSingleChoiceCorrectOptionsException';
  }
}

export class InvalidMultiChoiceCorrectOptionsException extends QuestionException {
  constructor(correctOptionCount: number) {
    super(`Multi choice question must have at least one correct option, got ${correctOptionCount}`, ExceptionType.INVALID_DATA);
    this.name = 'InvalidMultiChoiceCorrectOptionsException';
  }
}

export class QuestionCorrectOptionIndexOutOfBoundsException extends QuestionException {
  constructor(index: number, optionCount: number) {
    super(`Correct option index ${index} is out of bounds for ${optionCount} options`, ExceptionType.INVALID_DATA);
    this.name = 'QuestionCorrectOptionIndexOutOfBoundsException';
  }
}

export class MissingQuestionOptionsException extends QuestionException {
  constructor() {
    super('Question options are required but not provided', ExceptionType.INVALID_DATA);
    this.name = 'MissingQuestionOptionsException';
  }
}

export class MissingCorrectOptionIndicesException extends QuestionException {
  constructor() {
    super('Correct option indices are required but not provided', ExceptionType.INVALID_DATA);
    this.name = 'MissingCorrectOptionIndicesException';
  }
}