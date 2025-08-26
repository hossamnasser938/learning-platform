import { ModelId } from "@l-p/shared/domain/models";
import { LearnerName } from "./LearnerName";
import { LearnerAge } from "./LearnerAge";
import { Country } from "./Country";
import { CourseCategory } from "./CourseCategory";
import { AggregateRoot } from "@l-p/shared/domain/models/aggregate-root";
import { LearnerEnrolledInCourseEvent } from "../../events";

export class Learner extends AggregateRoot<ModelId> {
  private constructor(
    id: ModelId,
    private readonly name: LearnerName,
    private readonly age: LearnerAge,
    private readonly country: Country,
    private readonly preferredCourseCategories: CourseCategory[],
    private enrolledCourses: ModelId[] = []
  ) {
    super(id);
  }

  static create(
    id: string,
    name: string,
    age: number,
    country: Country,
    preferredCourseCategories: CourseCategory[]
  ): Learner {
    return new Learner(
      ModelId.create(id),
      LearnerName.create(name),
      LearnerAge.create(age),
      country,
      preferredCourseCategories
    );
  }

  static newLearner(
    id: string,
    name: string,
    age: number,
    country: Country,
    preferredCourseCategories: CourseCategory[]
  ): Learner {
    const learner = new Learner(
      ModelId.create(id),
      LearnerName.create(name),
      LearnerAge.create(age),
      country,
      preferredCourseCategories
    );
    return learner;
  }

  getName(): LearnerName {
    return this.name;
  }

  getAge(): LearnerAge {
    return this.age;
  }

  getCountry(): Country {
    return this.country;
  }

  getPreferredCourseCategories(): CourseCategory[] {
    return this.preferredCourseCategories;
  }

  getEnrolledCourses(): ModelId[] {
    return this.enrolledCourses;
  }

  hasPreferredCategory(category: CourseCategory): boolean {
    return this.preferredCourseCategories.includes(category);
  }

  isEnrolledInCourse(courseId: ModelId): boolean {
    return this.enrolledCourses.some(course => course.equals(courseId));
  }

  enrollInCourse(courseId: ModelId): void {
    if (!this.isEnrolledInCourse(courseId)) {
      this.enrolledCourses.push(courseId);
      
      this.addEvent(
        new LearnerEnrolledInCourseEvent(
          this.getId().getValue(),
          courseId.getValue()
        )
      );
    }
  }

  dropCourse(courseId: ModelId): void {
    const index = this.enrolledCourses.findIndex(course => course.equals(courseId));
    if (index > -1) {
      this.enrolledCourses.splice(index, 1);
      // TODO: add domain event to the aggregate root
    }
  }

  addPreferredCategory(category: CourseCategory): void {
    if (!this.hasPreferredCategory(category)) {
      this.preferredCourseCategories.push(category);
    }
  }

  removePreferredCategory(category: CourseCategory): void {
    const index = this.preferredCourseCategories.indexOf(category);
    if (index > -1) {
      this.preferredCourseCategories.splice(index, 1);
    }
  }
}
