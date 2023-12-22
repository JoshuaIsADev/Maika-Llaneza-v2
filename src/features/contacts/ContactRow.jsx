import { useForm } from 'react-hook-form';
import { deleteContact, updateContact } from '../../services/apiContacts';
import Row from '../../ui/Row';
import Button from '../../ui/Button';
import Input from '../../ui/Input';
import toast from 'react-hot-toast';
import Form from '../../ui/Form';
import ButtonsContainer from '../../ui/ButtonsContainer';
import MutationFunction from '../../hooks/MutationFunction';
import FormRow from '../../ui/FormRow';

function ContactRow({ contact }) {
  const { id: contactId, name, url } = contact;

  const { register, handleSubmit, reset } = useForm();

  const contactsQueryKey = ['contacts'];

  const deleteMutation = MutationFunction(
    (id) => deleteContact(id),
    () => {
      toast.success('Contact deleted');
      // reset();
    },
    contactsQueryKey
  );

  const updateMutation = MutationFunction(
    ({ ...data }) => updateContact({ ...data }),
    // console.log(contactId),
    () => {
      toast.success('Contact updated');
      reset();
    },
    contactsQueryKey
  );

  function onDelete(data) {
    deleteMutation.mutate(contactId);
  }

  function onSubmit(data) {
    updateMutation.mutate({ contactId, ...data });
  }

  function onError(errors) {
    console.log(errors);
  }

  return (
    <Form role='vertical' onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow label='Contact name'>
        <Input
          defaultValue={name}
          id='name'
          {...register('name', {
            required: 'Please enter a name for the link',
          })}
        />
      </FormRow>

      <FormRow label='URL'>
        <Input
          defaultValue={url}
          id='url'
          {...register('url', {
            required: 'Please enter the url',
          })}
        />
      </FormRow>

      <Row role='row' type='horizontal' $variation='buttons'>
        <ButtonsContainer>
          <Button
            onClick={onDelete}
            disabled={deleteMutation.isLoading}
            $variation='danger'
            type='button'
          >
            Delete
          </Button>
          <Button $variation='secondary' type='reset'>
            Undo
          </Button>
          <Button $variation='primary' type='submit'>
            Save
          </Button>
        </ButtonsContainer>
      </Row>
    </Form>
  );
}

export default ContactRow;
