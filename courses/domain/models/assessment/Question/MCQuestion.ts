import { Question } from "./Question";

export class MCQuestion extends Question {
  private options: string[];
  private correctOptionIndices: number[];

  private constructor(
    id: string,
    body: string,
    options: string[],
    correctOptionIndices: number[]
  ) {
    super(id, body);
    this.options = options;
    this.correctOptionIndices = correctOptionIndices;
  }

  static create(
    id: string,
    body: string,
    options: string[],
    correctOptionIndices: number[]
  ): MCQuestion {
    return new MCQuestion(id, body, options, correctOptionIndices);
  }

  getOptions(): string[] {
    return this.options;
  }

  getCorrectOptionIndices(): number[] {
    return this.correctOptionIndices;
  }
}
