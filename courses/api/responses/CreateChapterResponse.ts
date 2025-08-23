export class CreateChapterResponse {
  constructor(
    public readonly id: string,
    public readonly title: string,
    public readonly description: string,
    public readonly order: number,
    public readonly courseId: string
  ) {}

  static fromDomain(chapter: any): CreateChapterResponse {
    return new CreateChapterResponse(
      chapter.getId().getValue(),
      chapter.getTitle(),
      chapter.getDescription(),
      chapter.getOrder(),
      chapter.getCourseId().getValue()
    );
  }
}
