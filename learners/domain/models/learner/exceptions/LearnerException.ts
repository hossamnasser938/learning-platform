import { DomainException, ExceptionType } from "@l-p/shared/domain/exceptions";

export class LearnerException extends DomainException {
  constructor(message: string, errorType?: ExceptionType) {
    super(message, errorType);
    this.name = 'LearnerException';
  }
}

export class InvalidLearnerNameException extends LearnerException {
  constructor(name: string, reason?: string) {
    const message = reason ? `Invalid learner name: ${name}. ${reason}` : `Invalid learner name: ${name}`;
    super(message, ExceptionType.INVALID_DATA);
    this.name = 'InvalidLearnerNameException';
  }
}

export class InvalidEmptyLearnerNameException extends LearnerException {
  constructor(name: string) {
    super(`Invalid empty learner name: ${name}`, ExceptionType.INVALID_DATA);
    this.name = 'InvalidEmptyLearnerNameException';
  }
}

export class InvalidLearnerNameMaxLengthException extends LearnerException {
  constructor(name: string, maxLength: number) {
    super(`Invalid learner name length: ${name}. Name cannot exceed ${maxLength} characters.`, ExceptionType.INVALID_DATA);
    this.name = 'InvalidLearnerNameMaxLengthException';
  }
}

export class InvalidLearnerAgeException extends LearnerException {
  constructor(age: number, minAge: number, maxAge: number) {
    super(`Invalid learner age: ${age}. Age must be between ${minAge} and ${maxAge}`, ExceptionType.INVALID_DATA);
    this.name = 'InvalidLearnerAgeException';
  }
}

export class InvalidCountryException extends LearnerException {
  constructor(country: string) {
    super(`Invalid country: ${country}`, ExceptionType.INVALID_DATA);
    this.name = 'InvalidCountryException';
  }
}

export class InvalidCourseCategoryException extends LearnerException {
  constructor(category: string) {
    super(`Invalid course category: ${category}`, ExceptionType.INVALID_DATA);
    this.name = 'InvalidCourseCategoryException';
  }
}

export class LearnerNotFoundException extends LearnerException {
  constructor(learnerId: string) {   
    super(`Learner with ID ${learnerId} not found`, ExceptionType.ENTITY_NOT_FOUND);
    this.name = 'LearnerNotFoundException';
  }
}
