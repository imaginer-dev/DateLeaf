import { useMutation } from '@tanstack/react-query';
import { signUp } from '@/apis';

const useSignUp = () =>
  useMutation({
    mutationKey: ['signUp'],
    mutationFn: signUp,
  });

export default useSignUp;
