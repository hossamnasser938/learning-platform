export class CreateInstructorResponse {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly bio: string
  ) {}

  static fromDomain(instructor: any): CreateInstructorResponse {
    return new CreateInstructorResponse(
      instructor.getId().getValue(),
      instructor.getName(),
      instructor.getBio()
    );
  }
}
