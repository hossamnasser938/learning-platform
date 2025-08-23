export class LessonException extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'LessonException';
  }
}

export class InvalidEmptyLessonTitleException extends LessonException {
  constructor(title: string) {
    super(`Invalid empty lesson title: ${title}`);
    this.name = 'InvalidEmptyLessonTitleException';
  }
}

export class InvalidLessonTitleMaxLengthException extends LessonException {
  constructor(title: string, maxLength: number) {
    super(`Invalid lesson title length: ${title}. Title cannot exceed ${maxLength} characters.`);
    this.name = 'InvalidLessonTitleMaxLengthException';
  }
}

export class InvalidEmptyLessonContentException extends LessonException {
  constructor(content: string) {
    super(`Invalid empty lesson content: ${content}`);
    this.name = 'InvalidEmptyLessonContentException';
  }
}

export class InvalidLessonContentMaxLengthException extends LessonException {
  constructor(content: string, maxLength: number) {
    super(`Invalid lesson content length: ${content}. Content cannot exceed ${maxLength} characters.`);
    this.name = 'InvalidLessonContentMaxLengthException';
  }
}
