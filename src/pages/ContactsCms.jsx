import ContactHeadlineTable from '../features/contacts/ContactHeadlineTable';
import ContactTable from '../features/contacts/ContactTable';
// import Heading from '../ui/Heading';
import Row from '../ui/Row';

function ContactsCms() {
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

export default ContactsCms;
