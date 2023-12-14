import WritingsTable from '../features/writings/WritingsTable';
import Heading from '../ui/Heading';
import Row from '../ui/Row';

function WritingsCms() {
  return (
    <>
      <Row type='horizontal'>
        <Heading as='h1'>Writings</Heading>
      </Row>
      <Row>
        <WritingsTable />
      </Row>
    </>
  );
}

export default WritingsCms;
