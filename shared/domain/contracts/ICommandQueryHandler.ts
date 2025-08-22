export interface ICommandQueryHandler<TCommandQuery, TResult = void> {
  handle(command: TCommandQuery): Promise<TResult>;
}
