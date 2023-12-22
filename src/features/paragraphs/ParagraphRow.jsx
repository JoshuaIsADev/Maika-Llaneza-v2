import { useForm } from 'react-hook-form';
import { updateParagraph } from '../../services/apiParagraphs';
import MutationFunction from '../../hooks/MutationFunction';
import Row from '../../ui/Row';
import Button from '../../ui/Button';
import Input from '../../ui/Input';
import TextArea from '../../ui/TextArea';
import toast from 'react-hot-toast';
import Form from '../../ui/Form';
import Label from '../../ui/Label';
import ButtonsContainer from '../../ui/ButtonsContainer';

function ParagraphRow({ paragraph }) {
  const { id: paragraphId, title, paragraphText } = paragraph;

  const { register, handleSubmit, reset } = useForm();

  const paragraphsQueryKey = ['paragraphs'];

  const updateMutation = MutationFunction(
    ({ ...data }) => updateParagraph({ ...data }),
    // console.log(paragraphId),
    () => {
      toast.success('Paragraph updated');
      // reset();
    },
    paragraphsQueryKey
  );

  function onSubmit(data) {
    updateMutation.mutate({ paragraphId, ...data });
  }

  function onError(errors) {
    console.log(errors);
  }

  // const { isLoading: isDeleting, mutate } = useMutation({
  //   mutationFn: (id) => deleteParagraph(id),
  //   onSuccess: () => {
  //     toast.success('Paragraph deleted');
  //     queryClient.invalidateQueries({
  //       queryKey: ['paragraphs'],
  //     });
  //   },
  //   onError: (err) => toast.error(err.message),
  // });

  return (
    <Form type='vertical' onSubmit={handleSubmit(onSubmit, onError)}>
      <Row role='row' type='horizontal'>
        <Label type='info' htmlFor='paragraphTitle'>
          Paragraph title
        </Label>
        <Input
          defaultValue={title}
          id='paragraphTitle'
          {...register('title', {
            required: 'Please add a title for the paragraph',
          })}
        />
      </Row>

      <Row role='row' type='horizontal'>
        <Label type='info' htmlFor='paragraph'>
          Paragraph
        </Label>
        <TextArea
          rows='12'
          defaultValue={paragraphText}
          id='paragraphText'
          {...register('paragraphText', {
            required: 'Please add the paragraph',
          })}
        />
      </Row>

      <Row role='row' type='horizontal' $variation='buttons'>
        <ButtonsContainer>
          {/* <Button
              onClick={() => mutate(paragraphId)}
              disabled={isDeleting}
              $variation='danger'
              type='button'
            >
              Delete
            </Button> */}
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

export default ParagraphRow;
