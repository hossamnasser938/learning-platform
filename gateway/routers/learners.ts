import { Request, Response, Router } from "express";
import { container } from "@l-p/shared/infrastructure/dependency-injection";
import { ILearnersApi } from "@l-p/learners/api/ILearnersApi";
import { learnersApiID } from "@l-p/learners/infrastructure/dependency-injection/tokens";

export const learnersRouter = Router();

const learnersApi = container.get<ILearnersApi>(learnersApiID);

learnersRouter.post("/health-check", (req: Request, res: Response) => {
  const result = learnersApi.healthCheck();

  res.status(200).send(result);
});
