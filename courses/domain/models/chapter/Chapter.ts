import { Assessment } from "../assessment/Assessment";
import { Lesson } from "../lesson/Lesson";
import { ModelId } from "@l-p/shared/domain/models/ModelId/ModelId";
import { ChapterTitle } from "./ChapterTitle";
import { ChapterDescription } from "./ChapterDescription";
import { ItemOrder } from "@l-p/shared/domain/models/ItemOrder/ItemOrder";

export class Chapter {
  private id: ModelId;
  private title: ChapterTitle;
  private description: ChapterDescription;
  private order: ItemOrder;
  private courseId: ModelId;
  private lessons: Lesson[];
  private assessments: Assessment[];

  private constructor(
    id: ModelId,
    title: ChapterTitle,
    description: ChapterDescription,
    order: ItemOrder,
    courseId: ModelId,
    lessons: Lesson[] = [],
    assessments: Assessment[] = []
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.order = order;
    this.courseId = courseId;
    this.lessons = lessons;
    this.assessments = assessments;
  }

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
    //TODO: raise event
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
