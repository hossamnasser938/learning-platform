import { Assessment } from "../assessment/Assessment";
import { Chapter } from "../chapter/Chapter";

export class Course {
  private id: string;
  private title: string;
  private description: string;
  private instructorId: string;
  private chapters: Chapter[];
  private assessments: Assessment[];

  private constructor(
    id: string,
    title: string,
    description: string,
    instructorId: string,
    chapters: Chapter[] = [],
    assessments: Assessment[] = []
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.instructorId = instructorId;
    this.chapters = chapters;
    this.assessments = assessments;
  }

  static create(
    id: string,
    title: string,
    description: string,
    instructorId: string,
    chapters?: Chapter[],
    assessments?: Assessment[]
  ): Course {
    return new Course(
      id,
      title,
      description,
      instructorId,
      chapters,
      assessments
    );
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

  getInstructorId(): string {
    return this.instructorId;
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
