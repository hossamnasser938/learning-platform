import { DomainException } from "@l-p/shared/domain/exceptions";
import { ExceptionType } from "@l-p/shared/domain/exceptions/ExceptionType";

export abstract class AssessmentException extends DomainException {
  constructor(message: string, errorType?: ExceptionType) {
    super(message, errorType);
    this.name = this.constructor.name;
  }
}

export class AssessmentTitleEmptyException extends AssessmentException {
  constructor() {
    super("Assessment title cannot be empty", ExceptionType.INVALID_DATA);
  }
}

export class AssessmentTitleTooLongException extends AssessmentException {
  constructor(maxLength: number) {
    super(`Assessment title cannot exceed ${maxLength} characters`, ExceptionType.INVALID_DATA);
  }
}

export class AssessmentDescriptionEmptyException extends AssessmentException {
  constructor() {
    super("Assessment description cannot be empty", ExceptionType.INVALID_DATA);
  }
}

export class AssessmentDescriptionTooLongException extends AssessmentException {
  constructor(maxLength: number) {
    super(`Assessment description cannot exceed ${maxLength} characters`, ExceptionType.INVALID_DATA);
  }
}
