## 목적

Validation Strategy 유효성 검증 설계 : 이메일과 비밀번호와 같은 유효성 검증을 위한 인터페이스를 정의합니다.
(Strategy Pattern(전략패턴) : 알고리즘을 객체의 일부분으로 캡슐화하여 독립적으로 알고리즘을 변경가능)

## 대상

유효성 검사가 필요한 파일

### `로그인 폼`

- **디자인 패턴 유형**
  - Strategy Pattern(전략패턴)
- **시나리오**

  - 이메일 및 비밀번호 유효성 검사에, 특정한 조건의 유효성 검사가 추가될 경우를 위해 디자인 패턴 적용
    (LooseValidation, StrongValidation)

    ```
    classDiagram
    class ValidationStrategy {
        +emailValidate(input: string) bool
        +passwordValidate(input: string) bool
    }
    class LooseValidation {
        +emailValidate(input: string) bool
        +passwordValidate(input: string) bool
    }
    class StrongValidation {
        +emailValidate(input: string) bool
        +passwordValidate(input: string) bool
    }
    class ValidateProcessor {
        -ValidationStrategy validator
        +ValidateProcessor(validator)
        +setValidator(validator)
        +isValidEmail(email: string) bool
        +isValidPassword(password: string) bool
    }

    ValidationStrategy <|-- LooseValidation : implements
    ValidationStrategy <|-- StrongValidation : implements
    ValidateProcessor o-- ValidationStrategy : uses

    LooseValidation ..> ValidateProcessor : uses
    StrongValidation ..> ValidateProcessor : uses
    ```

- **전략 패턴 구현 경로**

  - 1. 전략 인터페이스 구현 : 위 인터페이스는 #validator라는 메소드를 포함하고 있으며, 이 메소드는 문자열을 입력받아 boolean 값으로 유효성을 반환합니다.
  - 2. 구체적인 전략 클래스 만들기 : 각 클래스는 ValidationStrategy 인터페이스를 구현하며, 이메일과 비밀번호에 대한 구체적인 검증 로직을 제공합니다.
       이 클래스들은 각각 이메일과 비밀번호 검증 로직을 캡슐화하며, validate 메소드를 통해 입력된 데이터의 유효성을 검사합니다.
       이 방식은 검증 로직을 변경하거나 다른 유형의 검증 로직으로 쉽게 교체할 수 있게 해줍니다. 예를 들어, 비밀번호 정책이 변경되어 검증 로직을 업데이트해야 하는 경우, 해당하는 LooseValidation 클래스만 수정하면 됩니다.
  - 3. 비밀번호가 특정 조건 추가 StrongValidation (예: 최소 한 개의 숫자, 하나의 대문자 및 특수 문자 포함)을 충족하는지 확인하는 전략.

- **어떤 문제를 해결하고자 했는지**

  - 유연성 부족: 하나의 유효성 검증이 다양한 시나리오에 맞게 우연하게 조정되지 못하는 문제 (ex 로그인 비밀번호 유효성은 느슨한 유효성을 사용하며, 회원가입 유효성은 느슨한 유효성에 보안을 위한 강력한 특정 조건 추가)
  - 코드 중복 : 비슷한 유효성 검증 로직이 여러 부분 반복적으로 사용되어 코드 중복이 발생하는 문제
  - 낮은 확장성 : 새로운 유효성 검증 로직을 추가하거나 기존 로직을 수정할 때 기존 코드를 많이 변경해야하는 문제.

- **왜 해당 디자인 패턴을 선택했는지**
- Observer : 이벤트 발생에 따른 여러 객체의 반응을 관리할 때 사용되어지므로, 데이터 자체의 유효성 판단에는 적합하지 않다고 생각되어졌습니다.
- Singleton : 전역에서 하나의 인스턴스만 보장하는 패턴이므로 제한적이여서 적합하지 않다고 생각되었습니다.
- Factory Method와 Abstract Factory : 객체 생성에 초점을 맞춘 패턴으로, 유효성 검증 보다는 로직의 교체와 실행에 더 어울릴 것 같아서 제외하였습니다.
- 위와 같은 여러가지 패턴들 중에 전략 패턴은 유효성과 같이 코드의 재사용성과 유지보수 확장성에 더 어울리다고 생각하여서 해당 패턴을 선택하였습니다.

- **코드**

  - 구현 전

    ```
    export const isValidEmail = (email: string): boolean => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
    };

    export const isValidPassword = (password: string) => {
    return password.length >= 6;
    };

    ```

  - 1차 구현

    ```
    export interface ValidationStrategy {
        validate(input: string): boolean;
    }

    export class isValidEmail implements ValidationStrategy {
        validate(email: string): boolean {
            return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email);
        }
    }

    export class isValidPassword implements ValidationStrategy {
        validate(password: string): boolean {
            return password.length >= 6;
        }
    }

    export class isValidPasswordComplex implements ValidationStrategy {
        validate(password: string): boolean {
            const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
            return regex.test(password);
        }
    }
    ```

    - 2차 구현

    ```
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
    ```
