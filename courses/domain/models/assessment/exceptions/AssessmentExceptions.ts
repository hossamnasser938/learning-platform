export abstract class AssessmentException extends Error {
  constructor(message: string) {
    super(message);
    this.name = this.constructor.name;
  }
}

export class AssessmentTitleEmptyException extends AssessmentException {
  constructor() {
    super("Assessment title cannot be empty");
  }
}

export class AssessmentTitleTooLongException extends AssessmentException {
  constructor(maxLength: number) {
    super(`Assessment title cannot exceed ${maxLength} characters`);
  }
}

export class AssessmentDescriptionEmptyException extends AssessmentException {
  constructor() {
    super("Assessment description cannot be empty");
  }
}

export class AssessmentDescriptionTooLongException extends AssessmentException {
  constructor(maxLength: number) {
    super(`Assessment description cannot exceed ${maxLength} characters`);
  }
}
