import { Assessment } from "../assessment/Assessment";
import { Lesson } from "../lesson/Lesson";

export class Chapter {
  private id: string;
  private title: string;
  private description: string;
  private lessons: Lesson[];
  private assessments: Assessment[];

  private constructor(
    id: string,
    title: string,
    description: string,
    lessons: Lesson[] = [],
    assessments: Assessment[] = []
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.lessons = lessons;
    this.assessments = assessments;
  }

  static create(
    id: string,
    title: string,
    description: string,
    lessons?: Lesson[],
    assessments?: Assessment[]
  ): Chapter {
    return new Chapter(id, title, description, lessons, assessments);
  }

  getId(): string {
    return this.id;
  }

  getTitle(): string {
    return this.title;
  }

  getDescription(): string {
    return this.description;
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
