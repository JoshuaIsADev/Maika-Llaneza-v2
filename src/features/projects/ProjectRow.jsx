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
import MutationFunction from '../../hooks/MutationFunction';

function ProjectRow({ project }) {
  const { id: projectId, title, publisher, date, url } = project;

  const { register, handleSubmit, reset } = useForm();

  const projectsQueryKey = ['projects'];

  const deleteMutation = MutationFunction(
    (id) => deleteProject(id),
    () => {
      toast.success('Project deleted');
      // reset();
    },
    projectsQueryKey
  );

  const updateMutation = MutationFunction(
    ({ ...data }) => updateProject({ ...data }),
    () => {
      toast.success('Project updated');
      // reset();
    },
    projectsQueryKey
  );

  function onDelete(data) {
    deleteMutation.mutate(projectId);
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
        <Label type='info' htmlFor='title'>
          Project title
        </Label>
        <Input
          defaultValue={title}
          id='title'
          {...register('title', {
            required: 'Please enter a title',
          })}
        />
      </Row>

      <Row role='row' type='horizontal'>
        <Label type='info' htmlFor='title'>
          Publisher
        </Label>
        <Input
          defaultValue={publisher}
          id='publisher'
          {...register('publisher', {
            required: 'Please enter a publisher',
          })}
        />
      </Row>

      <Row role='row' type='horizontal'>
        <Label type='info' htmlFor='date'>
          Published date
        </Label>
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
      </Row>

      <Row role='row' type='horizontal'>
        <Label type='info' htmlFor='url'>
          URL
        </Label>
        <Input
          defaultValue={url}
          id='url'
          disabled={updateMutation.isLoading}
          {...register('url')}
        />
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
