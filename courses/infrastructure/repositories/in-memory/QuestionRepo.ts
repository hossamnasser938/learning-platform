import { IQuestionRepo } from "@l-p/courses/domain/contracts";
import { Question } from "@l-p/courses/domain/models/assessment/Question/Question";
import { injectable } from "@l-p/shared/infrastructure/dependency-injection/utils";
@injectable()
export class QuestionRepo implements IQuestionRepo {
  private questions: Question[] = [];

  async getById(id: string): Promise<Question | null> {
    return (
      this.questions.find((question) => question.getId().equals(id)) ||
      null
    );
  }

  async create(question: Question): Promise<void> {
    this.questions.push(question);
  }

  async update(question: Question): Promise<void> {
    const index = this.questions.findIndex(
      (q) => q.getId().equals(question.getId())
    );
    if (index !== -1) {
      this.questions[index] = question;
    }
  }

  async delete(id: string): Promise<void> {
    this.questions = this.questions.filter((q) => !q.getId().equals(id));
  }
}