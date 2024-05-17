import { describe, it, vi } from 'vitest';

vi.mock('react-router-dom', () => ({
  useNavigate: () => vi.fn(),
  useParams: () => ({ groupId: '1', scheduleId: '1' }),
}));

vi.mock('@/apis/groupScheduleApis');

describe('EditGroupPage', () => {
  it('페이지 파라미터를 통해 그룹의 기본값을 받아올 수 있어야 한다.', async () => {});
});
