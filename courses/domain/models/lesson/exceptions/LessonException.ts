
import { DomainException } from "@l-p/shared/domain/exceptions";
import { ExceptionType } from "@l-p/shared/domain/exceptions/ExceptionType";
import { ItemOrder } from "@l-p/shared/domain/models";

export class LessonException extends DomainException {
  constructor(message: string, errorType?: ExceptionType) {
    super(message, errorType);
    this.name = 'LessonException';
  }
}

export class InvalidEmptyLessonTitleException extends LessonException {
  constructor(title: string) {
    super(`Invalid empty lesson title: ${title}`, ExceptionType.INVALID_DATA);
    this.name = 'InvalidEmptyLessonTitleException';
  }
}

export class InvalidLessonTitleMaxLengthException extends LessonException {
  constructor(title: string, maxLength: number) {
    super(`Invalid lesson title length: ${title}. Title cannot exceed ${maxLength} characters.`, ExceptionType.INVALID_DATA);
    this.name = 'InvalidLessonTitleMaxLengthException';
  }
}

export class InvalidEmptyLessonContentException extends LessonException {
  constructor(content: string) {
    super(`Invalid empty lesson content: ${content}`, ExceptionType.INVALID_DATA);
    this.name = 'InvalidEmptyLessonContentException';
  }
}

export class InvalidLessonContentMaxLengthException extends LessonException {
  constructor(content: string, maxLength: number) {
    super(`Invalid lesson content length: ${content}. Content cannot exceed ${maxLength} characters.`, ExceptionType.INVALID_DATA);
    this.name = 'InvalidLessonContentMaxLengthException';
  }
}

export class InvalidExistingLessonOrderException extends LessonException {
  constructor(order: ItemOrder) {
    super(`Lesson with order ${order} already exists`, ExceptionType.INVALID_DATA);
    this.name = 'InvalidExistingLessonOrderException';
  }
}