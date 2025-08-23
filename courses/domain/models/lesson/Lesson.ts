import { ItemOrder } from "@l-p/shared/domain/models/ItemOrder/ItemOrder";
import { Assessment } from "../assessment/Assessment";
import { ModelId } from "@l-p/shared/domain/models/ModelId/ModelId";

export class Lesson {
  private id: ModelId;
  private title: string;
  private content: string;
  private order: ItemOrder;
  private chapterId: ModelId;
  private assessments: Assessment[];

  private constructor(
    id: ModelId,
    title: string,
    content: string,
    order: ItemOrder,
    chapterId: ModelId,
    assessments: Assessment[] = []
  ) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.order = order;
    this.chapterId = chapterId;
    this.assessments = assessments;
  }

  static create(
    id: string,
    title: string,
    content: string,
    order: number,
    chapterId: string,
    assessments?: Assessment[]
  ): Lesson {
    return new Lesson(
      ModelId.create(id),
      title,
      content,
      ItemOrder.create(order),
      ModelId.create(chapterId),
      assessments
    );
  }

  static newLesson(id: string, title: string, content: string, order: number, chapterId: string): Lesson {
    const lesson = new Lesson(
      ModelId.create(id),
      title,
      content,
      ItemOrder.create(order),
      ModelId.create(chapterId)
    );
    //TODO: raise event
    return lesson;
  }

  getId(): ModelId {
    return this.id;
  }

  getTitle(): string {
    return this.title;
  }

  getContent(): string {
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
  }
}
