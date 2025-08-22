import { Course } from "../course/Course";

export class Instructor {
  private id: string;
  private name: string;
  private bio: string;
  private courses: Course[];

  private constructor(
    id: string,
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
    return new Instructor(id, name, bio, courses);
  }

  getId(): string {
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
