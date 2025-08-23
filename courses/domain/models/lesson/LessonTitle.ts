import { InvalidEmptyLessonTitleException, InvalidLessonTitleMaxLengthException } from "./exceptions/LessonException";

export class LessonTitle {
  static MAX_LENGTH = 100;

  private constructor(private readonly value: string) {}

  static create(title: string): LessonTitle {
    if (!title || title.trim().length === 0) {
      throw new InvalidEmptyLessonTitleException(title);
    }

    if (title.trim().length > LessonTitle.MAX_LENGTH) {
      throw new InvalidLessonTitleMaxLengthException(title, LessonTitle.MAX_LENGTH);
    }

    return new LessonTitle(title.trim());
  }

  getValue(): string {
    return this.value;
  }

  toString(): string {
    return this.value;
  }

  equals(other: LessonTitle): boolean {
    return this.value === other.value;
  }
}
