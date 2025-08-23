export class ItemOrderException extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ItemOrderException';
  }
}

export class ItemOrderNonPositiveIntegerException extends ItemOrderException {
  constructor(order: number) {
    super(`Invalid item order: ${order}. Order must be a non-negative integer.`);
    this.name = 'ItemOrderNonPositiveIntegerException';
  }
}
