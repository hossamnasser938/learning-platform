import { Assessment } from "../assessment/Assessment";
import { ModelId } from "@l-p/shared/domain/models/ModelId";

export class Lesson {
  private id: ModelId;
  private title: string;
  private content: string;
  private chapterId: ModelId;
  private assessments: Assessment[];

  private constructor(
    id: ModelId,
    title: string,
    content: string,
    chapterId: ModelId,
    assessments: Assessment[] = []
  ) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.chapterId = chapterId;
    this.assessments = assessments;
  }

  static create(
    id: string,
    title: string,
    content: string,
    chapterId: string,
    assessments?: Assessment[]
  ): Lesson {
    return new Lesson(
      ModelId.create(id),
      title,
      content,
      ModelId.create(chapterId),
      assessments
    );
  }

  static newLesson(id: string, title: string, content: string, chapterId: string): Lesson {
    const lesson = new Lesson(
      ModelId.create(id),
      title,
      content,
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
