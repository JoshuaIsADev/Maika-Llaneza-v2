import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { createContact } from '../../services/apiContacts';
import Row from '../../ui/Row';
import Button from '../../ui/Button';
import Column from '../../ui/Column';
import Input from '../../ui/Input';
import FormRow from '../../ui/FormRow';
import Form from '../../ui/Form';
import Label from '../../ui/Label';
import ButtonsContainer from '../../ui/ButtonsContainer';
import Error from '../../ui/Error';

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
        <FormRow role='row' type='horizontal'>
          <Label type='info' htmlFor='name'>
            Contact name
          </Label>
          <Column type='input' role='col'>
            {errors?.name?.message && <Error>{errors.name.message}</Error>}
            <Input
              id='name'
              {...register('name', {
                required: 'Please enter a name for the link',
              })}
            />
          </Column>
        </FormRow>

        <FormRow role='row' type='horizontal'>
          <Label type='info' htmlFor='url'>
            URL
          </Label>
          <Column type='input' role='col'>
            {errors?.url?.message && <Error>{errors.url.message}</Error>}
            <Input
              id='url'
              {...register('url', {
                required: 'Please enter the url',
              })}
            />
          </Column>
        </FormRow>
      </Row>

      <Row role='row' type='horizontal' $variation='buttons'>
        <ButtonsContainer>
          <Button $variation='secondary' type='reset'>
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
