export interface ValidationStrategy {
  emailValidate(input: string): boolean;
  passwordValidate(input: string): boolean;
}

export class LooseValidation implements ValidationStrategy {
  emailValidate(email: string): boolean {
    return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email);
  }
  passwordValidate(input: string): boolean {
    return input.length >= 6;
  }
}

export class StrongValidation implements ValidationStrategy {
  emailValidate(password: string): boolean {
    return password.length >= 6;
  }
  passwordValidate(input: string): boolean {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    return regex.test(input);
  }
}

export class ValidateProcessor {
  #validator: ValidationStrategy;
  constructor(validator: ValidationStrategy) {
    this.#validator = validator;
  }

  setValidator(validator: ValidationStrategy) {
    this.#validator = validator;
  }

  isValidEmail(email: string) {
    return this.#validator.emailValidate(email);
  }

  isValidPassword(password: string) {
    return this.#validator.passwordValidate(password);
  }
}
