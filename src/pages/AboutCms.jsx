import ParagraphTable from '../features/paragraphs/ParagraphTable';
import HeadlineTable from '../features/headline/HeadlineTable';
// import Heading from '../ui/Heading';
import Row from '../ui/Row';
// import { useState } from 'react';
// import CreateParagraphForm from '../features/paragraphs/CreateParagraphForm';
import ProfileImageTable from '../features/profileImage/ProfileImageTable';

function AboutCms() {
  // const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Row>
        <HeadlineTable />
      </Row>
      <Row>
        <ProfileImageTable />
      </Row>
      <Row>
        <ParagraphTable />
      </Row>
      {/* <Row>
        <Button $variation='add' onClick={() => setShowForm((show) => !show)}>
          Add a new paragraph
        </Button>
      </Row>
      <Row>{showForm && <CreateParagraphForm />}</Row> */}
    </>
  );
}

export default AboutCms;
