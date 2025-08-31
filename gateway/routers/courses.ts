import { Request, Response, Router } from "express";
import { container } from "@l-p/shared/infrastructure/dependency-injection";
import { coursesApiID } from "@l-p/courses/infrastructure/dependency-injection/tokens";
import { ICoursesApi } from "@l-p/courses/api/ICoursesApi";
import {
  GetInstructorsDTO,
  GetCoursesDTO,
  GetCourseByIdDTO,
  GetCourseChaptersDTO,
  GetChapterLessonsDTO,
  PublishCourseDTO,
  ArchiveCourseDTO,
  GetCourseLearnersDTO,
} from "@l-p/courses/api/request-dtos";

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
  const addInstructorDTO = req.body;
  const result = await coursesApi.addInstructor(addInstructorDTO);

  res.status(200).send(result);
});

coursesRouter.get("/courses", async (req: Request, res: Response) => {
  const dto = new GetCoursesDTO();

  const result = await coursesApi.getCourses(dto);

  res.status(200).send(result);
});

coursesRouter.post("/courses", async (req: Request, res: Response) => {
  const createCourseDTO = req.body;
  const result = await coursesApi.createCourse(createCourseDTO);

  res.status(200).send(result);
});

coursesRouter.post("/courses/publish", async (req: Request, res: Response) => {
  const publishCourseDTO = new PublishCourseDTO(req.body.courseId);
  const result = await coursesApi.publishCourse(publishCourseDTO);

  res.status(200).send(result);
});

coursesRouter.post("/courses/archive", async (req: Request, res: Response) => {
  const archiveCourseDTO = new ArchiveCourseDTO(req.body.courseId);
  const result = await coursesApi.archiveCourse(archiveCourseDTO);

  res.status(200).send(result);
});

coursesRouter.get("/courses/:courseId", async (req: Request, res: Response) => {
  const { courseId } = req.params;

  const dto = new GetCourseByIdDTO(courseId);
  const result = await coursesApi.getCourseById(dto);

  res.status(200).json(result);
});

coursesRouter.get("/chapters", async (req: Request, res: Response) => {
  const courseId = req.query.courseId as string;

  const dto = new GetCourseChaptersDTO(courseId);

  const result = await coursesApi.getCourseChapters(dto);

  res.status(200).send(result);
});

coursesRouter.post("/chapters", async (req: Request, res: Response) => {
  const createChapterDTO = req.body;
  const result = await coursesApi.createChapter(createChapterDTO);

  res.status(200).send(result);
});

coursesRouter.get("/lessons", async (req: Request, res: Response) => {
  const chapterId = req.query.chapterId as string;

  const dto = new GetChapterLessonsDTO(chapterId);

  const result = await coursesApi.getChapterLessons(dto);

  res.status(200).send(result);
});

coursesRouter.post("/lessons", async (req: Request, res: Response) => {
  const createLessonDTO = req.body;
  const result = await coursesApi.createLesson(createLessonDTO);

  res.status(200).send(result);
});

coursesRouter.get(
  "/enrollments",
  async (req: Request, res: Response) => {
    const { courseId } = req.query;

    const dto = new GetCourseLearnersDTO(courseId as string);
    const result = await coursesApi.getCourseLearners(dto);

    res.status(200).json(result);
  }
);
