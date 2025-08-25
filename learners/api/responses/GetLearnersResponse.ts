import { Learner } from "@l-p/learners/domain/models";

class LearnerResponse {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly age: number,
    public readonly country: string,
    public readonly preferredCourseCategories: string[]
  ) {}
}

export class GetLearnersResponse {
  private constructor(public readonly learners: LearnerResponse[]) {}

  static fromDomain(learners: Learner[]): GetLearnersResponse {
    const learnerResponses = learners.map(
      (learner) =>
        new LearnerResponse(
          learner.getId().getValue(),
          learner.getName().getValue(),
          learner.getAge().getValue(),
          learner.getCountry(),
          learner.getPreferredCourseCategories()
        )
    );
    return new GetLearnersResponse(learnerResponses);
  }
}
