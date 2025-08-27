export class GetCoursesByIdsQuery {
  constructor(
    public readonly courseIds: string[]
  ) {}
}
