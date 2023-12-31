import { useQuery } from '@tanstack/react-query';
import { getContacts } from '../../services/apiContacts';
import Spinner from '../../ui/Spinner';
import Table from '../../ui/Table';
import ContactRow from './ContactRow';

function ContactTable() {
  const {
    isLoading,
    data: contacts,
    // error,
  } = useQuery({
    queryKey: ['contacts'],
    queryFn: getContacts,
  });

  if (isLoading) return <Spinner />;

  return (
    <Table role='table'>
      {contacts.map((contact) => (
        <ContactRow contact={contact} key={contact.id} />
      ))}
    </Table>
  );
}
export default ContactTable;
