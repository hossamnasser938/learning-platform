export class ChapterServiceException extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ChapterServiceException';
  }
}

export class CourseNotFoundException extends ChapterServiceException {
  constructor(courseId: string) {
    super(`Course with ID ${courseId} not found`);
    this.name = 'CourseNotFoundException';
  }
}
