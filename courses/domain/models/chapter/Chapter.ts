import { Assessment } from "../assessment/Assessment";
import { Lesson } from "../lesson/Lesson";

export class Chapter {
  private id: string;
  private title: string;
  private description: string;
  private order: number;
  private courseId: string;
  private lessons: Lesson[];
  private assessments: Assessment[];

  private constructor(
    id: string,
    title: string,
    description: string,
    order: number,
    courseId: string,
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
      id,
      title,
      description,
      order,
      courseId,
      lessons,
      assessments
    );
  }

  static newChapter(id: string, title: string, description: string, order: number, courseId: string): Chapter {
    const chapter = new Chapter(id, title, description, order, courseId);
    //TODO: raise event
    return chapter;
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

  getOrder(): number {
    return this.order;
  }

  getCourseId(): string {
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
