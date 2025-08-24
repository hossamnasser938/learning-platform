export class CreateChapterDTO {
  constructor(
    public readonly title: string,
    public readonly description: string,
    public readonly order: number,
    public readonly courseId: string
  ) {}
}
