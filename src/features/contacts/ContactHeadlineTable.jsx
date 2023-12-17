import { useQuery } from '@tanstack/react-query';
import Spinner from '../../ui/Spinner';
import Table from '../../ui/Table';
import { getContactHeadline } from '../../services/apiContactHeadline';
import ContactHeadlineRow from './ContactHeadlineRow';

function ContactHeadlineTable() {
  const {
    isLoading,
    data: contactHeadline,
    // error,
  } = useQuery({
    queryKey: ['contactHeadline'],
    queryFn: getContactHeadline,
  });

  if (isLoading) return <Spinner />;

  return (
    <Table role='table'>
      {contactHeadline.map((contactHeadline) => (
        <ContactHeadlineRow
          contactHeadline={contactHeadline}
          key={contactHeadline.id}
        />
      ))}
    </Table>
  );
}
export default ContactHeadlineTable;
