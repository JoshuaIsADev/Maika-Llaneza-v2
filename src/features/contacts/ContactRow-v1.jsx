import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteContact } from '../../services/apiContacts';
import Row from '../../ui/Row';
import Button from '../../ui/Button';
import Column from '../../ui/Column';
import Input from '../../ui/Input';
import toast from 'react-hot-toast';
import Form from '../../ui/Form';
import Label from '../../ui/Label';
import ButtonsContainer from '../../ui/ButtonsContainer';
import { useForm } from 'react-hook-form';
// import { useForm } from 'react-hook-form';

function ContactRow({ contact }) {
  const { id: contactId, name, url, ...editValues } = contact;

  const { register, handleSubmit, reset } = useForm({
    defaultValues: editValues,
  });

  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate } = useMutation({
    mutationFn: (id) => deleteContact(id),
    onSuccess: () => {
      toast.success('Contact deleted');
      queryClient.invalidateQueries({
        queryKey: ['contacts'],
      });
      reset();
    },
    onError: (err) => toast.error(err.message),
  });

  function onSubmit(data) {
    mutate({ id: contactId, ...data });
  }

  function onError(errors) {
    console.log(errors);
  }

  return (
    <Form role='vertical' onSubmit={handleSubmit(onSubmit, onError)}>
      <Row role='row' type='horizontal'>
        <Row role='row' type='horizontal'>
          <Label type='info' htmlFor='name'>
            Contact name
          </Label>
          <Column type='input' role='col'>
            <Input
              defaultValue={name}
              id='name'
              {...register('name', {
                required: 'Please enter a name for the link',
              })}
            />
          </Column>
        </Row>

        <Row role='row' type='horizontal'>
          <Label type='info' htmlFor='url'>
            URL
          </Label>
          <Column type='input' role='col'>
            <Input
              defaultValue={url}
              id='url'
              {...register('url', {
                required: 'Please enter the url',
              })}
            />
          </Column>
        </Row>
      </Row>

      <Row role='row' type='horizontal' $variation='buttons'>
        <ButtonsContainer>
          <Button
            onClick={() => mutate(contactId)}
            disabled={isDeleting}
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
