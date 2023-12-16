import { useQuery } from '@tanstack/react-query';
import { getWritingsList } from '../../services/apiWritingsList';
import Spinner from '../../ui/Spinner';
import WritingsRow from './WritingsRows';
import Table from '../../ui/Table';

function WritingsTable() {
  const {
    isLoading,
    data: writings,
    // error,
  } = useQuery({
    queryKey: ['writings'],
    queryFn: getWritingsList,
  });

  if (isLoading) return <Spinner />;

  return (
    <Table role='table'>
      {writings.map((writing) => (
        <WritingsRow writing={writing} key={writing.id} />
      ))}
    </Table>
  );
}

export default WritingsTable;
