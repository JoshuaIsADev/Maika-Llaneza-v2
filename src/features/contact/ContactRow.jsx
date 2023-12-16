import styled from 'styled-components';
import Row from '../../ui/Row';
import Button from '../../ui/Button';
import Column from '../../ui/Column';
import Input from '../../ui/Input';

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
  const { name, url } = contact;

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
          <Button $variation='danger'>Delete</Button>
          <Button $variation='secondary'>Undo</Button>
          <Button $variation='primary'>Save</Button>
        </ButtonsContainer>
      </Row>
    </TableRow>
  );
}

export default ContactRow;
