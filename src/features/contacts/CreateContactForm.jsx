import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { createContact } from '../../services/apiContacts';
import Row from '../../ui/Row';
import Button from '../../ui/Button';
import Input from '../../ui/Input';
import FormRow from '../../ui/FormRow';
import Form from '../../ui/Form';
import ButtonsContainer from '../../ui/ButtonsContainer';
import MutationFunction from '../../hooks/MutationFunction';

function CreateContactForm() {
  const { register, handleSubmit, reset, formState } = useForm();

  const contactsQueryKey = ['contacts'];

  const { errors } = formState;

  const createMutation = MutationFunction(
    (newContact) => createContact(newContact),
    // console.log(contactId),
    () => {
      toast.success('New contact created');
      reset();
    },
    contactsQueryKey
  );

  function onSubmit(data) {
    createMutation.mutate(data);
  }

  function onError(errors) {
    console.log(errors);
  }

  return (
    <Form role='vertical' onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow label='Contact name' error={errors?.name?.message}>
        <Input
          id='name'
          disabled={createMutation.isLoading}
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
          disabled={createMutation.isLoading}
          {...register('url', {
            required: 'Please enter the url',
          })}
        />
      </FormRow>

      <Row role='row' type='horizontal' $variation='buttons'>
        <ButtonsContainer>
          <Button
            $variation='secondary'
            type='reset'
            disabled={createMutation.isLoading}
          >
            Cancel
          </Button>
          <Button
            $variation='primary'
            type='submit'
            disabled={createMutation.isLoading}
          >
            Create
          </Button>
        </ButtonsContainer>
      </Row>
    </Form>
  );
}

export default CreateContactForm;
