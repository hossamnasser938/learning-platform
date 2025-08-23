import { Course } from "../../models";
import { Chapter } from "../../models";
import { Lesson } from "../../models";

export interface ICourseCreationService {
  createNewCourse(
    title: string,
    description: string,
    instructorId: string
  ): Promise<Course>;

  createNewChapter(
    title: string,
    description: string,
    order: number,
    courseId: string
  ): Promise<Chapter>;

  createNewLesson(
    title: string,
    content: string,
    order: number,
    chapterId: string
  ): Promise<Lesson>;
}
