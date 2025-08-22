import { Question } from "./Question";

export class SCQuestion extends Question {
  private options: string[];
  private correctOptionIndex: number;

  private constructor(
    id: string,
    body: string,
    options: string[],
    correctOptionIndex: number
  ) {
    super(id, body);
    this.options = options;
    this.correctOptionIndex = correctOptionIndex;
  }

  public static create(
    id: string,
    body: string,
    options: string[],
    correctOptionIndex: number
  ): SCQuestion {
    return new SCQuestion(id, body, options, correctOptionIndex);
  }

  getOptions(): string[] {
    return this.options;
  }

  getCorrectOptionIndex(): number {
    return this.correctOptionIndex;
  }
}
