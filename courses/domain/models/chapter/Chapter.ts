import { Assessment } from "../assessment/Assessment";
import { Lesson } from "../lesson/Lesson";
import { ModelId } from "@l-p/shared/domain/models/ModelId/ModelId";
import { ChapterTitle } from "./ChapterTitle";
import { ChapterDescription } from "./ChapterDescription";
import { ItemOrder } from "@l-p/shared/domain/models/ItemOrder/ItemOrder";

export class Chapter {

  private constructor(
    private readonly id: ModelId,
    private readonly title: ChapterTitle,
    private readonly description: ChapterDescription,
    private readonly order: ItemOrder,
    private readonly courseId: ModelId,
    private readonly lessons: Lesson[] = [],
    private readonly assessments: Assessment[] = []
  ) {}

  static create(
    id: string,
    title: string,
    description: string,
    order: number,
    courseId: string,
    lessons?: Lesson[],
    assessments?: Assessment[]
  ): Chapter {
    return new Chapter(
      ModelId.create(id),
      ChapterTitle.create(title),
      ChapterDescription.create(description),
      ItemOrder.create(order),
      ModelId.create(courseId),
      lessons,
      assessments
    );
  }

  static newChapter(id: string, title: string, description: string, order: number, courseId: string): Chapter {
    const chapter = new Chapter(
      ModelId.create(id),
      ChapterTitle.create(title),
      ChapterDescription.create(description),
      ItemOrder.create(order),
      ModelId.create(courseId)
    );
    //TODO: add event
    return chapter;
  }

  getId(): ModelId {
    return this.id;
  }

  getTitle(): ChapterTitle {
    return this.title;
  }

  getDescription(): ChapterDescription {
    return this.description;
  }

  getOrder(): ItemOrder {
    return this.order;
  }

  getCourseId(): ModelId {
    return this.courseId;
  }

  getLessons(): Lesson[] {
    return this.lessons;
  }

  getAssessments(): Assessment[] {
    return this.assessments;
  }

  addAssessment(assessment: Assessment): void {
    this.assessments.push(assessment);
  }

  addLesson(lesson: Lesson): void {
    this.lessons.push(lesson);
  }
}
