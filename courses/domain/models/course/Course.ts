import { Assessment } from "../assessment/Assessment";
import { Chapter } from "../chapter/Chapter";

export class Course {
  private id: string;
  private title: string;
  private description: string;
  private chapters: Chapter[];
  private assessments: Assessment[];

  private constructor(
    id: string,
    title: string,
    description: string,
    chapters: Chapter[] = [],
    assessments: Assessment[] = []
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.chapters = chapters;
    this.assessments = assessments;
  }

  static create(
    id: string,
    title: string,
    description: string,
    chapters?: Chapter[],
    assessments?: Assessment[]
  ): Course {
    return new Course(id, title, description, chapters, assessments);
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

  getChapters(): Chapter[] {
    return this.chapters;
  }

  getAssessments(): Assessment[] {
    return this.assessments;
  }

  addChapter(chapter: Chapter): void {
    this.chapters.push(chapter);
  }

  addAssessment(assessment: Assessment): void {
    this.assessments.push(assessment);
  }
}
