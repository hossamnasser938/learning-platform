import { IChapterRepo } from "@l-p/courses/domain/contracts/IChapterRepo";
import { Chapter } from "@l-p/courses/domain/models/chapter/Chapter";
import { injectable } from "@l-p/shared/infrastructure/dependency-injection/utils";

@injectable()
export class ChapterRepo implements IChapterRepo {
  private chapters: Chapter[] = [];

  async getById(id: string): Promise<Chapter | null> {
    const chapter = this.chapters.find((c) => c.getId().equals(id));
    return chapter ? chapter : null;
  }

  async getByCourseId(courseId: string): Promise<Chapter[]> {
    return this.chapters.filter((c) => c.getCourseId().equals(courseId));
  }

  async create(chapter: Chapter): Promise<void> {
    this.chapters.push(chapter);
  }

  async update(chapter: Chapter): Promise<void> {
    const index = this.chapters.findIndex((c) => c.getId() === chapter.getId());
    if (index !== -1) {
      this.chapters[index] = chapter;
    }
  }

  async delete(id: string): Promise<void> {
    this.chapters = this.chapters.filter((c) => c.getId().equals(id));
  }
}
