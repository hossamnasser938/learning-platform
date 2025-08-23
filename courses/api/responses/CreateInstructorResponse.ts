import { Instructor } from "@l-p/courses/domain/models";

export class CreateInstructorResponse {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly bio: string
  ) {}

  static fromDomain(instructor: Instructor): CreateInstructorResponse {
    return new CreateInstructorResponse(
      instructor.getId().getValue(),
      instructor.getName().getValue(),
      instructor.getBio().getValue()
    );
  }
}
