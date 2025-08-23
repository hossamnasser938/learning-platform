import { Lesson } from "../../models/lesson/Lesson";

export interface ILessonService {
  createNewLesson(
    title: string,
    content: string,
    order: number,
    chapterId: string
  ): Promise<Lesson>;
}
