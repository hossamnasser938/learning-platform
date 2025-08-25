import { Instructor } from "@l-p/courses/domain/models";

export class AddInstructorResponse {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly bio: string
  ) {}

  static fromDomain(instructor: Instructor): AddInstructorResponse {
    return new AddInstructorResponse(
      instructor.getId().getValue(),
      instructor.getName().getValue(),
      instructor.getBio().getValue()
    );
  }
}
