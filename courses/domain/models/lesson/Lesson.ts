import { Assessment } from "../assessment/Assessment";
import { ModelId, ItemOrder } from "@l-p/shared/domain/models";
import { LessonTitle } from "./LessonTitle";
import { LessonContent } from "./LessonContent";
import { AggregateRoot } from "@l-p/shared/domain/models/aggregate-root";

export class Lesson extends AggregateRoot<ModelId> {
  private readonly assessments: Assessment[] = [];

  private constructor(
    id: ModelId,
    private readonly title: LessonTitle,
    private readonly content: LessonContent,
    private readonly order: ItemOrder,
    private readonly chapterId: ModelId,
  ) {
    super(id);
  }

  static create(
    id: string,
    title: string,
    content: string,
    order: number,
    chapterId: string,
  ): Lesson {
    return new Lesson(
      ModelId.create(id),
      LessonTitle.create(title),
      LessonContent.create(content),
      ItemOrder.create(order),
      ModelId.create(chapterId),
    );
  }

  static newLesson(id: string, title: string, content: string, order: number, chapterId: string): Lesson {
    const lesson = new Lesson(
      ModelId.create(id),
      LessonTitle.create(title),
      LessonContent.create(content),
      ItemOrder.create(order),
      ModelId.create(chapterId)
    );
    return lesson;
  }

  getTitle(): LessonTitle {
    return this.title;
  }

  getContent(): LessonContent {
    return this.content;
  }

  getOrder(): ItemOrder {
    return this.order;
  }

  getChapterId(): ModelId {
    return this.chapterId;
  }

  getAssessments(): Assessment[] {
    return this.assessments;
  }

  addAssessment(assessment: Assessment): void {
    this.assessments.push(assessment);

    // TODO: add event
  }
}
