import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

const MutationFunction = (mutationFn, onSuccessCallback, queryKey) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn,
    onSuccess: (...args) => {
      onSuccessCallback && onSuccessCallback(...args);
      queryClient.invalidateQueries({ queryKey });
    },
    onError: (err) => toast.error(err.message),
  });

  return mutation;
};

export default MutationFunction;
