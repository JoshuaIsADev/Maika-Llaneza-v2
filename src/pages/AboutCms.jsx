import ParagraphTable from '../features/paragraphs/ParagraphTable';
import HeadlineTable from '../features/headline/HeadlineTable';
// import Heading from '../ui/Heading';
import Row from '../ui/Row';

function AboutCms() {
  return (
    <>
      <Row>
        <HeadlineTable />
      </Row>
      <Row>
        <ParagraphTable />
      </Row>
    </>
  );
}

export default AboutCms;
