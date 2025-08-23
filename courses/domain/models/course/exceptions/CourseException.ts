import { DomainException } from "@l-p/shared/domain/exceptions";
import { ExceptionType } from "@l-p/shared/domain/exceptions/ExceptionType";
import { CourseStatus } from "../CourseStatus";

export class CourseException extends DomainException {
  constructor(message: string, errorType?: ExceptionType) {
    super(message, errorType);
    this.name = 'CourseException';
  }
}

export class InvalidEmptyCourseTitleException extends CourseException {
  constructor(title: string) {
    super(`Invalid empty course title: ${title}`, ExceptionType.INVALID_DATA);
    this.name = 'InvalidEmptyCourseTitleException';
  }
}

export class InvalidCourseTitleMaxLengthException extends CourseException {
  constructor(title: string, maxLength: number) {
    super(`Invalid course title length: ${title}. Title cannot exceed ${maxLength} characters.`, ExceptionType.INVALID_DATA);
    this.name = 'InvalidCourseTitleMaxLengthException';
  }
}

export class InvalidEmptyCourseDescriptionException extends CourseException {
  constructor(description: string) {
    super(`Invalid empty course description: ${description}`, ExceptionType.INVALID_DATA);
    this.name = 'InvalidEmptyCourseDescriptionException';
  }
}

export class InvalidCourseDescriptionMaxLengthException extends CourseException {
  constructor(description: string, maxLength: number) {
    super(`Invalid course description length: ${description}. Description cannot exceed ${maxLength} characters.`, ExceptionType.INVALID_DATA);
    this.name = 'InvalidCourseDescriptionMaxLengthException';
  }
}

export class InvalidCourseStatusException extends CourseException {
  constructor(status: CourseStatus) {
    super(`Invalid course status: ${status}`, ExceptionType.INVALID_DATA);
    this.name = 'InvalidCourseStatusException';
  }
}

export class CourseNotFoundException extends CourseException {
  constructor(courseId: string) {
    super(`Course with ID ${courseId} not found`, ExceptionType.ENTITY_NOT_FOUND);
    this.name = 'CourseNotFoundException';
  }
}
