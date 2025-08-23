import { InvalidEmptyLessonContentException, InvalidLessonContentMaxLengthException } from "./exceptions/LessonException";

export class LessonContent {
  static MAX_LENGTH = 5000;

  private constructor(private readonly value: string) {}

  static create(content: string): LessonContent {
    if (!content || content.trim().length === 0) {
      throw new InvalidEmptyLessonContentException(content);
    }

    if (content.trim().length > LessonContent.MAX_LENGTH) {
      throw new InvalidLessonContentMaxLengthException(content, LessonContent.MAX_LENGTH);
    }

    return new LessonContent(content.trim());
  }

  getValue(): string {
    return this.value;
  }

  toString(): string {
    return this.value;
  }

  equals(other: LessonContent): boolean {
    return this.value === other.value;
  }
}
