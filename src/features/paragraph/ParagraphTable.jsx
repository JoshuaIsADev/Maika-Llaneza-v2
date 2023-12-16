import { useQuery } from '@tanstack/react-query';
import { getParagraph } from '../../services/apiParagraph';
import Spinner from '../../ui/Spinner';
import ParagraphRow from '../paragraph/ParagraphRow';
import Table from '../../ui/Table';

function ParagraphTable() {
  const {
    isLoading,
    data: paragraph,
    // error,
  } = useQuery({
    queryKey: ['paragraph'],
    queryFn: getParagraph,
  });

  if (isLoading) return <Spinner />;

  return (
    <Table role='table'>
      {paragraph.map((paragraph) => (
        <ParagraphRow paragraph={paragraph} key={paragraph.id} />
      ))}
    </Table>
  );
}

export default ParagraphTable;
