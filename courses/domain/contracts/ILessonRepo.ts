import { Lesson } from "../models/lesson/Lesson";

export interface ILessonRepo {
  getById(id: string): Promise<Lesson | null>;
  getByChapterId(chapterId: string): Promise<Lesson[]>;
  create(lesson: Lesson): Promise<void>;
  update(lesson: Lesson): Promise<void>;
  delete(id: string): Promise<void>;
}
