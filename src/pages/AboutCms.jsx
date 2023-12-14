import { useEffect } from 'react';
import { getAbout } from '../services/apiAbout';
import Heading from '../ui/Heading';
import Row from '../ui/Row';

function AboutCms() {
  useEffect(function () {
    getAbout().then((data) => console.log(data), []);
  });

  return (
    <Row type='horizontal'>
      <img src='https://icechurbagglqkkmhoss.supabase.co/storage/v1/object/public/about/maika_llaneza.jpg'></img>
      <Heading as='h1'>About CMS</Heading>
      <p>Test</p>
    </Row>
  );
}

export default AboutCms;
