import { useQuery } from '@tanstack/react-query';
import Row from '../ui/Row';
import Spinner from '../ui/Spinner';
import Img from '../ui/Img';
import { getHeadline } from '../services/apiHeadline';
import { getProfileImage } from '../services/apiProfileImage';
import { getParagraphs } from '../services/apiParagraphs';
import { getProjects } from '../services/apiProjects';
import ShowProjectRow from '../features/projects/ShowProjectRow';
import { getContactHeadline } from '../services/apiContactHeadline';
import { getContacts } from '../services/apiContacts';
import { StyledNav } from '../ui/StyledNav';
import styled from 'styled-components';

const StyledHome = styled.div`
  display: grid;
  grid-template-columns: var(--grid-column);
`;

const BgLeft = styled.div`
  grid-column: 1 / span 1;
  grid-row: 1 / span 6;
  height: 100%;
  width: 20vw;
  position: fixed;
  overflow-y: hidden;

  @media (max-width: 700px) {
    width: 10vw;
  }
`;

const BgRight = styled.div`
  grid-column: 3 / span 1;
  grid-row: 1 / span 6;
  right: 0;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: top;
  width: 30vw;
  position: fixed;
  overflow-y: hidden;
  @media (max-width: 700px) {
    width: 30vw;
  }
`;

const ImageContainer = styled.div`
  top: 2rem;
  width: 20rem;
  @media (max-width: 700px) {
    width: 100%;
  }
`;

const UlContact = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  align-items: center;
  height: 5rem;
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    padding-top: 0.5rem;
  }
`;

function splitParagraph(text) {
  const seperator = '\n';
  return text ? text.split(seperator) : [];
}

function Home() {
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
    isLoadingProfileImage ||
    isLoadingHeadline ||
    isLoadingParagraphs ||
    isLoadingProjects ||
    isLoadingContactHeadline ||
    isLoadingContacts
  )
    return <Spinner />;

  return (
    <StyledHome>
      <section id='hero' aria-labelledby='hero-heading'>
        <h2 id='hero-heading' className='font-l font-special'>
          {headlineText}
        </h2>
        <ImageContainer>
          <Img src={image} $variation='profile' alt='profile' />
        </ImageContainer>
      </section>

      <section id='about' aria-labelledby='about-heading'>
        <h2 id='about-heading' className='font-m font-special'>
          {paragraphOneTitle}
        </h2>
        {paragraphOneSplitText.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </section>

      <section id='writer' aria-labelledby='writer-heading'>
        <h2 id='writer-heading' className='font-m font-special'>
          {paragraphTwoTitle}
        </h2>
        {paragraphTwoSplitText.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </section>

      <section id='projects' aria-labelledby='projects-heading'>
        <h2 id='projects-heading' className='font-m font-special'>
          Writings
        </h2>
        {projectDetails.map((project) => (
          <ShowProjectRow project={project} key={project.projectId} />
        ))}
      </section>

      <section id='contact' aria-labelledby='contact-heading'>
        <h2 id='contact-heading' className='font-l font-special'>
          {contactHeadlineText}
        </h2>
        <UlContact>
          {contactDetails.map((contact) => (
            <li key={contact.contactId}>
              <a
                href={contact.url}
                className='font-xs font-special font-special-link'
              >
                {contact.name}
              </a>
            </li>
          ))}
        </UlContact>
        <StyledNav></StyledNav>
      </section>
      <BgLeft>
        <Img src='/background2.png' $variation='bgLeft' alt='background art1' />
      </BgLeft>
      <BgRight>
        <Img
          src='/background3.png'
          $variation='bgRight'
          alt='background art2'
        />
      </BgRight>
    </StyledHome>
  );
}

export default Home;
