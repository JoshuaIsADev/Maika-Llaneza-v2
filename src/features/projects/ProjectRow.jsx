import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteProject } from '../../services/apiProjects';
import Row from '../../ui/Row';
import Button from '../../ui/Button';
import Column from '../../ui/Column';
import Input from '../../ui/Input';
import toast from 'react-hot-toast';
import Form from '../../ui/Form';
import ButtonsContainer from '../../ui/ButtonsContainer';
import Label from '../../ui/Label';

function ProjectRow({ project }) {
  const { id: projectId, title, publisher, date, url } = project;

  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate } = useMutation({
    mutationFn: (id) => deleteProject(id),
    onSuccess: () => {
      toast.success('Project deleted');
      queryClient.invalidateQueries({
        queryKey: ['projects'],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return (
    <Form role='vertical'>
      <Row role='row' type='horizontal'>
        <Row role='row' type='horizontal'>
          <Label type='info' htmlFor='title'>
            Project title
          </Label>
          <Column type='input' role='col'>
            <Input defaultValue={title} id='title' />
          </Column>
        </Row>

        <Row role='row' type='horizontal'>
          <Label type='info' htmlFor='title'>
            Publisher
          </Label>
          <Column type='input' role='col'>
            <Input defaultValue={publisher} id='publisher' />
          </Column>
        </Row>

        <Row role='row' type='horizontal'>
          <Label type='info' htmlFor='date'>
            Published date
          </Label>
          <Column type='input' role='col'>
            <Input defaultValue={date} id='date' />
          </Column>
        </Row>

        <Row role='row' type='horizontal'>
          <Label type='info' htmlFor='url'>
            URL
          </Label>
          <Column type='input' role='col'>
            <Input defaultValue={url} id='url' />
          </Column>
        </Row>
      </Row>

      <Row role='row' type='horizontal' $variation='buttons'>
        <ButtonsContainer>
          <Button
            onClick={() => mutate(projectId)}
            disabled={isDeleting}
            $variation='danger'
            type='button'
          >
            Delete
          </Button>
          <Button $variation='secondary' type='reset'>
            Undo
          </Button>
          <Button $variation='primary'>Save</Button>
        </ButtonsContainer>
      </Row>
    </Form>
  );
}

export default ProjectRow;
