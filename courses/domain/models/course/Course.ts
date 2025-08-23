import { Assessment } from "../assessment/Assessment";
import { Chapter } from "../chapter/Chapter";
import { ModelId } from "@l-p/shared/domain/models";
import { CourseTitle } from "./CourseTitle";
import { CourseDescription } from "./CourseDescription";
import { CourseStatus } from "./CourseStatus";
import { InvalidCourseStatusException } from "./exceptions/CourseException";

export class Course {
  private readonly chapters: Chapter[] = [];
  private readonly assessments: Assessment[] = [];
  private status: CourseStatus = CourseStatus.DRAFT;  
  
  private constructor(
    private readonly id: ModelId,
    private readonly title: CourseTitle,
    private readonly description: CourseDescription,
    private readonly instructorId: ModelId,
  ) {}

  static create(
    id: string,
    title: string,
    description: string,
    instructorId: string,
  ): Course {
    return new Course(
      ModelId.create(id),
      CourseTitle.create(title),
      CourseDescription.create(description),
      ModelId.create(instructorId),
    );
  }

  static newCourse(id: string, title: string, description: string, instructorId: string): Course {
    const course = new Course(
      ModelId.create(id),
      CourseTitle.create(title),
      CourseDescription.create(description),
      ModelId.create(instructorId)
    );
    //TODO: add event
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

  getStatus(): CourseStatus {
    return this.status;
  }

  publish(): void {
    if (this.status !== CourseStatus.DRAFT) {
      throw new InvalidCourseStatusException(this.status);
    }

    this.status = CourseStatus.PUBLISHED;

    // TODO: add event
  }

  archive(): void {
    if (this.status !== CourseStatus.PUBLISHED) {
      throw new InvalidCourseStatusException(this.status);
    }

    this.status = CourseStatus.ARCHIVED;

    // TODO: add event
  }
}
