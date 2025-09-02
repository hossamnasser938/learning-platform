import { IAssessmentCreationService } from "./IAssessmentCreationService";
import { CreateAssessmentDTO } from "@l-p/courses/api/request-dtos";
import { Assessment } from "../../models/assessment/Assessment";
import { MCQuestion } from "../../models/assessment/Question/MCQuestion";
import { SCQuestion } from "../../models/assessment/Question/SCQuestion";
import { QuestionType } from "../../models/assessment/Question/QuestionType";
import { MissingQuestionTypeException, InvalidQuestionTypeException } from "../../models/assessment/exceptions";
import { inject, injectable } from "@l-p/shared/infrastructure/dependency-injection/utils";
import { uniqueIDGeneratorID } from "@l-p/shared/infrastructure/dependency-injection/tokens";
import { IUniqueIDGenerator } from "@l-p/shared/domain/contracts";
import { InvalidSingleChoiceCorrectOptionsException } from "../../models/assessment/Question/exceptions";

@injectable()
export class AssessmentCreationService implements IAssessmentCreationService {
  constructor(
    @inject(uniqueIDGeneratorID)
    private readonly idGenerator: IUniqueIDGenerator
  ) {}

  async createAssessment(createAssessmentDTO: CreateAssessmentDTO): Promise<Assessment> {
    const assessmentId = this.idGenerator.generate();
    const assessment = Assessment.create(
      assessmentId,
      createAssessmentDTO.title,
      createAssessmentDTO.description
    );

    for (let i = 0; i < createAssessmentDTO.questions.length; i++) {
      const questionDTO = createAssessmentDTO.questions[i];
      const questionId = this.idGenerator.generate();
      const order = i + 1;

      if (!questionDTO.type) {
        throw new MissingQuestionTypeException();
      }

      switch (questionDTO.type) {
        case QuestionType.SINGLE_CHOICE:

        if (questionDTO.correctOptionIndices.length !== 1) {
          throw new InvalidSingleChoiceCorrectOptionsException(questionDTO.correctOptionIndices.length);
        }

        const singleChoiceQuestion = SCQuestion.create(
          questionId,
          questionDTO.body,
          order,
          assessmentId,
          questionDTO.options,
          questionDTO.correctOptionIndices[0]
        );
        assessment.addQuestion(singleChoiceQuestion);
        break;
        case QuestionType.MULTI_CHOICE:
        const multiChoiceQuestion = MCQuestion.create(
          questionId,
          questionDTO.body,
          order,
          assessmentId,
          questionDTO.options,
          questionDTO.correctOptionIndices
        );
        assessment.addQuestion(multiChoiceQuestion);
        break;
        default:
          throw new InvalidQuestionTypeException(questionDTO.type);
      }
    }

    return assessment;
  }
}
