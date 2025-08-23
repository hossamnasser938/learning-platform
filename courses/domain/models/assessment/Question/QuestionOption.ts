import { ValueObject } from "@l-p/shared/domain/models/value-object";
import { InvalidEmptyQuestionOptionException, InvalidQuestionOptionTooLongException } from "./exceptions";

export class QuestionOption implements ValueObject {
  static MAX_LENGTH = 500;
  
  private constructor(private readonly value: string) {}

  static create(option: string): QuestionOption {
    if (!option || option.trim().length === 0) {
      throw new InvalidEmptyQuestionOptionException(option);
    }

    if (option.trim().length > QuestionOption.MAX_LENGTH) {
      throw new InvalidQuestionOptionTooLongException(option);
    }

    return new QuestionOption(option.trim());
  }

  getValue(): string {
    return this.value;
  }

  toString(): string {
    return this.value;
  }

  equals(other: QuestionOption): boolean {
    return this.value === other.value;
  }
}
