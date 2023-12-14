import styled from 'styled-components';
import Row from '../../ui/Row';
import Button from '../../ui/Button';

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 2fr 1fr;
`;

const ButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  width: 200px;
`;

function WritingsRow({ writing }) {
  const { title, publisher, date, url } = writing;

  return (
    <TableRow role='row'>
      <Row type='vertical'>
        <Row>{title}</Row>
        <Row>{publisher}</Row>
      </Row>
      <Row>{date}</Row>
      <Row>{url}</Row>
      <ButtonRow>
        <Button variation='secondary'>Edit</Button>
        <Button variation='secondary'>Delete</Button>
      </ButtonRow>
    </TableRow>
  );
}

export default WritingsRow;
