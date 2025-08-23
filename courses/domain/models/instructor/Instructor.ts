import { Course } from "../course/Course";
import { ModelId } from "@l-p/shared/domain/models/ModelId/ModelId";

export class Instructor {
  private id: ModelId;
  private name: string;
  private bio: string;
  private courses: Course[];

  private constructor(
    id: ModelId,
    name: string,
    bio: string,
    courses: Course[] = []
  ) {
    this.id = id;
    this.name = name;
    this.bio = bio;
    this.courses = courses;
  }

  static create(
    id: string,
    name: string,
    bio: string,
    courses?: Course[]
  ): Instructor {
    return new Instructor(ModelId.create(id), name, bio, courses);
  }

  static newInstructor(id: string, name: string, bio: string): Instructor {
    const instructor = new Instructor(ModelId.create(id), name, bio);
    //TODO: raise event
    return instructor;
  }

  getId(): ModelId {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getBio(): string {
    return this.bio;
  }

  getCourses(): Course[] {
    return this.courses;
  }

  addCourse(course: Course): void {
    this.courses.push(course);
  }
}
