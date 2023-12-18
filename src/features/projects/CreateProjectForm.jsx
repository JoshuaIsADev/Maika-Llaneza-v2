import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { createProject } from '../../services/apiProjects';
import Button from '../../ui/Button';
import ButtonsContainer from '../../ui/ButtonsContainer';

import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';

import Row from '../../ui/Row';

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
        <FormRow label='Project title' error={errors?.title?.message}>
          <Input
            id='title'
            disabled={isCreating}
            {...register('title', {
              required: 'Please enter the name of the project',
            })}
          />
        </FormRow>

        <FormRow label='Publisher' error={errors?.publisher?.message}>
          <Input
            id='publisher'
            disabled={isCreating}
            {...register('publisher', {
              required: 'Please enter the publisher',
            })}
          />
        </FormRow>

        <FormRow label='Published date' error={errors?.date?.message}>
          <Input
            type='date'
            id='date'
            disabled={isCreating}
            {...register('date', {
              required:
                'Please add the date this project was published or finished',
            })}
          />
        </FormRow>

        <FormRow label='URL'>
          <Input id='url' disabled={isCreating} {...register('url')} />
        </FormRow>
      </Row>

      <Row role='row' type='horizontal' $variation='buttons'>
        <ButtonsContainer>
          <Button $variation='secondary' type='reset' disabled={isCreating}>
            Cancel
          </Button>
          <Button $variation='primary' type='submit' disabled={isCreating}>
            Create
          </Button>
        </ButtonsContainer>
      </Row>
    </Form>
  );
}

export default CreateProjectForm;
