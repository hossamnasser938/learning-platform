import { DomainException } from "@l-p/shared/domain/exceptions";
import { ExceptionType } from "@l-p/shared/domain/exceptions/ExceptionType";

export class InstructorException extends DomainException {
  constructor(message: string, errorType?: ExceptionType) {
    super(message, errorType);
    this.name = 'InstructorException';
  }
}

export class InvalidEmptyInstructorNameException extends InstructorException {
  constructor(name: string) {
    super(`Invalid empty instructor name: ${name}`, ExceptionType.INVALID_DATA);
    this.name = 'InvalidEmptyInstructorNameException';
  }
}

export class InvalidInstructorNameMaxLengthException extends InstructorException {
  constructor(name: string, maxLength: number) {
    super(`Invalid instructor name length: ${name}. Name cannot exceed ${maxLength} characters.`, ExceptionType.INVALID_DATA);
    this.name = 'InvalidInstructorNameMaxLengthException';
  }
}

export class InvalidEmptyInstructorBioException extends InstructorException {
  constructor(bio: string) {
    super(`Invalid empty instructor bio: ${bio}`, ExceptionType.INVALID_DATA);
    this.name = 'InvalidEmptyInstructorBioException';
  }
}

export class InvalidInstructorBioMaxLengthException extends InstructorException {
  constructor(bio: string, maxLength: number) {
    super(`Invalid instructor bio length: ${bio}. Bio cannot exceed ${maxLength} characters.`, ExceptionType.INVALID_DATA);
    this.name = 'InvalidInstructorBioMaxLengthException';
  }
}

export class InstructorNotFoundException extends InstructorException {
  constructor(instructorId: string) {
    super(`Instructor with id ${instructorId} not found`, ExceptionType.ENTITY_NOT_FOUND);
    this.name = 'InstructorNotFoundException';
  }
}