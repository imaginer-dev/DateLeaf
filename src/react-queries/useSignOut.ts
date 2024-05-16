import { useMutation } from '@tanstack/react-query';
import { signOut } from '@/apis/authApis.ts';

export const useSignOut = () =>
  useMutation({
    mutationKey: ['signOut'],
    mutationFn: signOut,
  });
