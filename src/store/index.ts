export class UpdateSavingError extends Error {
  constructor(message: string) {
    super(message);

    this.message = message;
  }
}

export * from './types';
export * from './provider';
