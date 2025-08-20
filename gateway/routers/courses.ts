import { Request, Response, Router } from "express";
import { container } from "@l-p/shared/infrastructure/dependency-injection";
import { coursesApiID } from "@l-p/courses/infrastructure/dependency-injection/tokens";
import { ICoursesApi } from "@l-p/courses/api/ICoursesApi";

export const coursesRouter = Router();

const coursesApi = container.get<ICoursesApi>(coursesApiID);

coursesRouter.post("/health-check", (req: Request, res: Response) => {
  const result = coursesApi.healthCheck();

  res.status(200).send(result);
});
