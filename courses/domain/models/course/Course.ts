import { Assessment } from "../assessment/Assessment";
import { Chapter } from "../chapter/Chapter";
import { ModelId } from "@l-p/shared/domain/models";
import { CourseTitle } from "./CourseTitle";
import { CourseDescription } from "./CourseDescription";
import { CourseStatus } from "./CourseStatus";
import { InvalidCourseStatusException } from "./exceptions/CourseException";
import { InvalidExistingChapterOrderException } from "../chapter/exceptions/ChapterExceptions";
import { AggregateRoot } from "@l-p/shared/domain/models/aggregate-root";

export class Course extends AggregateRoot<ModelId> {
  private readonly chapters: Chapter[] = [];
  private readonly assessments: Assessment[] = [];
  private status: CourseStatus = CourseStatus.DRAFT;  
  
  private constructor(
    id: ModelId,
    private readonly title: CourseTitle,
    private readonly description: CourseDescription,
    private readonly instructorId: ModelId,
  ) {
    super(id);
  }

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
    return course;
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

  getStatus(): CourseStatus {
    return this.status;
  }

  isDraft(): boolean {
    return this.status === CourseStatus.DRAFT;
  }

  isPublished(): boolean {
    return this.status === CourseStatus.PUBLISHED;
  }

  isArchived(): boolean {
    return this.status === CourseStatus.ARCHIVED;
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

  addChapter(chapter: Chapter): void {
    if (this.chapters.some(c => c.getOrder().equals(chapter.getOrder()))) {
      throw new InvalidExistingChapterOrderException(chapter.getOrder());
    }

    this.chapters.push(chapter);

    // TODO: add event
  }

  addAssessment(assessment: Assessment): void {
    this.assessments.push(assessment);

    // TODO: add event
  }
}
  