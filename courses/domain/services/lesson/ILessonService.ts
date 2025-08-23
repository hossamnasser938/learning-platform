import { Lesson } from "../../models";

export interface ILessonService {
  createNewLesson(
    title: string,
    content: string,
    order: number,
    chapterId: string
  ): Promise<Lesson>;
}
