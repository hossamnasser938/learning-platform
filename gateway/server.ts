import "module-alias/register";

import express, { NextFunction, Request, Response } from "express";
import { certificationsRouter, coursesRouter, learnersRouter } from "./routers";
import { ExceptionHandler } from "./ExeptionHandler";
import { container } from "@l-p/shared/infrastructure/dependency-injection";
import { learnersApiID } from "@l-p/learners/infrastructure/dependency-injection/tokens";
import { ILearnersApi } from "@l-p/learners/api/ILearnersApi";

const PORT = process.env.PORT || 3000;

function serverFactory() {
  const app = express();

  app.use(express.json());

  app.use("/courses", coursesRouter);
  app.use("/learners", learnersRouter);
  app.use("/certs", certificationsRouter);

  app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    const { code, message } = ExceptionHandler.handle(err);

    res.status(code).send(message);
  });

  const learnersApi = container.get<ILearnersApi>(learnersApiID);
  learnersApi.startService();

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

serverFactory();
