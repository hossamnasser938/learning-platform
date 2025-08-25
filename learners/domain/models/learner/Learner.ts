import { ModelId } from "@l-p/shared/domain/models";
import { LearnerName } from "./LearnerName";
import { LearnerAge } from "./LearnerAge";
import { Country } from "./Country";
import { CourseCategory } from "./CourseCategory";
import { AggregateRoot } from "@l-p/shared/domain/models/aggregate-root";

export class Learner extends AggregateRoot<ModelId> {
  private constructor(
    id: ModelId,
    private readonly name: LearnerName,
    private readonly age: LearnerAge,
    private readonly country: Country,
    private readonly preferredCourseCategories: CourseCategory[]
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

  hasPreferredCategory(category: CourseCategory): boolean {
    return this.preferredCourseCategories.includes(category);
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
