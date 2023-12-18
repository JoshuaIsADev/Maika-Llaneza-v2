import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { createProject } from '../../services/apiProjects';
import Button from '../../ui/Button';
import ButtonsContainer from '../../ui/ButtonsContainer';
import Column from '../../ui/Column';
import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import Label from '../../ui/Label';
import Row from '../../ui/Row';
import Error from '../../ui/Error';

function CreateProjectForm() {
  const { register, handleSubmit, reset, formState } = useForm();

  const { errors } = formState;

  const queryClient = useQueryClient();

  const { mutate, isLoading: isCreating } = useMutation({
    mutationFn: (newProject) => createProject(newProject),
    onSuccess: () => {
      toast.success('New project created');
      queryClient.invalidateQueries({
        queryKey: ['projects'],
      });
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
    <Form role='vertical' onSubmit={handleSubmit(onSubmit, onError)}>
      <Row role='row' type='horizontal'>
        <FormRow role='row' type='horizontal'>
          <Label type='info' htmlFor='title'>
            Project title
          </Label>
          <Column type='input' role='col'>
            {errors?.title?.message && <Error>{errors.title.message}</Error>}
            <Input
              id='title'
              {...register('title', {
                required: 'Please enter the name of the project',
              })}
            />
          </Column>
        </FormRow>

        <FormRow role='row' type='horizontal'>
          <Label type='info' htmlFor='title'>
            Publisher
          </Label>
          <Column type='input' role='col'>
            {errors?.publisher?.message && (
              <Error>{errors.publisher.message}</Error>
            )}
            <Input
              id='publisher'
              {...register('publisher', {
                required: 'Please enter the publisher',
              })}
            />
          </Column>
        </FormRow>

        <FormRow role='row' type='horizontal'>
          <Label type='info' htmlFor='date'>
            Published date
          </Label>
          <Column type='input' role='col'>
            {errors?.date?.message && <Error>{errors.date.message}</Error>}
            <Input
              type='date'
              id='date'
              {...register('date', {
                required:
                  'Please add the date this project was published or finished',
              })}
            />
          </Column>
        </FormRow>

        <FormRow role='row' type='horizontal'>
          <Label type='info' htmlFor='url'>
            URL
          </Label>
          <Column type='input' role='col'>
            <Input id='url' {...register('url')} />
          </Column>
        </FormRow>
      </Row>

      <FormRow role='row' type='horizontal' $variation='buttons'>
        <ButtonsContainer>
          <Button $variation='secondary' type='reset'>
            Cancel
          </Button>
          <Button $variation='primary' type='submit' disabled={isCreating}>
            Create
          </Button>
        </ButtonsContainer>
      </FormRow>
    </Form>
  );
}

export default CreateProjectForm;
