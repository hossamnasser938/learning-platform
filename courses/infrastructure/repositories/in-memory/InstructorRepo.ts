import { IInstructorRepo } from "@l-p/courses/domain/contracts/IInstructorRepo";
import { Instructor } from "@l-p/courses/domain/models/instructor/Instructor";
import { injectable } from "@l-p/shared/infrastructure/dependency-injection/utils";

@injectable()
export class InstructorRepo implements IInstructorRepo {
  private instructors: Instructor[] = [];

  async getById(id: string): Promise<Instructor | null> {
    return (
      this.instructors.find((instructor) => instructor.getId().equals(id)) ||
      null
    );
  }

  async getAll(): Promise<Instructor[]> {
    return this.instructors;
  }

  async create(instructor: Instructor): Promise<void> {
    this.instructors.push(instructor);
  }

  async update(instructor: Instructor): Promise<void> {
    const index = this.instructors.findIndex(
      (i) => i.getId() === instructor.getId()
    );
    if (index !== -1) {
      this.instructors[index] = instructor;
    }
  }

  async delete(id: string): Promise<void> {
    this.instructors = this.instructors.filter((i) => i.getId().equals(id));
  }
}
