import { Instructor } from "@l-p/courses/domain/models/instructor/Instructor";

class InstructorResponse {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly bio: string
  ) {}
}

export class GetInstructorsResponse {
  private constructor(public readonly instructors: InstructorResponse[]) {}

  static fromDomain(instructors: Instructor[]): GetInstructorsResponse {
    const instructorResponses = instructors.map(
      (instructor) =>
        new InstructorResponse(
          instructor.getId().getValue(),
          instructor.getName(),
          instructor.getBio()
        )
    );
    return new GetInstructorsResponse(instructorResponses);
  }
}
