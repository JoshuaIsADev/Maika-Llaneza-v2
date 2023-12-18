import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { createParagraph } from '../../services/apiParagraphs';
import Button from '../../ui/Button';
import ButtonsContainer from '../../ui/ButtonsContainer';
import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import Row from '../../ui/Row';
import TextArea from '../../ui/TextArea';

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
        <FormRow label='Paragraph title'>
          <Input id='title' disabled={isCreating} {...register('title')} />
        </FormRow>

        <FormRow label='Paragraph' error={errors?.paragraphText?.message}>
          <TextArea
            rows='12'
            id='paragrphText'
            disabled={isCreating}
            {...register('paragraphText', {
              required: 'Please write a paragraph',
            })}
          />
        </FormRow>

        <Row role='row' type='horizontal' $variation='buttons'>
          <ButtonsContainer>
            <Button type='reset' $variation='secondary' disabled={isCreating}>
              Cancel
            </Button>
            <Button type='submit' $variation='primary' disabled={isCreating}>
              Create
            </Button>
          </ButtonsContainer>
        </Row>
      </Row>
    </Form>
  );
}

export default CreateParagraphForm;
