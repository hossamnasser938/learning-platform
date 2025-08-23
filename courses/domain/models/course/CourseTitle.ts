import { InvalidEmptyCourseTitleException, InvalidCourseTitleMaxLengthException } from "./exceptions/CourseException";
import { ValueObject } from "@l-p/shared/domain/models/value-object";

export class CourseTitle implements ValueObject {
  static MAX_LENGTH = 100;

  private constructor(private readonly value: string) {}

  static create(title: string): CourseTitle {
    if (!title || title.trim().length === 0) {
      throw new InvalidEmptyCourseTitleException(title);
    }

    if (title.trim().length > CourseTitle.MAX_LENGTH) {
      throw new InvalidCourseTitleMaxLengthException(title, CourseTitle.MAX_LENGTH);
    }

    return new CourseTitle(title.trim());
  }

  getValue(): string {
    return this.value;
  }

  toString(): string {
    return this.value;
  }

  equals(other: CourseTitle): boolean {
    return this.value === other.value;
  }
}
