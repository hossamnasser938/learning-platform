import { InvalidEmptyLearnerNameException, InvalidLearnerNameMaxLengthException } from "./exceptions";
import { ValueObject } from "@l-p/shared/domain/models/value-object";

export class LearnerName implements ValueObject {
  static MAX_LENGTH = 100;

  private constructor(private readonly value: string) {}

  static create(name: string): LearnerName {
    if (!name || name.trim().length === 0) {
      throw new InvalidEmptyLearnerNameException(name);
    }

    if (name.trim().length > LearnerName.MAX_LENGTH) {
      throw new InvalidLearnerNameMaxLengthException(name, LearnerName.MAX_LENGTH);
    }

    return new LearnerName(name.trim());
  }

  getValue(): string {
    return this.value;
  }

  toString(): string {
    return this.value;
  }

  equals(other: LearnerName): boolean {
    return this.value === other.value;
  }
}
