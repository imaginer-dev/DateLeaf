import { useMutation } from '@tanstack/react-query';
import { signIn } from '@/apis';

const useSignIn = () =>
  useMutation({
    mutationKey: ['signIn'],
    mutationFn: signIn,
  });

export default useSignIn;
