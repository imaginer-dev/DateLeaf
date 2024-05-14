import { Database } from '@/supabase/supabse.types';

export const groupScheduleFixture: Database['public']['Tables']['group_schedules']['Row'][] = [
  {
    id: 1,
    created_at: '2024-05-10 06:22:44.084046+00',
    title: 'Test',
    description: 'Test용 모임 일정',
    start_date: '2024-05-17 06:21:56+00',
    end_date: '2024-05-18 06:22:02+00',
    owner_id: '1d7a5662-922e-4167-932d-4dda46f67ef2',
    memo: 'Test용으로 생성된 모임 일정 입니다.',
    group_id: 1,
  },
];
