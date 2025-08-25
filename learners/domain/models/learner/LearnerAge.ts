import { InvalidLearnerAgeException } from "./exceptions";
import { ValueObject } from "@l-p/shared/domain/models/value-object";

export class LearnerAge implements ValueObject {
  static MIN_AGE = 13;
  static MAX_AGE = 120;

  private constructor(private readonly value: number) {}

  static create(age: number): LearnerAge {
    if (!Number.isInteger(age)) {
      throw new InvalidLearnerAgeException(age, LearnerAge.MIN_AGE, LearnerAge.MAX_AGE);
    }

    if (age < LearnerAge.MIN_AGE) {
      throw new InvalidLearnerAgeException(age, LearnerAge.MIN_AGE, LearnerAge.MAX_AGE);
    }

    if (age > LearnerAge.MAX_AGE) {
      throw new InvalidLearnerAgeException(age, LearnerAge.MIN_AGE, LearnerAge.MAX_AGE);
    }

    return new LearnerAge(age);
  }

  getValue(): number {
    return this.value;
  }

  toString(): string {
    return this.value.toString();
  }

  equals(other: LearnerAge): boolean {
    return this.value === other.value;
  }
}
