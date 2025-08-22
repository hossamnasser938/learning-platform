import { CreateChapterDTO } from "@l-p/courses/api/dtos/CreateChapterDTO";

export class CreateChapterCommand {
  constructor(
    public readonly courseId: string,
    public readonly title: string,
    public readonly description: string,
    public readonly order: number
  ) {}
}
