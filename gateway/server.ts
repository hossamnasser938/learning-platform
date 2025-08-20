import "module-alias/register";

import express, { NextFunction, Request, Response } from "express";
import { certificationsRouter } from "./routers";
import { ExceptionHandler } from "./ExeptionHandler";
import { coursesRouter } from "./routers/courses";
import { learnersRouter } from "./routers/learners";

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

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

serverFactory();
