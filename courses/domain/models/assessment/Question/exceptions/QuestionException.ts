export class QuestionException extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'QuestionException';
  }
}

export class InvalidEmptyQuestionOptionException extends QuestionException {
  constructor(option: string) {
    super(`Invalid empty question option: ${option}`);
    this.name = 'InvalidEmptyQuestionOptionException';
  }
}

export class InvalidQuestionOptionTooLongException extends QuestionException {
  constructor(option: string) {
    super(`Invalid question option too long: ${option}`);
    this.name = 'InvalidQuestionOptionTooLongException';
  }
}

export class InvalidQuestionCorrectOptionIndexException extends QuestionException {
  constructor(index: number) {
    super(`Invalid question correct option index: ${index}`);
    this.name = 'InvalidQuestionCorrectOptionIndexException';
  }
}
