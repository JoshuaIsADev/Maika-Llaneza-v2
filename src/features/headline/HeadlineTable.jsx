import { useQuery } from '@tanstack/react-query';
import { getHeadline } from '../../services/apiHeadline';
import Table from '../../ui/Table';
import Spinner from '../../ui/Spinner';
import HeadlineRow from '../headline/HeadlineRow';

function HeadlineTable() {
  const {
    isLoading,
    data: headline,
    // error,
  } = useQuery({
    queryKey: ['headline'],
    queryFn: getHeadline,
  });

  if (isLoading) return <Spinner />;

  return (
    <Table role=''>
      {headline.map((headline) => (
        <HeadlineRow headline={headline} key={headline.id} />
      ))}
    </Table>
  );
}

export default HeadlineTable;
