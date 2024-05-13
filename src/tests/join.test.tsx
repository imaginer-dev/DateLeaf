import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { JoinPage } from '../pages';
import wrapper from './helpers/wrapper';
import supabase from '@/supabase';
import '@testing-library/jest-dom';

vi.mock('@/supabase', () => ({
  default: {
    auth: {
      signUp: vi.fn(),
    },
  },
}));

describe('Join test', () => {
  beforeEach(() => {
    render(<JoinPage />, {
      wrapper,
    });
    window.HTMLDialogElement.prototype.showModal = vi.fn();
    window.HTMLDialogElement.prototype.close = vi.fn();
  });

  afterEach(() => {
    vi.resetAllMocks();
    cleanup();
  });

  it('이름이 유효하지 않다면 에러 텍스트를 보여줄 수 있어야 한다.', async () => {
    const nameInput = screen.getByLabelText(/join-name/i) as HTMLInputElement;
    fireEvent.change(nameInput, {
      target: {
        value: '1',
      },
    });
    await waitFor(() => {});
    const errorNameText = screen.getByText(/이름을 입력해/);
    expect(errorNameText).toBeInTheDocument();
  });

  it('닉네임이 유효하지 않다면 에러 텍스트를 보여줄 수 있어야 한다.', async () => {
    const nickNameInput = screen.getByLabelText(/nickName/i) as HTMLInputElement;
    fireEvent.change(nickNameInput, {
      target: {
        value: '★☆★파이리☆★☆',
      },
    });
    await waitFor(() => {});
    const errorNameText = screen.getByText(/닉네임은 2~12자 이내/);
    expect(errorNameText).toBeInTheDocument();
  });

  it('휴대폰 번호가 유효하지 않다면 에러 텍스트를 보여줄 수 있어야 한다.', async () => {
    const phoneInput = screen.getByLabelText(/phone/i) as HTMLInputElement;
    fireEvent.change(phoneInput, {
      target: {
        value: '010111',
      },
    });
    await waitFor(() => {});
    const errorNameText = screen.getByText(/11자리를/);
    expect(errorNameText).toBeInTheDocument();
  });

  it('이메일이 유효하지 않다면 에러 텍스트를 보여줄 수 있어야 한다.', async () => {
    const emailInput = screen.getByLabelText(/email/i) as HTMLInputElement;
    fireEvent.change(emailInput, {
      target: {
        value: 'asdfgh.com',
      },
    });
    await waitFor(() => {});
    const errorNameText = screen.getByText(/올바른 이메일을/);
    expect(errorNameText).toBeInTheDocument();
  });

  it('비밀번호가 유효하지 않다면 에러 텍스트를 보여줄 수 있어야 한다.', async () => {
    const passwordInput = screen.getByLabelText(/password/i) as HTMLInputElement;
    fireEvent.change(passwordInput, {
      target: {
        value: '123',
      },
    });
    await waitFor(() => {});
    const errorNameText = screen.getByText(/비밀번호는 6자리 이상/);
    expect(errorNameText).toBeInTheDocument();
  });

  it('비밀번호 value와 비밀번호 확인 value가 일치하지 않다면 에러 텍스트를 보여줄 수 있어야 한다.', async () => {
    const passwordInput = screen.getByLabelText(/password/i) as HTMLInputElement;
    const pwCheckInput = screen.getByLabelText(/pwCheck/i) as HTMLInputElement;
    fireEvent.change(passwordInput, {
      target: {
        value: '123456',
      },
    });
    fireEvent.change(pwCheckInput, {
      target: {
        value: '123123',
      },
    });
    await waitFor(() => {});
    expect(screen.getByText(/비밀번호가 일치하지/)).toBeInTheDocument();
  });

  it('이용약관 및 개인정보 관련 체크를 하지 않으면 에러 텍스트를 보여줄 수 있어야 한다.', async () => {
    const useTermsCheckInput = screen.getByLabelText(/useTermsCheck/i) as HTMLInputElement;
    const privacyTermsCheckInput = screen.getByLabelText(/privacyTermsCheck/i) as HTMLInputElement;

    fireEvent.change(useTermsCheckInput, {
      target: {
        checked: false,
      },
    });
    fireEvent.change(privacyTermsCheckInput, {
      target: {
        checked: false,
      },
    });
    await waitFor(() => {});
    expect(screen.getByText(/이용약관에 동의해/)).toBeInTheDocument();
    expect(screen.getByText(/개인정보 수집, 이용에 동의해/)).toBeInTheDocument();
  });

  it('회원가입 입력정보가 유효하면 회원가입 버튼을 통해 회원가입을 할 수 있어야 한다.', async () => {
    const nameInput = screen.getByLabelText(/join-name/i) as HTMLInputElement;
    const nickNameInput = screen.getByLabelText(/nickName/i) as HTMLInputElement;
    const phoneInput = screen.getByLabelText(/phone/i) as HTMLInputElement;
    const emailInput = screen.getByLabelText(/email/i) as HTMLInputElement;
    const passwordInput = screen.getByLabelText(/password/i) as HTMLInputElement;
    const pwCheckInput = screen.getByLabelText(/pwCheck/i) as HTMLInputElement;
    const useTermsCheckInput = screen.getByLabelText(/useTermsCheck/i) as HTMLInputElement;
    const privacyTermsCheckInput = screen.getByLabelText(/privacyTermsCheck/i) as HTMLInputElement;

    fireEvent.change(nameInput, {
      target: {
        value: '방시혁',
      },
    });
    fireEvent.change(nickNameInput, {
      target: {
        value: 'BangTS',
      },
    });
    fireEvent.change(phoneInput, {
      target: {
        value: '010-1234-1234',
      },
    });
    fireEvent.change(emailInput, {
      target: {
        value: 'bangTS@gmail.com',
      },
    });
    fireEvent.change(passwordInput, {
      target: {
        value: '111111',
      },
    });
    fireEvent.change(pwCheckInput, {
      target: {
        value: '111111',
      },
    });
    fireEvent.click(useTermsCheckInput, {
      target: {
        checked: true,
      },
    });
    fireEvent.click(privacyTermsCheckInput, {
      target: {
        checked: true,
      },
    });
    await waitFor(() => {});
    const submitButton = screen.getByText('회원가입 하기') as HTMLButtonElement;
    fireEvent.click(submitButton);
    await waitFor(() => {});
    expect(supabase.auth.signUp).toBeCalled();
  });

  it('회원가입 입력정보가 유효하지 않으면 회원가입 버튼을 통해 회원가입을 할 수 없어야 한다.', async () => {
    const nameInput = screen.getByLabelText(/join-name/i) as HTMLInputElement;
    const nickNameInput = screen.getByLabelText(/nickName/i) as HTMLInputElement;
    const phoneInput = screen.getByLabelText(/phone/i) as HTMLInputElement;
    const emailInput = screen.getByLabelText(/email/i) as HTMLInputElement;
    const passwordInput = screen.getByLabelText(/password/i) as HTMLInputElement;
    const pwCheckInput = screen.getByLabelText(/pwCheck/i) as HTMLInputElement;
    const useTermsCheckInput = screen.getByLabelText(/useTermsCheck/i) as HTMLInputElement;
    const privacyTermsCheckInput = screen.getByLabelText(/privacyTermsCheck/i) as HTMLInputElement;

    fireEvent.change(nameInput, {
      target: {
        value: '방시혁',
      },
    });
    fireEvent.change(nickNameInput, {
      target: {
        value: 'BangTS',
      },
    });
    fireEvent.change(phoneInput, {
      target: {
        value: '010-1234-1234',
      },
    });
    fireEvent.change(emailInput, {
      target: {
        value: 'bangTS@gmail.com',
      },
    });
    fireEvent.change(passwordInput, {
      target: {
        value: '123456',
      },
    });
    fireEvent.change(pwCheckInput, {
      target: {
        value: '123456',
      },
    });
    fireEvent.click(useTermsCheckInput, {
      target: {
        checked: false,
      },
    });
    fireEvent.click(privacyTermsCheckInput, {
      target: {
        checked: false,
      },
    });
    await waitFor(() => {});
    const submitButton = screen.getByText('회원가입 하기') as HTMLButtonElement;
    fireEvent.click(submitButton);
    await waitFor(() => expect(supabase.auth.signUp).toBeCalledTimes(0));
  });
});
