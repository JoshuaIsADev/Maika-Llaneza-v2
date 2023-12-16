import styled from 'styled-components';
import Row from '../../ui/Row';
import Button from '../../ui/Button';
import Column from '../../ui/Column';
import Input from '../../ui/Input';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteProject } from '../../services/apiProjects';

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

function ProjectRow({ project }) {
  const { id: projectId, title, publisher, date, url } = project;

  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate } = useMutation({
    mutationFn: (id) => deleteProject(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['projects'],
      });
    },
  });

  return (
    <TableRow role='vertical'>
      <Row role='row' type='horizontal'>
        <Row role='row' type='horizontal'>
          <Column type='info' role='col'>
            Project title
          </Column>
          <Column type='input' role='col'>
            <Input defaultValue={title} />
          </Column>
        </Row>

        <Row role='row' type='horizontal'>
          <Column type='info' role='col'>
            Publisher
          </Column>
          <Column type='input' role='col'>
            <Input defaultValue={publisher} />
          </Column>
        </Row>

        <Row role='row' type='horizontal'>
          <Column type='info' role='col'>
            Published date
          </Column>
          <Column type='input' role='col'>
            <Input defaultValue={date} />
          </Column>
        </Row>

        <Row role='row' type='horizontal'>
          <Column type='info' role='col'>
            URL
          </Column>
          <Column type='input' role='col'>
            <Input defaultValue={url} />
          </Column>
        </Row>
      </Row>

      <Row role='row' type='horizontal' $variation='buttons'>
        <ButtonsContainer>
          <Button
            onClick={() => mutate(projectId)}
            disabled={isDeleting}
            $variation='danger'
          >
            Delete
          </Button>
          <Button $variation='secondary'>Undo</Button>
          <Button $variation='primary'>Save</Button>
        </ButtonsContainer>
      </Row>
    </TableRow>
  );
}

export default ProjectRow;
