import { describe, expect, it, vi } from 'vitest';
import { groupScheduleFixture } from './fixtures/groupScheduleFixture';
import { render, screen, waitFor } from '@testing-library/react';
import EditGroupPage from '@/pages/EditGroupSchedulePage';
import wrapper from './helpers/wrapper';
import { getAllGroupMembers, getOneGroupSchedule } from '@/apis/groupScheduleApis';
import { dateToYYMMDD } from '@/utils/dateUtils';
import { memberListFixture } from './fixtures/memberFixture';

vi.mock('react-router-dom', () => ({
  useNavigate: () => vi.fn(),
  useParams: () => ({ groupId: '1', scheduleId: '1' }),
}));

vi.mock('@/apis/groupScheduleApis');

describe('EditGroupPage', () => {
  it('페이지 파라미터를 통해 그룹의 기본값을 받아올 수 있어야 한다.', async () => {
    vi.mocked(getOneGroupSchedule).mockResolvedValueOnce(groupScheduleFixture[0]);
    vi.mocked(getAllGroupMembers).mockResolvedValueOnce(memberListFixture);
    render(<EditGroupPage />, {
      wrapper: wrapper,
    });

    await waitFor(() => expect(screen.getByPlaceholderText(/모임명/)).toHaveValue(groupScheduleFixture[0].title));
    await waitFor(() => expect(screen.getByText(/gihwan/gi)).toBeInTheDocument());

    const groupNameInput = screen.getByPlaceholderText(/모임명/) as HTMLInputElement;
    const groupDescriptionInput = screen.getByPlaceholderText(/모임 설명/) as HTMLInputElement;
    const groupDateStartInput = screen.getByLabelText(/모임 시작/) as HTMLInputElement;
    const groupDateEndInput = screen.getByLabelText(/모임 종료/) as HTMLInputElement;
    const groupMemoInput = screen.getByPlaceholderText(/메모/) as HTMLInputElement;

    expect(groupNameInput.value).toBe(groupScheduleFixture[0].title);
    expect(groupDescriptionInput.value).toBe(groupScheduleFixture[0].description);
    expect(groupDateStartInput.value).toBe(dateToYYMMDD(groupScheduleFixture[0].start_date));
    expect(groupDateEndInput.value).toBe(dateToYYMMDD(groupScheduleFixture[0].end_date));
    expect(groupMemoInput.value).toBe(groupScheduleFixture[0].memo);
  });
});
