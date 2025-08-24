export interface ILearnersApi {
  healthCheck(): Promise<boolean>;

  startService(): Promise<void>;
}
