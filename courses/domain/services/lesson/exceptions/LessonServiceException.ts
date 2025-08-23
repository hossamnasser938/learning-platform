export class LessonServiceException extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'LessonServiceException';
  }
}

export class ChapterNotFoundException extends LessonServiceException {
  constructor(chapterId: string) {
    super(`Chapter with ID ${chapterId} not found`);
    this.name = 'ChapterNotFoundException';
  }
}
