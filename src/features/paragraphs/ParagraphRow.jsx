import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteParagraph } from '../../services/apiParagraphs';
import Row from '../../ui/Row';
import Button from '../../ui/Button';
import Column from '../../ui/Column';
import Input from '../../ui/Input';
import TextArea from '../../ui/TextArea';
import toast from 'react-hot-toast';
import FormRow from '../../ui/FormRow';
import Form from '../../ui/Form';
import Label from '../../ui/Label';
import ButtonsContainer from '../../ui/ButtonsContainer';

function ParagraphRow({ paragraph }) {
  const { id: paragraphId, title, paragraphText } = paragraph;

  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate } = useMutation({
    mutationFn: (id) => deleteParagraph(id),
    onSuccess: () => {
      toast.success('Paragraph deleted');
      queryClient.invalidateQueries({
        queryKey: ['paragraphs'],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return (
    <Form type='vertical'>
      <Row role='row' type='horizontal'>
        <FormRow role='row' type='horizontal'>
          <Label type='info' htmlFor='paragraphTitle'>
            Paragraph title
          </Label>
          <Column type='input' role='col'>
            <Input defaultValue={title} id='paragraphTitle' />
          </Column>
        </FormRow>

        <FormRow role='row' type='horizontal'>
          <Label type='info' htmlFor='paragraph'>
            Paragraph
          </Label>
          <Column type='input' role='col'>
            <TextArea rows='12' defaultValue={paragraphText} id='paragrph' />
          </Column>
        </FormRow>

        <FormRow role='row' type='horizontal' $variation='buttons'>
          <ButtonsContainer>
            <Button
              onClick={() => mutate(paragraphId)}
              disabled={isDeleting}
              $variation='danger'
            >
              Delete
            </Button>
            <Button $variation='secondary'>Undo</Button>
            <Button $variation='primary'>Save</Button>
          </ButtonsContainer>
        </FormRow>
      </Row>
    </Form>
  );
}

export default ParagraphRow;
