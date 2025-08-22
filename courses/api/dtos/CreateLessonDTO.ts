export class CreateLessonDTO {
  constructor(
    public readonly title: string,
    public readonly content: string,
    public readonly chapterId: string
  ) {}
}
