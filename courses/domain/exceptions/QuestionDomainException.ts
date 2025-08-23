export class QuestionDomainException extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'QuestionDomainException';
  }
}

export class InvalidEmptyQuestionBodyException extends QuestionDomainException {
  constructor(body: string) {
    super(`Invalid empty question body: ${body}`);
    this.name = 'InvalidEmptyQuestionBodyException';
  }
}

export class InvalidQuestionBodyMaxLengthException extends QuestionDomainException {
  constructor(body: string) {
    super(`Invalid question body max length: ${body}`);
    this.name = 'InvalidQuestionBodyMaxLengthException';
  }
}
