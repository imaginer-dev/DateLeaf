import EditGroupForm from '@/components/Group/GroupForm';
import { dateToYYMMDD } from '@/utils/dateUtils';
import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

describe('EditGroupForm', () => {
  it('수정하는 경우 기본값을 전달할 수 있어야 한다.', () => {
    const startDate = new Date().toString();
    const endDate = new Date().toString();

    render(
      <EditGroupForm
        onSubmit={() => {}}
        name="name"
        description="description"
        startDate={startDate}
        endDate={endDate}
        memo="memo"
      />,
    );
    const groupNameInput = screen.getByPlaceholderText(/모임명/) as HTMLInputElement;
    const groupDescriptionInput = screen.getByPlaceholderText(/모임 설명/) as HTMLInputElement;
    const groupDateStartInput = screen.getByLabelText(/모임 시작/) as HTMLInputElement;
    const groupDateEndInput = screen.getByLabelText(/모임 종료/) as HTMLInputElement;
    const groupMemoInput = screen.getByPlaceholderText(/메모/) as HTMLInputElement;

    expect(groupNameInput.value).toBe('name');
    expect(groupDescriptionInput.value).toBe('description');
    expect(groupDateStartInput.value).toBe(dateToYYMMDD(new Date(startDate)));
    expect(groupDateEndInput.value).toBe(dateToYYMMDD(new Date(endDate)));
    expect(groupMemoInput.value).toBe('memo');
  });
  it('모임명, 설명, 메모를 수정할 수 있어야 한다.', async () => {
    const user = userEvent.setup();
    render(<EditGroupForm onSubmit={() => {}} />);

    const groupNameInput = screen.getByPlaceholderText(/모임명/) as HTMLInputElement;
    const groupDescriptionInput = screen.getByPlaceholderText(/모임 설명/) as HTMLInputElement;
    const groupDateStartInput = screen.getByLabelText(/모임 시작/) as HTMLInputElement;
    const groupDateEndInput = screen.getByLabelText(/모임 종료/) as HTMLInputElement;
    const groupMemoInput = screen.getByPlaceholderText(/메모/) as HTMLInputElement;

    expect(groupNameInput).toBeInTheDocument();
    expect(groupDescriptionInput).toBeInTheDocument();
    expect(groupDateStartInput).toBeInTheDocument();
    expect(groupDateEndInput).toBeInTheDocument();
    expect(groupMemoInput).toBeInTheDocument();

    await act(async () => {
      // 기존 값이 존재하는 경우 type을 하게 되면 기존 값에 이를 추가하려고 함.
      // 그러므로 clear를 통해 기존 날짜 값을 초기화 해줘야 함.
      await user.clear(groupDateStartInput);
      await user.clear(groupDateEndInput);

      await user.type(groupNameInput, 'name');
      await user.type(groupDescriptionInput, 'description');
      await user.type(groupMemoInput, 'memo');
      await user.type(groupDateStartInput, '2022-01-01');
      await user.type(groupDateEndInput, '2022-01-02');
    });

    expect(groupNameInput).toHaveValue('name');
    expect(groupDescriptionInput).toHaveValue('description');
    expect(groupMemoInput).toHaveValue('memo');
    expect(groupDateStartInput).toHaveValue('2022-01-01');
    expect(groupDateEndInput).toHaveValue('2022-01-02');
  });
});
