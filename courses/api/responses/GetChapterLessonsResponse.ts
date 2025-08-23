import { Lesson } from "@l-p/courses/domain/models/lesson/Lesson";

class LessonResponse {
  constructor(
    public readonly id: string,
    public readonly title: string,
    public readonly content: string,
    public readonly order: number,
    public readonly chapterId: string
  ) {}
}

export class GetChapterLessonsResponse {
  constructor(public readonly lessons: LessonResponse[]) {}

  static fromDomain(lessons: Lesson[]): GetChapterLessonsResponse {
    const lessonResponses = lessons.map(
      (lesson) =>
        new LessonResponse(
          lesson.getId().getValue(),
          lesson.getTitle().getValue(),
          lesson.getContent().getValue(),
          lesson.getOrder().getValue(),
          lesson.getChapterId().getValue()
        )
    );
    return new GetChapterLessonsResponse(lessonResponses);
  }
}
