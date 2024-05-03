import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { LoginPage } from '../pages';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import supabase from '@/supabase';

vi.mock('@/supabase', () => ({
  default: {
    auth: {
      signInWithPassword: vi.fn(),
    },
  },
}));

const queryClient = new QueryClient();
const wrapper = ({ children }: { children: ReactNode }) => (
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  </BrowserRouter>
);

describe('Login test', () => {
  beforeEach(() => {
    render(<LoginPage />, {
      wrapper,
    });
    window.HTMLDialogElement.prototype.showModal = vi.fn();
    window.HTMLDialogElement.prototype.close = vi.fn();
  });

  afterEach(() => {
    vi.resetAllMocks();
    cleanup();
  });
  it('이메일이 유효하지 않다면 에러 텍스트를 볼 수 있어야 한다.', async () => {
    const emailInput = screen.getByLabelText(/email/i) as HTMLInputElement;
    const passwordInput = screen.getByLabelText(/password/i) as HTMLInputElement;
    fireEvent.change(emailInput, {
      target: {
        value: 'Hello world',
      },
    });
    fireEvent.change(passwordInput, {
      target: {
        value: 'pas',
      },
    });
    await waitFor(() => {});
    const errorEmailText = screen.getByText(/올바른 이메일/);
    const errorPasswordText = screen.getByText(/비밀번호는/);
    expect(errorEmailText).toBeInTheDocument();
    expect(errorPasswordText).toBeInTheDocument();
  });
  it('패스워드가 유효하지 않다면 에러 텍스트를 볼 수 있어야 한다.', async () => {
    const emailInput = screen.getByLabelText(/email/i) as HTMLInputElement;
    const passwordInput = screen.getByLabelText(/password/i) as HTMLInputElement;
    fireEvent.change(emailInput, {
      target: {
        value: 'rlghks3004@gmail.com',
      },
    });
    fireEvent.change(passwordInput, {
      target: {
        value: 'password',
      },
    });
    await waitFor(() => {});
    expect(() => screen.getByText(/올바른 이메일/)).toThrowError();
    expect(() => screen.getByText(/비밀번호는/)).toThrowError();
  });
  it('이메일, 패스워드가 유효하면 로그인 버튼을 통해 로그인 할 수 있어야 한다.', async () => {
    const emailInput = screen.getByLabelText(/email/i) as HTMLInputElement;
    const passwordInput = screen.getByLabelText(/password/i) as HTMLInputElement;
    fireEvent.change(emailInput, {
      target: {
        value: 'rlghks3004@gmail.com',
      },
    });
    fireEvent.change(passwordInput, {
      target: {
        value: 'password',
      },
    });
    await waitFor(() => {});
    const submitButton = screen.getByText('로그인') as HTMLButtonElement;
    fireEvent.click(submitButton);
    await waitFor(() => {});
    expect(supabase.auth.signInWithPassword).toBeCalledTimes(1);
  });
  it('이메일, 패스워드가 유효하지 않다면 로그인 되지 않아야 한다.', async () => {
    const emailInput = screen.getByLabelText(/email/i) as HTMLInputElement;
    const passwordInput = screen.getByLabelText(/password/i) as HTMLInputElement;
    fireEvent.change(emailInput, {
      target: {
        value: 'rlghks3004@gmail',
      },
    });
    fireEvent.change(passwordInput, {
      target: {
        value: 'passw',
      },
    });
    await waitFor(() => {});
    const submitButton = screen.getByText('로그인') as HTMLButtonElement;
    fireEvent.click(submitButton);
    await waitFor(() => {});
    expect(supabase.auth.signInWithPassword).toBeCalledTimes(0);
  });
});
