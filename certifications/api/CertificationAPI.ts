import { ICertificationApi } from "./ICertificationsApi";

export class CertificationApi implements ICertificationApi {
  async healthCheck() {
    return true;
  }
}
