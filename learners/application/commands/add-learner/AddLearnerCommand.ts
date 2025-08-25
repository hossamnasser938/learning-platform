import { Country } from "../../../domain/models/learner/Country";
import { CourseCategory } from "../../../domain/models/learner/CourseCategory";

export class AddLearnerCommand {
  constructor(
    public readonly name: string,
    public readonly age: number,
    public readonly country: Country,
    public readonly preferredCourseCategories: CourseCategory[]
  ) {}
}
