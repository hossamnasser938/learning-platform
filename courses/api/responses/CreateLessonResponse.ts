export class CreateLessonResponse {
  constructor(
    public readonly id: string,
    public readonly title: string,
    public readonly content: string,
    public readonly order: number,
    public readonly chapterId: string
  ) {}

  static fromDomain(lesson: any): CreateLessonResponse {
    return new CreateLessonResponse(
      lesson.getId().getValue(),
      lesson.getTitle().getValue(),
      lesson.getContent().getValue(),
      lesson.getOrder().getValue(),
      lesson.getChapterId().getValue()
    );
  }
}
