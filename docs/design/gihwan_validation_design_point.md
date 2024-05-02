# 디자인 패턴 적용 회고

기존에 존재하던 유틸리티 함수인 `isValidEmail` 함수와 `isValidPassword` 함수에 `Strategy` 를 적용 해 보았습니다.
의존성이 강한 함수들은 아니었지만, 이 전략을 적용하며 좀 더 유연하고 다양한 `validation`을 적용할 수 있도록 구현했습니다.

사실 어떤 부분에 디자인 패턴을 적용할 수 있을까? 객체 지향에 해당하는 패턴인거 같아 함수형인 리액트에 적용할 일이 있나? 하고 생각했습니다.
이번 기회를 통해 리액트에서는 함수형의 코드만이 아닌 객체 지향적인 설계 또한 할 수 있다는걸 알게 되었고, 객체 지향적인 설계가 가져다 주는 이점을 몸소 누릴 수 있었습니다.