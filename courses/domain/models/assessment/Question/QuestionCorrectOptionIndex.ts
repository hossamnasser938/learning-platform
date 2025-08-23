import { InvalidQuestionCorrectOptionIndexException } from "./exceptions/QuestionException";
import { ValueObject } from "@l-p/shared/domain/models/value-object";

export class QuestionCorrectOptionIndex implements ValueObject {
  private constructor(private readonly value: number) {}

  static create(index: number): QuestionCorrectOptionIndex {
    if (!Number.isInteger(index) || index < 0) {
      throw new InvalidQuestionCorrectOptionIndexException(index);
    }

    return new QuestionCorrectOptionIndex(index);
  }

  getValue(): number {
    return this.value;
  }

  toString(): string {
    return this.value.toString();
  }

  equals(other: QuestionCorrectOptionIndex): boolean {
    return this.value === other.value;
  }
}
