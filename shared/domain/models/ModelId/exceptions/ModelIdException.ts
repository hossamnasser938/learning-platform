export class ModelIdException extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ModelIdException';
  }
}

export class InvalidEmptyModelIdException extends ModelIdException {
  constructor(id: string) {
    super(`Invalid empty model ID: ${id}`);
    this.name = 'InvalidEmptyModelIdException';
  }
}

export class InvalidModelIdFormatException extends ModelIdException {
  constructor(id: string) {
    super(`Invalid model ID format: ${id}. ID must be a valid UUID v4.`);
    this.name = 'InvalidModelIdFormatException';
  }
}
