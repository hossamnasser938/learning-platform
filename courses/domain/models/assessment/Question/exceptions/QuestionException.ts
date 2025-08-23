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