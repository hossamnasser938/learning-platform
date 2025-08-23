import { DomainException } from "@l-p/shared/domain/exceptions";
import { ExceptionType } from "@l-p/shared/domain/exceptions/ExceptionType";

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
