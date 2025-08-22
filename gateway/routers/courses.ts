import { Request, Response, Router } from "express";
import { container } from "@l-p/shared/infrastructure/dependency-injection";
import { coursesApiID } from "@l-p/courses/infrastructure/dependency-injection/tokens";
import { ICoursesApi } from "@l-p/courses/api/ICoursesApi";
import { GetInstructorsDTO } from "@l-p/courses/api/dtos/GetInstructorsDTO";
import { GetCoursesDTO } from "@l-p/courses/api/dtos/GetCoursesDTO";
import { GetCourseChaptersDTO } from "@l-p/courses/api/dtos/GetCourseChaptersDTO";
import { GetChapterLessonsDTO } from "@l-p/courses/api/dtos/GetChapterLessonsDTO";

export const coursesRouter = Router();

const coursesApi = container.get<ICoursesApi>(coursesApiID);

coursesRouter.post("/health-check", (req: Request, res: Response) => {
  const result = coursesApi.healthCheck();

  res.status(200).send(result);
});

coursesRouter.get("/instructors", async (req: Request, res: Response) => {
  const dto = new GetInstructorsDTO();
  const result = await coursesApi.getInstructors(dto);

  res.status(200).send(result);
});

coursesRouter.post("/instructors", async (req: Request, res: Response) => {
  const createInstructorDTO = req.body;
  await coursesApi.createInstructor(createInstructorDTO);

  res.status(201).send();
});

coursesRouter.get("/courses", async (req: Request, res: Response) => {
  const dto = new GetCoursesDTO();

  const result = await coursesApi.getCourses(dto);

  res.status(200).send(result);
});

coursesRouter.post("/courses", async (req: Request, res: Response) => {
  const createCourseDTO = req.body;
  await coursesApi.createCourse(createCourseDTO);

  res.status(201).send();
});

coursesRouter.get("/chapters", async (req: Request, res: Response) => {
  const courseId = req.query.courseId as string;

  const dto = new GetCourseChaptersDTO(courseId);

  const result = await coursesApi.getCourseChapters(dto);

  res.status(200).send(result);
});

coursesRouter.post("/chapters", async (req: Request, res: Response) => {
  const createChapterDTO = req.body;
  await coursesApi.createChapter(createChapterDTO);

  res.status(201).send();
});

coursesRouter.get("/lessons", async (req: Request, res: Response) => {
  const chapterId = req.query.chapterId as string;

  const dto = new GetChapterLessonsDTO(chapterId);

  const result = await coursesApi.getChapterLessons(dto);

  res.status(200).send(result);
});

coursesRouter.post("/lessons", async (req: Request, res: Response) => {
  const createLessonDTO = req.body;
  await coursesApi.createLesson(createLessonDTO);

  res.status(201).send();
});
