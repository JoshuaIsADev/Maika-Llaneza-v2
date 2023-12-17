import styled from 'styled-components';
import Row from '../../ui/Row';
import Button from '../../ui/Button';
import Column from '../../ui/Column';
import Input from '../../ui/Input';
import TextArea from '../../ui/TextArea';

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

function ParagraphRow({ paragraph }) {
  const { title, paragraphText } = paragraph;

  return (
    <TableRow role='vertical'>
      <Row role='row' type='horizontal'>
        <Row role='row' type='horizontal'>
          <Column type='info' role='col'>
            Paragraph title
          </Column>
          <Column type='input' role='col'>
            <Input defaultValue={title} />
          </Column>
        </Row>

        <Row role='row' type='horizontal'>
          <Column type='info' role='col'>
            Paragraph
          </Column>
          <Column type='input' role='col'>
            <TextArea rows='12' defaultValue={paragraphText} />
          </Column>
        </Row>

        <Row role='row' type='horizontal' $variation='buttons'>
          <ButtonsContainer>
            <Button $variation='danger'>Delete</Button>
            <Button $variation='secondary'>Undo</Button>
            <Button $variation='primary'>Save</Button>
          </ButtonsContainer>
        </Row>
      </Row>
    </TableRow>
  );
}

export default ParagraphRow;
