export class InstructorException extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'InstructorException';
  }
}

export class InvalidEmptyInstructorNameException extends InstructorException {
  constructor(name: string) {
    super(`Invalid empty instructor name: ${name}`);
    this.name = 'InvalidEmptyInstructorNameException';
  }
}

export class InvalidInstructorNameMaxLengthException extends InstructorException {
  constructor(name: string, maxLength: number) {
    super(`Invalid instructor name length: ${name}. Name cannot exceed ${maxLength} characters.`);
    this.name = 'InvalidInstructorNameMaxLengthException';
  }
}

export class InvalidEmptyInstructorBioException extends InstructorException {
  constructor(bio: string) {
    super(`Invalid empty instructor bio: ${bio}`);
    this.name = 'InvalidEmptyInstructorBioException';
  }
}

export class InvalidInstructorBioMaxLengthException extends InstructorException {
  constructor(bio: string, maxLength: number) {
    super(`Invalid instructor bio length: ${bio}. Bio cannot exceed ${maxLength} characters.`);
    this.name = 'InvalidInstructorBioMaxLengthException';
  }
}
