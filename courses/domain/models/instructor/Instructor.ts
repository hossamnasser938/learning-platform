import { Course } from "../course/Course";
import { ModelId } from "@l-p/shared/domain/models";
import { InstructorName } from "./InstructorName";
import { InstructorBio } from "./InstructorBio";
import { AggregateRoot } from "@l-p/shared/domain/models/aggregate-root";

export class Instructor extends AggregateRoot<ModelId> {
  private readonly courses: Course[] = [];

  private constructor(
    id: ModelId,
    private readonly name: InstructorName,
    private readonly bio: InstructorBio,
  ) {
    super(id);
  }

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

    // TODO: add event
  }
}
