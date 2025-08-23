import { InvalidEmptyInstructorBioException, InvalidInstructorBioMaxLengthException } from "./exceptions/InstructorException";
import { ValueObject } from "@l-p/shared/domain/models/value-object";

export class InstructorBio implements ValueObject {
  static MAX_LENGTH = 1000;

  private constructor(private readonly value: string) {}

  static create(bio: string): InstructorBio {
    if (!bio || bio.trim().length === 0) {
      throw new InvalidEmptyInstructorBioException(bio);
    }

    if (bio.trim().length > InstructorBio.MAX_LENGTH) {
      throw new InvalidInstructorBioMaxLengthException(bio, InstructorBio.MAX_LENGTH);
    }

    return new InstructorBio(bio.trim());
  }

  getValue(): string {
    return this.value;
  }

  toString(): string {
    return this.value;
  }

  equals(other: InstructorBio): boolean {
    return this.value === other.value;
  }
}
