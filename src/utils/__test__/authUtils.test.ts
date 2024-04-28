import { describe, expect, it } from 'vitest';
import { isValidEmail, isValidPassword } from '../authUtils.ts';

describe('이메일 검증 유틸리티 함수 테스트', () => {
  it('이메일이 유효할 경우 true 를 반환한다.', () => {
    expect(isValidEmail('test@test.com')).toBe(true);
    expect(isValidEmail('rlghks3004@gmail.com')).toBe(true);
  });
  it('이메일이 유요하지 않을 경우 false 를 반환한다.', () => {
    expect(isValidEmail('test.com')).toBe(false);
    expect(isValidEmail('test@test')).toBe(false);
  });
});

describe('비밀번호 검증 유틸리티 함수 테스트', () => {
  it('비밀번호가 6자리 이상이 아닐 경우 false 를 반환한다.', () => {
    expect(isValidPassword('some')).toBe(false);
  });
});
