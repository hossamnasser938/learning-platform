// Base Chapter Domain Exception
export class ChapterDomainException extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ChapterDomainException';
  }
}

// Chapter Title Exception
export class ChapterTitleException extends ChapterDomainException {
  constructor(message: string) {
    super(message);
    this.name = 'ChapterTitleException';
  }
}

// Chapter Description Exception
export class ChapterDescriptionException extends ChapterDomainException {
  constructor(message: string) {
    super(message);
    this.name = 'ChapterDescriptionException';
  }
}

// Chapter Order Exception
export class ChapterOrderException extends ChapterDomainException {
  constructor(message: string) {
    super(message);
    this.name = 'ChapterOrderException';
  }
}

// Chapter Validation Exception
export class ChapterValidationException extends ChapterDomainException {
  constructor(message: string) {
    super(message);
    this.name = 'ChapterValidationException';
  }
}

// Chapter Business Rule Exception
export class ChapterBusinessRuleException extends ChapterDomainException {
  constructor(message: string) {
    super(message);
    this.name = 'ChapterBusinessRuleException';
  }
}
