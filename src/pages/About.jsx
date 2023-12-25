import { useQuery } from '@tanstack/react-query';
import Row from '../ui/Row';
import Heading from '../ui/Heading';
import Spinner from '../ui/Spinner';
import Container from '../ui/Container';
import Img from '../ui/Img';
import { getHeadline } from '../services/apiHeadline';
import { getProfileImage } from '../services/apiProfileImage';
import { getParagraphs } from '../services/apiParagraphs';
import { getProjects } from '../services/apiProjects';
import ShowProjectRow from '../features/projects/ShowProjectRow';
import { getContactHeadline } from '../services/apiContactHeadline';
import { getContacts } from '../services/apiContacts';
import { StyledNav } from '../ui/StyledNav';
import ShowContactRow from '../features/contacts/ShowContactRow';

function splitParagraph(text) {
  const seperator = '\n';
  return text ? text.split(seperator) : [];
}

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

  const {
    isLoading: isLoadingProjects,
    data: projects,
    // error,
  } = useQuery({
    queryKey: ['projects'],
    queryFn: getProjects,
  });

  const {
    isLoading: isLoadingContactHeadline,
    data: contactHeadline,
    // error,
  } = useQuery({
    queryKey: ['contactHeadline'],
    queryFn: getContactHeadline,
  });

  const {
    isLoading: isLoadingContacts,
    data: contacts,
    // error,
  } = useQuery({
    queryKey: ['contacts'],
    queryFn: getContacts,
  });

  const { headlineText, subHeadline } =
    headline && headline.length > 0 ? headline[0] : {};

  const image =
    profileImage && profileImage.length > 0 ? profileImage[0].image : {};

  const { title: paragraphOneTitle, paragraphText: paragraphOneText } =
    paragraphs && paragraphs.length > 0 ? paragraphs[0] : {};

  const { title: paragraphTwoTitle, paragraphText: paragraphTwoText } =
    paragraphs && paragraphs.length > 0 ? paragraphs[1] : {};

  const paragraphOneSplitText = splitParagraph(paragraphOneText);
  const paragraphTwoSplitText = splitParagraph(paragraphTwoText);

  const projectDetails = Array.isArray(projects)
    ? projects.map(({ id: projectId, title, publisher, date, url }) => ({
        projectId,
        title,
        publisher,
        date,
        url,
      }))
    : [];

  const contactHeadlineText =
    contactHeadline && contactHeadline.length > 0
      ? contactHeadline[0].headline
      : {};

  const contactDetails = Array.isArray(contacts)
    ? contacts.map(({ id: contactId, name, url }) => ({
        contactId,
        name,
        url,
      }))
    : [];

  if (
    isLoadingHeadline ||
    isLoadingProfileImage ||
    isLoadingParagraphs ||
    isLoadingProjects ||
    isLoadingContactHeadline ||
    isLoadingContacts
  )
    return <Spinner />;

  return (
    <>
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

        <Row type='horizontal' $variation='center'>
          <Heading as='h3'>{paragraphOneTitle}</Heading>
        </Row>

        <Row type='horizontal' $variation='center'>
          {paragraphOneSplitText.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </Row>
      </Container>

      <Container $variation='default' id='writer'>
        <Row type='horizontal' $variation='center'>
          <Heading as='h3'>{paragraphTwoTitle}</Heading>
        </Row>

        <Row type='horizontal' $variation='center'>
          {paragraphTwoSplitText.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </Row>
      </Container>

      <Container $variation='project'>
        <Row type='horizontal' $variation='center'>
          <Heading as='h3' $variation='padding'>
            Writings
          </Heading>
          <hr />
        </Row>

        <Row type='horizontal' $variation='center'>
          {projectDetails.map((project) => (
            <ShowProjectRow project={project} key={project.projectId} />
          ))}
        </Row>
      </Container>

      <Container $variation='contact' id='contact'>
        <Row type='horizontal' $variation='center'>
          <Heading as='h1'>{contactHeadlineText}</Heading>
        </Row>
        <Row type='horizontal' $variation='center'>
          <nav>
            <StyledNav>
              {contactDetails.map((contact) => (
                <ShowContactRow contact={contact} key={contact.contactId} />
              ))}
            </StyledNav>
          </nav>
        </Row>
      </Container>
    </>
  );
}

export default About;
