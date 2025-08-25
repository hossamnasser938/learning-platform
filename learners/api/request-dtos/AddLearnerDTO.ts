export class AddLearnerDTO {
  constructor(
    public readonly name: string,
    public readonly age: number,
    public readonly country: string,
    public readonly preferredCourseCategories: string[]
  ) {}
}
