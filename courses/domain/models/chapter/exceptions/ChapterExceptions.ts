export class ChapterException extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ChapterException';
  }
}

export class ChapterTitleEmptyException extends ChapterException {
  constructor(message: string) {
    super(message);
    this.name = 'ChapterTitleEmptyException';
  }
}

export class ChapterTitleTooLongException extends ChapterException {
  constructor(message: string) {
    super(message);
    this.name = 'ChapterTitleTooLongException';
  }
}

export class ChapterDescriptionEmptyException extends ChapterException {
  constructor(message: string) {
    super(message);
    this.name = 'ChapterDescriptionEmptyException';
  }
}

export class ChapterDescriptionTooLongException extends ChapterException {
  constructor(message: string) {
    super(message);
    this.name = 'ChapterDescriptionTooLongException';
  }
}

export class ChapterNonPositiveIntegerOrderException extends ChapterException {
  constructor(value: number) {
    super(`Chapter order must be a positive integer: ${value}`);
    this.name = 'ChapterNonPositiveIntegerOrderException';
  }
}
