import { Request, Response, Router } from "express";
import { ICertificationApi } from "@l-p/certifications/api/ICertificationsApi";
import { certificationApiID } from "@l-p/certifications/infrastructure/dependency-injection/tokens";
import { container } from "@l-p/shared/infrastructure/dependency-injection";

export const certificationsRouter = Router();

const CertificationApi = container.get<ICertificationApi>(certificationApiID);

certificationsRouter.post("/health-check", (req: Request, res: Response) => {
  const result = CertificationApi.healthCheck();

  res.status(200).send(result);
});
