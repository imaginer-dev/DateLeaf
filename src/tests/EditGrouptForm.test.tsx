import EditGroupForm from '@/components/EditGroup/EditGroupForm';
import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

describe('EditGroupForm', () => {
  it('모임명, 설명, 메모를 수정할 수 있어야 한다.', async () => {
    const user = userEvent.setup();
    render(<EditGroupForm />);

    const groupNameInput = screen.getByPlaceholderText(/모임명/);
    const groupDescriptionInput = screen.getByPlaceholderText(/모임 설명/);
    const groupDateStartInput = screen.getByLabelText(/모임 설정 기간/);
    const groupMemoInput = screen.getByPlaceholderText(/메모/);

    expect(groupNameInput).toBeInTheDocument();
    expect(groupDescriptionInput).toBeInTheDocument();
    expect(groupDateStartInput).toBeInTheDocument();
    expect(groupMemoInput).toBeInTheDocument();

    await act(async () => {
      await user.type(groupNameInput, 'name');
      await user.type(groupDescriptionInput, 'description');
      await user.type(groupMemoInput, 'memo');
    });

    expect(groupNameInput).toHaveValue('name');
    expect(groupDescriptionInput).toHaveValue('description');
    expect(groupMemoInput).toHaveValue('memo');
  });
});
