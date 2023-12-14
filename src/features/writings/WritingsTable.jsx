import { useQuery } from '@tanstack/react-query';
import { getWritingsList } from '../../services/apiWritingsList';
import Spinner from '../../ui/Spinner';
import styled from 'styled-components';
import WritingsRow from './WritingsRow';

const Table = styled.div`
  border: 1px solid var(--color-grey-200);
  width: 100%;
`;

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
