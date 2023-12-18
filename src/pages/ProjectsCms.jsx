import { useState } from 'react';
import ProjectTable from '../features/projects/ProjectTable';
// import Heading from '../ui/Heading';
import Row from '../ui/Row';
import Button from '../ui/Button';
import CreateProjectForm from '../features/projects/CreateProjectForm';

function ProjectsCms() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Row>
        <ProjectTable />
      </Row>
      <Row>
        <Button $variation='add' onClick={() => setShowForm((show) => !show)}>
          Add a project
        </Button>
      </Row>
      <Row>{showForm && <CreateProjectForm />}</Row>
    </>
  );
}

export default ProjectsCms;
