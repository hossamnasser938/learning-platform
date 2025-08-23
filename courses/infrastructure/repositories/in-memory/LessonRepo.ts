import { ILessonRepo } from "@l-p/courses/domain/contracts/ILessonRepo";
import { Lesson } from "@l-p/courses/domain/models/lesson/Lesson";

export class LessonRepo implements ILessonRepo {
  private lessons: Lesson[] = [];

  async create(lesson: Lesson): Promise<void> {
    this.lessons.push(lesson);
  }

  async getById(id: string): Promise<Lesson | null> {
    return this.lessons.find(lesson => lesson.getId().equals(id)) || null;
  }

  async getByChapterId(chapterId: string): Promise<Lesson[]> {
    return this.lessons.filter(lesson => lesson.getChapterId().equals(chapterId));
  }

  async update(lesson: Lesson): Promise<void> {
    const index = this.lessons.findIndex(l => l.getId().equals(lesson.getId()));
    if (index !== -1) {
      this.lessons[index] = lesson;
    }
  }

  async delete(id: string): Promise<void> {
    const index = this.lessons.findIndex(lesson => lesson.getId().equals(id));
    if (index !== -1) {
      this.lessons.splice(index, 1);
    }
  }
}
