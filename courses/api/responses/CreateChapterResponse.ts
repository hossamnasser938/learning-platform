import { Chapter } from "@l-p/courses/domain/models";

export class CreateChapterResponse {
  constructor(
    public readonly id: string,
    public readonly title: string,
    public readonly description: string,
    public readonly order: number,
    public readonly courseId: string
  ) {}

  static fromDomain(chapter: Chapter): CreateChapterResponse {
    return new CreateChapterResponse(
      chapter.getId().getValue(),
      chapter.getTitle().getValue(),
      chapter.getDescription().getValue(),
      chapter.getOrder().getValue(),
      chapter.getCourseId().getValue()
    );
  }
}
