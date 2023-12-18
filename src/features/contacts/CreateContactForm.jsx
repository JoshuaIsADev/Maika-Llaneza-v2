import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { createContact } from '../../services/apiContacts';
import Row from '../../ui/Row';
import Button from '../../ui/Button';
import Input from '../../ui/Input';
import FormRow from '../../ui/FormRow';
import Form from '../../ui/Form';
import ButtonsContainer from '../../ui/ButtonsContainer';

function CreateContactForm() {
  const { register, handleSubmit, reset, formState } = useForm();

  const { errors } = formState;

  const queryClient = useQueryClient();

  const { mutate, isLoading: isCreating } = useMutation({
    mutationFn: (newContact) => createContact(newContact),
    onSuccess: () => {
      toast.success('New contact created');
      queryClient.invalidateQueries({
        queryKey: ['contacts'],
      });
      reset();
    },
    onError: (err) => toast.error(err.message),
  });

  function onSubmit(data) {
    mutate(data);
  }

  function onError(errors) {
    console.log(errors);
  }

  return (
    <Form role='vertical' onSubmit={handleSubmit(onSubmit, onError)}>
      <Row role='row' type='horizontal'>
        <FormRow label='Contact name' error={errors?.name?.message}>
          <Input
            id='name'
            disabled={isCreating}
            {...register('name', {
              required: 'Please enter a name for the link',
            })}
          />
        </FormRow>

        <FormRow
          label='URL'
          error={errors?.url?.message}
          role='row'
          type='horizontal'
        >
          <Input
            id='url'
            disabled={isCreating}
            {...register('url', {
              required: 'Please enter the url',
            })}
          />
        </FormRow>
      </Row>

      <Row role='row' type='horizontal' $variation='buttons'>
        <ButtonsContainer>
          <Button $variation='secondary' type='reset' disabled={isCreating}>
            Cancel
          </Button>
          <Button $variation='primary' type='submit' disabled={isCreating}>
            Create
          </Button>
        </ButtonsContainer>
      </Row>
    </Form>
  );
}

export default CreateContactForm;
