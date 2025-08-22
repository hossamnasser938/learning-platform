export class CreateCourseDTO {
  constructor(
    public readonly title: string,
    public readonly description: string,
    public readonly instructorId: string
  ) {}
}
