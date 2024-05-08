import supabase from '@/supabase';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { updateUserPasswordResponseFixture } from './fixtures/userFixture';
import { AuthError } from '@supabase/supabase-js';
import { act, render, screen, waitFor } from '@testing-library/react';
import ChangePasswordForm from '@/components/ChangePassword/ChangePasswordForm';
import userEvent from '@testing-library/user-event';
import { sessionFixture } from './fixtures/sessionFixture';
import wrapper from './helpers/wrapper';

vi.mock('@/supabase');

describe('ChangePassword', async () => {
  beforeEach(() => {
    render(<ChangePasswordForm />, { wrapper });
  });
  afterEach(() => {
    vi.resetAllMocks();
  });

  it('비밀번호 변경 요청을 보낼 수 있어야 한다.', async () => {
    const user = userEvent.setup();
    vi.mocked(supabase.auth.updateUser).mockResolvedValue({
      data: {
        user: updateUserPasswordResponseFixture,
      },
      error: null,
    });
    vi.mocked(supabase.auth.getSession).mockResolvedValue({
      data: {
        session: sessionFixture,
      },
      error: null,
    });

    const passwordInput = screen.getByPlaceholderText(/비밀번호/);
    const submitButton = screen.getByRole('button', { name: /비밀번호/ });

    await act(async () => {
      await user.type(passwordInput, 'someNewPassword');
      await user.click(submitButton);
    });

    expect(supabase.auth.updateUser).toBeCalled();
  });

  it('비밀번호 변경 성공시 로그인 되었다면 로그아웃 요청을 호출해야 한다.', async () => {
    const user = userEvent.setup();

    vi.mocked(supabase.auth.updateUser).mockResolvedValue({
      data: {
        user: updateUserPasswordResponseFixture,
      },
      error: null,
    });
    vi.mocked(supabase.auth.getSession).mockResolvedValue({
      data: {
        session: sessionFixture,
      },
      error: null,
    });
    vi.mocked(supabase.auth.signOut).mockResolvedValue({
      error: new Error('some Error') as AuthError,
    });

    const passwordInput = screen.getByPlaceholderText(/비밀번호/);
    const submitButton = screen.getByRole('button', { name: /비밀번호/ });

    await act(async () => {
      await user.type(passwordInput, 'someNewPassword');
      await user.click(submitButton);
    });

    await waitFor(() => {});

    expect(supabase.auth.updateUser).toBeCalled();
    expect(supabase.auth.signOut).toBeCalled();
  });

  it('비밀번호 변경 실패시 에러 다이얼로그를 보여줄 수있어야 한다.', async () => {
    const user = userEvent.setup();
    vi.mocked(supabase.auth.updateUser).mockResolvedValue({
      data: {
        user: null,
      },
      error: new Error('some error') as AuthError,
    });
    vi.mocked(supabase.auth.getSession).mockResolvedValue({
      data: {
        session: sessionFixture,
      },
      error: null,
    });

    const passwordInput = screen.getByPlaceholderText(/비밀번호/);
    const submitButton = screen.getByRole('button', { name: /비밀번호/ });

    await act(async () => {
      await user.type(passwordInput, 'somePassword');
      await user.click(submitButton);
    });

    await waitFor(() => {});

    const errorDialog = screen.queryByText('some error');

    expect(errorDialog).toBeInTheDocument();
  });
});
