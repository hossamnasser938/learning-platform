import { Request, Response, Router } from "express";
import { container } from "@l-p/shared/infrastructure/dependency-injection";
import { coursesApiID } from "@l-p/courses/infrastructure/dependency-injection/tokens";
import { ICoursesApi } from "@l-p/courses/api/ICoursesApi";
import { GetInstructorsDTO } from "@l-p/courses/api/dtos/GetInstructorsDTO";

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
