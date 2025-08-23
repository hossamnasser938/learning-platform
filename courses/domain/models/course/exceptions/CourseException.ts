export class CourseException extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'CourseException';
  }
}

export class InvalidEmptyCourseTitleException extends CourseException {
  constructor(title: string) {
    super(`Invalid empty course title: ${title}`);
    this.name = 'InvalidEmptyCourseTitleException';
  }
}

export class InvalidCourseTitleMaxLengthException extends CourseException {
  constructor(title: string, maxLength: number) {
    super(`Invalid course title length: ${title}. Title cannot exceed ${maxLength} characters.`);
    this.name = 'InvalidCourseTitleMaxLengthException';
  }
}

export class InvalidEmptyCourseDescriptionException extends CourseException {
  constructor(description: string) {
    super(`Invalid empty course description: ${description}`);
    this.name = 'InvalidEmptyCourseDescriptionException';
  }
}

export class InvalidCourseDescriptionMaxLengthException extends CourseException {
  constructor(description: string, maxLength: number) {
    super(`Invalid course description length: ${description}. Description cannot exceed ${maxLength} characters.`);
    this.name = 'InvalidCourseDescriptionMaxLengthException';
  }
}
