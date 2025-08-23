import { Assessment } from "../assessment/Assessment";
import { Chapter } from "../chapter/Chapter";
import { ModelId } from "@l-p/shared/domain/models/ModelId/ModelId";
import { CourseTitle } from "./CourseTitle";
import { CourseDescription } from "./CourseDescription";

export class Course {
  private constructor(
    private readonly id: ModelId,
    private readonly title: CourseTitle,
    private readonly description: CourseDescription,
    private readonly instructorId: ModelId,
    private readonly chapters: Chapter[] = [],
    private readonly assessments: Assessment[] = []
  ) {}

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
      CourseTitle.create(title),
      CourseDescription.create(description),
      ModelId.create(instructorId),
      chapters,
      assessments
    );
  }

  static newCourse(id: string, title: string, description: string, instructorId: string): Course {
    const course = new Course(
      ModelId.create(id),
      CourseTitle.create(title),
      CourseDescription.create(description),
      ModelId.create(instructorId)
    );
    //TODO: raise event
    return course;
  }

  getId(): ModelId {
    return this.id;
  }

  getTitle(): CourseTitle {
    return this.title;
  }

  getDescription(): CourseDescription {
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
