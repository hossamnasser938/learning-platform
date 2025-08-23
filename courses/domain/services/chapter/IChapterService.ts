import { Chapter } from "../../models";

export interface IChapterService {
  createNewChapter(
    title: string,
    description: string,
    order: number,
    courseId: string
  ): Promise<Chapter>;
}
