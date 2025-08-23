import { InvalidEmptyQuestionBodyException, InvalidQuestionBodyMaxLengthException } from "../../../exceptions/QuestionDomainException";

export class QuestionBody {
  private constructor(private readonly value: string) {}

  static MAX_LENGTH = 1000;

  static create(body: string): QuestionBody {
    if (!body || body.trim().length === 0) {
      throw new InvalidEmptyQuestionBodyException(body);
    }

    if (body.trim().length > QuestionBody.MAX_LENGTH) {
      throw new InvalidQuestionBodyMaxLengthException(body);
    }

    return new QuestionBody(body.trim());
  }

  getValue(): string {
    return this.value;
  }

  toString(): string {
    return this.value;
  }

  equals(other: QuestionBody): boolean {
    return this.value === other.value;
  }
}
