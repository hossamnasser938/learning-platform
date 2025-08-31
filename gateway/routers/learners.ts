import { Request, Response, Router } from "express";
import { container } from "@l-p/shared/infrastructure/dependency-injection";
import { ILearnersApi } from "@l-p/learners/api/ILearnersApi";
import { learnersApiID } from "@l-p/learners/infrastructure/dependency-injection/tokens";
import { GetLearnersQuery } from "@l-p/learners/application/queries/get-learners";
import { GetLearnerCoursesDTO } from "@l-p/learners/api/request-dtos";

export const learnersRouter = Router();

const learnersApi = container.get<ILearnersApi>(learnersApiID);

learnersRouter.post("/health-check", (req: Request, res: Response) => {
  const result = learnersApi.healthCheck();

  res.status(200).send(result);
});

learnersRouter.post("/", async (req: Request, res: Response) => {
  const result = await learnersApi.addLearner(req.body);
  
  res.status(200).json(result);
});

learnersRouter.get("/", async (req: Request, res: Response) => {
  const getLearnersQuery = new GetLearnersQuery();
  
  const response = await learnersApi.getLearners(getLearnersQuery);
  
  res.status(200).json(response);
});

learnersRouter.get("/enrollments", async (req: Request, res: Response) => {
    const dto = new GetLearnerCoursesDTO(req.query.learnerId as string);
    
    const result = await learnersApi.getLearnerCourses(dto);
    
    res.status(200).json(result);
});

learnersRouter.post("/enrollments", async (req: Request, res: Response) => {
    await learnersApi.enrollLearnerInCourse(req.body);
    
    res.status(201).send();
});