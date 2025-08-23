import { InvalidEmptyCourseDescriptionException, InvalidCourseDescriptionMaxLengthException } from "./exceptions/CourseException";
import { ValueObject } from "@l-p/shared/domain/models/value-object";

export class CourseDescription implements ValueObject {
  static MAX_LENGTH = 500;

  private constructor(private readonly value: string) {}

  static create(description: string): CourseDescription {
    if (!description || description.trim().length === 0) {
      throw new InvalidEmptyCourseDescriptionException(description);
    }

    if (description.trim().length > CourseDescription.MAX_LENGTH) {
      throw new InvalidCourseDescriptionMaxLengthException(description, CourseDescription.MAX_LENGTH);
    }

    return new CourseDescription(description.trim());
  }

  getValue(): string {
    return this.value;
  }

  toString(): string {
    return this.value;
  }

  equals(other: CourseDescription): boolean {
    return this.value === other.value;
  }
}
