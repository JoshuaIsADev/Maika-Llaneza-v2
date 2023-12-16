import ContactHeadlineTable from '../features/contact/ContactHeadlineTable';
import ContactTable from '../features/contact/ContactTable';
// import Heading from '../ui/Heading';
import Row from '../ui/Row';

function ContactCms() {
  return (
    <>
      <Row>
        <ContactHeadlineTable />
      </Row>
      <Row>
        <ContactTable />
      </Row>
    </>
  );
}

export default ContactCms;
