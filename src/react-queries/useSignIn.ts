import { useMutation } from '@tanstack/react-query';
import { signIn } from '../apis';

const useSignIn = () =>
  useMutation({
    mutationKey: [],
    mutationFn: signIn,
  });

export default useSignIn;
