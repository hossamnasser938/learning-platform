import { InvalidEmptyInstructorNameException, InvalidInstructorNameMaxLengthException } from "./exceptions/InstructorException";

export class InstructorName {
  static MAX_LENGTH = 100;

  private constructor(private readonly value: string) {}

  static create(name: string): InstructorName {
    if (!name || name.trim().length === 0) {
      throw new InvalidEmptyInstructorNameException(name);
    }

    if (name.trim().length > InstructorName.MAX_LENGTH) {
      throw new InvalidInstructorNameMaxLengthException(name, InstructorName.MAX_LENGTH);
    }

    return new InstructorName(name.trim());
  }

  getValue(): string {
    return this.value;
  }

  toString(): string {
    return this.value;
  }

  equals(other: InstructorName): boolean {
    return this.value === other.value;
  }
}
