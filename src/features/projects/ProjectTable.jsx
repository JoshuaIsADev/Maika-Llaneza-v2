import { useQuery } from '@tanstack/react-query';
import { getProjects } from '../../services/apiProjects';
import Spinner from '../../ui/Spinner';
import ProjectRow from './ProjectRow';
import Table from '../../ui/Table';

function ProjectTable() {
  const {
    isLoading,
    data: projects,
    // error,
  } = useQuery({
    queryKey: ['projects'],
    queryFn: getProjects,
  });

  if (isLoading) return <Spinner />;

  return (
    <Table role='table'>
      {projects.map((project) => (
        <ProjectRow project={project} key={project.id} />
      ))}
    </Table>
  );
}

export default ProjectTable;
