import { Container } from "@l-p/shared/infrastructure/dependency-injection/utils";
import { CertificationApi } from "@l-p/certifications/api/CertificationApi";
import { certificationApiID } from "./tokens";

export function bindDependencies(container: Container) {
  container.bind(certificationApiID).to(CertificationApi);
}
