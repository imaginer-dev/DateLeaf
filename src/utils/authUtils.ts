export interface ValidationStrategy {
  nameValidate(input: string): boolean;
  nickNameValidate(input: string): boolean;
  phoneValidate(input: string): boolean;
  emailValidate(input: string): boolean;
  passwordValidate(input: string): boolean;
  pwCheckValidate(pwCheck: string, password: string): boolean;
}

export class LooseValidation implements ValidationStrategy {
  nameValidate(name: string): boolean {
    return name.length >= 2;
  }
  nickNameValidate(nickName: string): boolean {
    const regex = /^[a-zA-Z0-9\u3131-\uD79D\uAC00-\uD7A3]+$/;
    return regex.test(nickName) && nickName.length >= 2 && nickName.length <= 12;
  }
  phoneValidate(phone: string): boolean {
    return phone.length == 11;
  }

  pwCheckValidate(pwCheck: string, password: string): boolean {
    return pwCheck == password;
  }

  emailValidate(email: string): boolean {
    return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email);
  }
  passwordValidate(input: string): boolean {
    return input.length >= 6;
  }
}

export class StrongValidation implements ValidationStrategy {
  nameValidate(name: string): boolean {
    return name.length >= 2;
  }
  nickNameValidate(nickName: string): boolean {
    return nickName.length >= 2 && nickName.length <= 12;
  }
  phoneValidate(phone: string): boolean {
    return phone.length == 11;
  }
  pwCheckValidate(pwCheck: string, password: string): boolean {
    return pwCheck == password;
  }
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

  isValidName(name: string) {
    return this.#validator.nameValidate(name);
  }

  isValidNickName(nickName: string) {
    return this.#validator.nickNameValidate(nickName);
  }

  isValidPhone(phone: string) {
    return this.#validator.phoneValidate(phone);
  }

  isValidEmail(email: string) {
    return this.#validator.emailValidate(email);
  }

  isValidPassword(password: string) {
    return this.#validator.passwordValidate(password);
  }

  isValidPwCheck(password: string, pwCheck: string) {
    return this.#validator.pwCheckValidate(password, pwCheck);
  }
}
