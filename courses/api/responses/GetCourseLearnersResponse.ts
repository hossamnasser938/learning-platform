export class LearnerResponse {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly age: number,
    public readonly country: string,
    public readonly preferredCourseCategories: string[]
  ) {}
}

export class GetCourseLearnersResponse {
  constructor(public readonly learners: LearnerResponse[]) {}
}
