import { Learner } from "@l-p/learners/domain/models";
import { Country } from "../../domain/models/learner/Country";
import { CourseCategory } from "../../domain/models/learner/CourseCategory";

export class AddLearnerResponse {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly age: number,
    public readonly country: Country,
    public readonly preferredCourseCategories: CourseCategory[]
  ) {}

  static fromDomain(learner: Learner): AddLearnerResponse {
    return new AddLearnerResponse(
      learner.getId().getValue(),
      learner.getName().getValue(),
      learner.getAge().getValue(),
      learner.getCountry(),
      learner.getPreferredCourseCategories()
    );
  }
}
