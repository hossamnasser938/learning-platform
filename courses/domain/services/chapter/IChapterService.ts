import { Chapter } from "../../models/chapter/Chapter";

export interface IChapterService {
  createNewChapter(
    title: string,
    description: string,
    order: number,
    courseId: string
  ): Promise<Chapter>;
}
