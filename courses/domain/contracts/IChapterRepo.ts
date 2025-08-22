import { Chapter } from "../models/chapter/Chapter";

export interface IChapterRepo {
  getById(id: string): Promise<Chapter | null>;
  getByCourseId(courseId: string): Promise<Chapter[]>;
  create(chapter: Chapter): Promise<void>;
  update(chapter: Chapter): Promise<void>;
  delete(id: string): Promise<void>;
}
