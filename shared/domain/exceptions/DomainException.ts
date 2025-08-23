import { ExceptionType } from "./ExceptionType";

export abstract class DomainException extends Error {
  readonly errorType: ExceptionType;
  
  constructor(message: string, errorType: ExceptionType = ExceptionType.GENERIC) {
    super(message);
    this.name = 'DomainException';
    this.errorType = errorType;
  }
}