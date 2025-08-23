import { Course } from "../course/Course";
import { ModelId } from "@l-p/shared/domain/models/ModelId/ModelId";
import { InstructorName } from "./InstructorName";
import { InstructorBio } from "./InstructorBio";

export class Instructor {
  private readonly courses: Course[] = [];

  private constructor(
    private readonly id: ModelId,
    private readonly name: InstructorName,
    private readonly bio: InstructorBio,
  ) {}

  static create(
    id: string,
    name: string,
    bio: string,
  ): Instructor {
    return new Instructor(
      ModelId.create(id), 
      InstructorName.create(name), 
      InstructorBio.create(bio), 
    );
  }

  static newInstructor(id: string, name: string, bio: string): Instructor {
    const instructor = new Instructor(
      ModelId.create(id), 
      InstructorName.create(name), 
      InstructorBio.create(bio)
    );
    //TODO: add event
    return instructor;
  }

  getId(): ModelId {
    return this.id;
  }

  getName(): InstructorName {
    return this.name;
  }

  getBio(): InstructorBio {
    return this.bio;
  }

  getCourses(): Course[] {
    return this.courses;
  }

  addCourse(course: Course): void {
    this.courses.push(course);
  }
}
