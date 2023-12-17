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

function ContactHeadlineRow({ contactHeadline }) {
  const { headline } = contactHeadline;

  return (
    <TableRow role='vertical'>
      <Row role='row' type='horizontal'>
        <Row role='row' type='horizontal'>
          <Column type='info' role='col'>
            Contact headline
          </Column>
          <Column type='input' role='col'>
            <Input defaultValue={headline} />
          </Column>
        </Row>

        <Row role='row' type='horizontal' $variation='buttons'>
          <ButtonsContainer>
            <Button $variation='secondary'>Undo</Button>
            <Button $variation='primary'>Save</Button>
          </ButtonsContainer>
        </Row>
      </Row>
    </TableRow>
  );
}

export default ContactHeadlineRow;
