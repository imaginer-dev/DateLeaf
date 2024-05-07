import { User } from '@supabase/supabase-js';

export const updateUserPasswordResponseFixture: User = {
  id: '1d7a5662-922e-4167-932d-4dda46f67ef2',
  aud: 'authenticated',
  role: 'authenticated',
  email: 'rlghks3004@gmail.com',
  email_confirmed_at: '2024-05-04 04:34:02.297625+00',
  invited_at: undefined,
  confirmation_sent_at: '2024-05-04 04:33:46.652098+00',
  recovery_sent_at: undefined,
  email_change_sent_at: undefined,
  last_sign_in_at: '2024-05-04 04:34:31.223951+00',
  app_metadata: {
    provider: 'email',
    providers: ['email'],
  },
  user_metadata: {
    sub: '1d7a5662-922e-4167-932d-4dda46f67ef2',
    name: '최기환',
    email: 'rlghks3004@gmail.com',
    phone: '01066069806',
    nickName: 'gihwan-dev',
    email_verified: false,
    phone_verified: false,
  },
  created_at: '2024-05-04 04:33:46.644465+00',
  updated_at: '2024-05-04 07:38:32.864951+00',
  phone: undefined,
  phone_confirmed_at: undefined,
  confirmed_at: '2024-05-04 04:34:02.297625+00',
  is_anonymous: false,
};
