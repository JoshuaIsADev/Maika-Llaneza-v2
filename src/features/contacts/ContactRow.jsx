import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteContact } from '../../services/apiContacts';
import Row from '../../ui/Row';
import Button from '../../ui/Button';
import Column from '../../ui/Column';
import Input from '../../ui/Input';
import toast from 'react-hot-toast';
import FormRow from '../../ui/FormRow';
import Form from '../../ui/Form';
import Label from '../../ui/Label';
import ButtonsContainer from '../../ui/ButtonsContainer';

function ContactRow({ contact }) {
  const { id: contactId, name, url } = contact;

  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate } = useMutation({
    mutationFn: (id) => deleteContact(id),
    onSuccess: () => {
      toast.success('Contact deleted');
      queryClient.invalidateQueries({
        queryKey: ['contacts'],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return (
    <Form role='vertical'>
      <Row role='row' type='horizontal'>
        <FormRow role='row' type='horizontal'>
          <Label type='info' htmlFor='name'>
            Contact name
          </Label>
          <Column type='input' role='col'>
            <Input defaultValue={name} id='name' />
          </Column>
        </FormRow>

        <FormRow role='row' type='horizontal'>
          <Label type='info' htmlFor='url'>
            URL
          </Label>
          <Column type='input' role='col'>
            <Input defaultValue={url} id='url' />
          </Column>
        </FormRow>
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
          <Button $variation='primary'>Save</Button>
        </ButtonsContainer>
      </Row>
    </Form>
  );
}

export default ContactRow;
