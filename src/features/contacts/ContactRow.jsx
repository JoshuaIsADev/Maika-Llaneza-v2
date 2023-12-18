import styled from 'styled-components';
import Row from '../../ui/Row';
import Button from '../../ui/Button';
import Column from '../../ui/Column';
import Input from '../../ui/Input';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteContact } from '../../services/apiContacts';
import toast from 'react-hot-toast';

const TableRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  justify-content: right;
`;

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
    <TableRow role='vertical'>
      <Row role='row' type='horizontal'>
        <Row role='row' type='horizontal'>
          <Column type='info' role='col'>
            Contact name
          </Column>
          <Column type='input' role='col'>
            <Input defaultValue={name} />
          </Column>
        </Row>

        <Row role='row' type='horizontal'>
          <Column type='info' role='col'>
            URL
          </Column>
          <Column type='input' role='col'>
            <Input defaultValue={url} />
          </Column>
        </Row>
      </Row>

      <Row role='row' type='horizontal' $variation='buttons'>
        <ButtonsContainer>
          <Button
            onClick={() => mutate(contactId)}
            disabled={isDeleting}
            $variation='danger'
          >
            Delete
          </Button>
          <Button $variation='secondary'>Undo</Button>
          <Button $variation='primary'>Save</Button>
        </ButtonsContainer>
      </Row>
    </TableRow>
  );
}

export default ContactRow;
