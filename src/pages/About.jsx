import Row from '../ui/Row';
import Heading from '../ui/Heading';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../ui/Spinner';
import { getParagraphs } from '../services/apiParagraphs';
import { getHeadline } from '../services/apiHeadline';
import Container from '../ui/Container';
import Img from '../ui/Img';
import { getProfileImage } from '../services/apiProfileImage';

function About() {
  const {
    isLoading: isLoadingHeadline,
    data: headline,
    // error,
  } = useQuery({
    queryKey: ['headline'],
    queryFn: getHeadline,
  });

  const {
    isLoading: isLoadingProfileImage,
    data: profileImage,
    // error,
  } = useQuery({
    queryKey: ['profileImage'],
    queryFn: getProfileImage,
  });

  const {
    isLoading: isLoadingParagraphs,
    data: paragraphs,
    // error,
  } = useQuery({
    queryKey: ['paragraphs'],
    queryFn: getParagraphs,
  });

  const { headlineText, subHeadline } =
    headline && headline.length > 0 ? headline[0] : {};

  const image =
    profileImage && profileImage.length > 0 ? profileImage[0].image : {};

  if (isLoadingParagraphs || isLoadingHeadline) return <Spinner />;

  return (
    <Container $variation='default' id='about'>
      <Row type='horizontal' $variation='center'>
        <Heading as='h2'>{subHeadline}</Heading>
      </Row>

      <Row type='horizontal' $variation='profileImage'>
        <Img src={image}></Img>
      </Row>

      <Row type='horizontal' $variation='center'>
        <Heading as='h1'>{headlineText}</Heading>
      </Row>
      <Row>
        <hr />
      </Row>
    </Container>
  );
}

export default About;
