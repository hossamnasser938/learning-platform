import { ICertificationApi } from "@l-p/certifications/api/ICertificationsApi";
import { ServiceIdentifier } from "@l-p/shared/infrastructure/dependency-injection/utils";

export const certificationApiID: ServiceIdentifier<ICertificationApi> =
  Symbol.for("CertificationApi");
