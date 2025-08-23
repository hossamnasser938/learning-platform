import { Assessment } from "../assessment/Assessment";
import { Chapter } from "../chapter/Chapter";
import { ModelId } from "@l-p/shared/domain/models/ModelId/ModelId";

export class Course {
  private id: ModelId;
  private title: string;
  private description: string;
  private instructorId: ModelId;
  private chapters: Chapter[];
  private assessments: Assessment[];

  private constructor(
    id: ModelId,
    title: string,
    description: string,
    instructorId: ModelId,
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
      ModelId.create(id),
      title,
      description,
      ModelId.create(instructorId),
      chapters,
      assessments
    );
  }

  static newCourse(id: string, title: string, description: string, instructorId: string): Course {
    const course = new Course(
      ModelId.create(id),
      title,
      description,
      ModelId.create(instructorId)
    );
    //TODO: raise event
    return course;
  }

  getId(): ModelId {
    return this.id;
  }

  getTitle(): string {
    return this.title;
  }

  getDescription(): string {
    return this.description;
  }

  getInstructorId(): ModelId {
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
