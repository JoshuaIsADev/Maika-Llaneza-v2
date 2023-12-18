import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { createParagraph } from '../../services/apiParagraphs';
import Button from '../../ui/Button';
import ButtonsContainer from '../../ui/ButtonsContainer';
import Column from '../../ui/Column';
import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import Label from '../../ui/Label';
import Row from '../../ui/Row';
import TextArea from '../../ui/TextArea';
import Error from '../../ui/Error';

function CreateParagraphForm() {
  const { register, handleSubmit, reset, formState } = useForm();

  const { errors } = formState;
  console.log(errors);

  const queryClient = useQueryClient();

  const { mutate, isLoading: isCreating } = useMutation({
    mutationFn: (newParagraph) => createParagraph(newParagraph),
    onSuccess: () => {
      toast.success('New paragraph created');
      queryClient.invalidateQueries({ queryKey: ['paragraphs'] });
      reset();
    },
    onError: (err) => toast.error(err.message),
  });

  function onSubmit(data) {
    mutate(data);
  }

  function onError(errors) {
    console.log(errors);
  }

  return (
    <Form type='vertical' onSubmit={handleSubmit(onSubmit, onError)}>
      <Row role='row' type='horizontal'>
        <FormRow role='row' type='horizontal'>
          <Label type='info' htmlFor='title'>
            Paragraph title
          </Label>
          <Column type='input' role='col'>
            <Input id='title' {...register('title')} />
          </Column>
        </FormRow>

        <FormRow role='row' type='horizontal'>
          <Label type='info' htmlFor='paragraph'>
            Paragraph
          </Label>
          <Column type='input' role='col'>
            {errors?.paragraphText?.message && (
              <Error>{errors.paragraphText.message}</Error>
            )}
            <TextArea
              rows='12'
              id='paragrphText'
              {...register('paragraphText', {
                required: 'Please write a paragraph',
              })}
            />
          </Column>
        </FormRow>

        <FormRow role='row' type='horizontal' $variation='buttons'>
          <ButtonsContainer>
            <Button type='reset' $variation='secondary'>
              Cancel
            </Button>
            <Button type='submit' $variation='primary' disabled={isCreating}>
              Create
            </Button>
          </ButtonsContainer>
        </FormRow>
      </Row>
    </Form>
  );
}

export default CreateParagraphForm;
