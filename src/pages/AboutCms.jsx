// import { useEffect } from 'react';
// import { getParagraph } from '../services/apiParagraph';
// import Heading from '../ui/Heading';
// import Row from '../ui/Row';

// function AboutCms() {
//   useEffect(function () {
//     getParagraph().then((data) => console.log(data), []);
//   });

//   return (
//     <Row type='horizontal'>
//       <img src='https://icechurbagglqkkmhoss.supabase.co/storage/v1/object/public/about/maika_llaneza.jpg'></img>
//       <Heading as='h1'>About CMS</Heading>
//       <p>Test</p>
//     </Row>
//   );
// }

// export default AboutCms;

import ParagraphTable from '../features/paragraph/ParagraphTable';
import HeadlineTable from '../features/headline/HeadlineTable';
// import Heading from '../ui/Heading';
import Row from '../ui/Row';

function AboutCms() {
  return (
    <>
      <Row>
        <HeadlineTable />
      </Row>
      <Row>
        <ParagraphTable />
      </Row>
    </>
  );
}

export default AboutCms;
