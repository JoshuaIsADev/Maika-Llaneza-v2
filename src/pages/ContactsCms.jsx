import { useState } from 'react';
import ContactHeadlineTable from '../features/contacts/ContactHeadlineTable';
import ContactTable from '../features/contacts/ContactTable';
import Button from '../ui/Button';
// import Heading from '../ui/Heading';
import Row from '../ui/Row';
import CreateContactForm from '../features/contacts/CreateContactForm';

function ContactsCms() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Row>
        <ContactHeadlineTable />
      </Row>
      <Row>
        <ContactTable />
      </Row>
      <Row>
        <Button $variation='add' onClick={() => setShowForm((show) => !show)}>
          Add a new contact
        </Button>
      </Row>
      <Row>{showForm && <CreateContactForm />}</Row>
    </>
  );
}

export default ContactsCms;
