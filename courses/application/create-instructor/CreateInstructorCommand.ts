import { CreateInstructorDTO } from "../../api/dtos/CreateInstructorDTO";

export class CreateInstructorCommand {
  constructor(public readonly name: string, public readonly bio: string) {}

  static fromDTO(dto: CreateInstructorDTO): CreateInstructorCommand {
    return new CreateInstructorCommand(dto.name, dto.bio);
  }
}
