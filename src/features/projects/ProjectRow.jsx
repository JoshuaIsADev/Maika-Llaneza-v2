import { useForm } from 'react-hook-form';
import { deleteProject, updateProject } from '../../services/apiProjects';
import Row from '../../ui/Row';
import Button from '../../ui/Button';
import Column from '../../ui/Column';
import Input from '../../ui/Input';
import toast from 'react-hot-toast';
import Form from '../../ui/Form';
import ButtonsContainer from '../../ui/ButtonsContainer';
import Label from '../../ui/Label';
import MutationFunction from '../../services/MutationFunction';

function ProjectRow({ project }) {
  const { id: projectId, title, publisher, date, url } = project;

  const { register, handleSubmit, reset } = useForm();

  const projectsQueryKey = ['projects'];

  const deleteMutation = MutationFunction(
    (id) => deleteProject(id),
    () => {
      toast.success('Project deleted');
      reset();
    },
    projectsQueryKey
  );

  const updateMutation = MutationFunction(
    ({ ...data }) => updateProject({ ...data }),
    // console.log(contactId),
    () => {
      toast.success('Project updated');
      reset();
    },
    projectsQueryKey
  );

  function onDelete(data) {
    deleteMutation.mutate({ projectId, ...data });
  }

  function onSubmit(data) {
    updateMutation.mutate({ projectId, ...data });
  }

  function onError(errors) {
    console.log(errors);
  }

  return (
    <Form role='vertical' onSubmit={handleSubmit(onSubmit, onError)}>
      <Row role='row' type='horizontal'>
        <Row role='row' type='horizontal'>
          <Label type='info' htmlFor='title'>
            Project title
          </Label>
          <Column type='input' role='col'>
            <Input
              defaultValue={title}
              id='title'
              {...register('title', {
                required: 'Please enter a title',
              })}
            />
          </Column>
        </Row>

        <Row role='row' type='horizontal'>
          <Label type='info' htmlFor='title'>
            Publisher
          </Label>
          <Column type='input' role='col'>
            <Input
              defaultValue={publisher}
              id='publisher'
              {...register('publisher', {
                required: 'Please enter a publisher',
              })}
            />
          </Column>
        </Row>

        <Row role='row' type='horizontal'>
          <Label type='info' htmlFor='date'>
            Published date
          </Label>
          <Column type='input' role='col'>
            <Input
              defaultValue={date}
              type='date'
              id='date'
              disabled={updateMutation.isLoading}
              {...register('date', {
                required:
                  'Please add the date this project was published or finished',
              })}
            />
          </Column>
        </Row>

        <Row role='row' type='horizontal'>
          <Label type='info' htmlFor='url'>
            URL
          </Label>
          <Column type='input' role='col'>
            <Input
              defaultValue={url}
              id='url'
              disabled={updateMutation.isLoading}
              {...register('url')}
            />
          </Column>
        </Row>
      </Row>

      <Row role='row' type='horizontal' $variation='buttons'>
        <ButtonsContainer>
          <Button
            onClick={onDelete}
            disabled={deleteMutation.isLoading}
            $variation='danger'
            type='button'
          >
            Delete
          </Button>
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

export default ProjectRow;
