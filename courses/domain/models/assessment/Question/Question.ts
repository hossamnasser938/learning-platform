export abstract class Question {
  private id: string;
  private body: string;

  constructor(id: string, body: string) {
    this.id = id;
    this.body = body;
  }

  getId(): string {
    return this.id;
  }

  getTitle(): string {
    return this.body;
  }
}
