import { CreateCourseDTO } from "@l-p/courses/api/dtos";

export class CreateCourseCommand {
  constructor(
    public readonly title: string,
    public readonly description: string,
    public readonly instructorId: string
  ) {}

  static fromDTO(dto: CreateCourseDTO): CreateCourseCommand {
    return new CreateCourseCommand(
      dto.title,
      dto.description,
      dto.instructorId
    );
  }
}
