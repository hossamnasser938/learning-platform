import { DomainException } from "@l-p/shared/domain/exceptions";
import { ExceptionType } from "@l-p/shared/domain/exceptions/ExceptionType";
import { ItemOrder } from "@l-p/shared/domain/models";

export class ChapterException extends DomainException {
  constructor(message: string, errorType?: ExceptionType) {
    super(message, errorType);
    this.name = 'ChapterException';
  }
}

export class ChapterTitleEmptyException extends ChapterException {
  constructor(message: string) {
    super(message, ExceptionType.INVALID_DATA);
    this.name = 'ChapterTitleEmptyException';
  }
}

export class ChapterTitleTooLongException extends ChapterException {
  constructor(message: string) {
    super(message, ExceptionType.INVALID_DATA);
    this.name = 'ChapterTitleTooLongException';
  }
}

export class ChapterDescriptionEmptyException extends ChapterException {
  constructor(message: string) {
    super(message, ExceptionType.INVALID_DATA);
    this.name = 'ChapterDescriptionEmptyException';
  }
}

export class ChapterDescriptionTooLongException extends ChapterException {
  constructor(message: string) {
    super(message, ExceptionType.INVALID_DATA);
    this.name = 'ChapterDescriptionTooLongException';
  }
}

export class ChapterNonPositiveIntegerOrderException extends ChapterException {
  constructor(value: number) {
    super(`Chapter order must be a positive integer: ${value}`, ExceptionType.INVALID_DATA);
    this.name = 'ChapterNonPositiveIntegerOrderException';
  }
}

export class ChapterNotFoundException extends ChapterException {
  constructor(chapterId: string) {
    super(`Chapter with ID ${chapterId} not found`, ExceptionType.ENTITY_NOT_FOUND);
    this.name = 'ChapterNotFoundException';
  }
}

export class InvalidExistingChapterOrderException extends ChapterException {
  constructor(order: ItemOrder) {
    super(`Chapter with order ${order} already exists`, ExceptionType.INVALID_DATA);
    this.name = 'InvalidExistingChapterOrderException';
  }
}