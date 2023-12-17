import { useQuery } from '@tanstack/react-query';
import { getParagraphs } from '../../services/apiParagraphs';
import Spinner from '../../ui/Spinner';
import ParagraphRow from '../paragraphs/ParagraphRow';
import Table from '../../ui/Table';

function ParagraphTable() {
  const {
    isLoading,
    data: paragraphs,
    // error,
  } = useQuery({
    queryKey: ['paragraphs'],
    queryFn: getParagraphs,
  });

  if (isLoading) return <Spinner />;

  return (
    <Table role='table'>
      {paragraphs.map((paragraph) => (
        <ParagraphRow paragraph={paragraph} key={paragraph.id} />
      ))}
    </Table>
  );
}

export default ParagraphTable;
