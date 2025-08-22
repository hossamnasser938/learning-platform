import { Assessment } from "../assessment/Assessment";

export class Lesson {
  private id: string;
  private title: string;
  private content: string;
  private chapterId: string;
  private assessments: Assessment[];

  private constructor(
    id: string,
    title: string,
    content: string,
    chapterId: string,
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
    return new Lesson(id, title, content, chapterId, assessments);
  }

  getId(): string {
    return this.id;
  }

  getTitle(): string {
    return this.title;
  }

  getContent(): string {
    return this.content;
  }

  getChapterId(): string {
    return this.chapterId;
  }

  getAssessments(): Assessment[] {
    return this.assessments;
  }

  addAssessment(assessment: Assessment): void {
    this.assessments.push(assessment);
  }
}
