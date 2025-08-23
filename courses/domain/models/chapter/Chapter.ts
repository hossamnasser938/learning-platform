import { Assessment } from "../assessment/Assessment";
import { Lesson } from "../lesson/Lesson";
import { ModelId, ItemOrder } from "@l-p/shared/domain/models";
import { ChapterTitle } from "./ChapterTitle";
import { ChapterDescription } from "./ChapterDescription";
import { InvalidExistingLessonOrderException } from "../lesson/exceptions/LessonException";
import { AggregateRoot } from "@l-p/shared/domain/models/aggregate-root";

export class Chapter extends AggregateRoot<ModelId> {
  private readonly lessons: Lesson[] = [];
  private readonly assessments: Assessment[] = [];

  private constructor(
    id: ModelId,
    private readonly title: ChapterTitle,
    private readonly description: ChapterDescription,
    private readonly order: ItemOrder,
    private readonly courseId: ModelId,
  ) {
    super(id);
  }

  static create(
    id: string,
    title: string,
    description: string,
    order: number,
    courseId: string,
  ): Chapter {
    return new Chapter(
      ModelId.create(id),
      ChapterTitle.create(title),
      ChapterDescription.create(description),
      ItemOrder.create(order),
      ModelId.create(courseId),
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
    return chapter;
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

    // TODO: add event
  }

  addLesson(lesson: Lesson): void {
    if (this.lessons.some(l => l.getOrder().equals(lesson.getOrder()))) {
      throw new InvalidExistingLessonOrderException(lesson.getOrder());
    }

    this.lessons.push(lesson);

    // TODO: add event
  }
}
