import { DomainException } from "@l-p/shared/domain/exceptions";
import { ExceptionType } from "@l-p/shared/domain/exceptions/ExceptionType";

export class AssessmentException extends DomainException {
  constructor(message: string, errorType?: ExceptionType) {
    super(message, errorType);
    this.name = 'AssessmentException';
  }
}
