import styled from 'styled-components';
import Row from '../../ui/Row';
import Button from '../../ui/Button';
import Column from '../../ui/Column';

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

function WritingsRow({ writing }) {
  const { title, publisher, date, url } = writing;

  return (
    <TableRow role='row'>
      <Row role='row' type='horizontal' align='center'>
        <Row role='row' type='horizontal'>
          <Column type='info' role='col'>
            Project title
          </Column>
          <Column type='input' role='col'>
            <Row>{title}</Row>
          </Column>
        </Row>

        <Row role='row' type='horizontal' align='center'>
          <Column type='info' role='col'>
            Publisher
          </Column>
          <Column type='input' role='col'>
            <Row>{publisher}</Row>
          </Column>
        </Row>

        <Row role='row' type='horizontal' align='center'>
          <Column type='info' role='col'>
            Published date
          </Column>
          <Column type='input' role='col'>
            <Row>{date}</Row>
          </Column>
        </Row>

        <Row role='row' type='horizontal' align='center'>
          <Column type='info' role='col'>
            URL
          </Column>
          <Column type='input' role='col'>
            <Row>{url}</Row>
          </Column>
        </Row>
      </Row>

      <Row role='row' type='horizontal' justify='right'>
        <ButtonsContainer>
          <Button variation='secondary'>Edit</Button>
          <Button variation='secondary'>Delete</Button>
        </ButtonsContainer>
      </Row>
    </TableRow>
  );
}

export default WritingsRow;
