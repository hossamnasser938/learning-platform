import { Chapter } from "@l-p/courses/domain/models/chapter/Chapter";

class CourseChapterResponse {
  constructor(
    public readonly id: string,
    public readonly title: string,
    public readonly description: string,
    public readonly order: number,
    public readonly courseId: string
  ) {}
}

export class GetCourseChaptersResponse {
  constructor(public readonly chapters: CourseChapterResponse[]) {}

  static fromDomain(chapters: Chapter[]): GetCourseChaptersResponse {
    const chapterResponses = chapters.map(
      (chapter) =>
        new CourseChapterResponse(
          chapter.getId().getValue(),
          chapter.getTitle().getValue(),
          chapter.getDescription().getValue(),
          chapter.getOrder().getValue(),
          chapter.getCourseId().getValue()
        )
    );
    return new GetCourseChaptersResponse(chapterResponses);
  }
}
