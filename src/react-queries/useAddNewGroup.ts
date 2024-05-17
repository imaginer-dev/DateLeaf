import { useMutation } from '@tanstack/react-query';
import { queries } from './queryKeys';
import { createNewGroupApi } from '@/apis/createNewGroupApi.ts';

export const useAddNewGroup = () =>
  useMutation({
    mutationKey: queries.group.add.queryKey,
    mutationFn: createNewGroupApi,
  });
