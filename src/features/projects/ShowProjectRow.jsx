import styled from 'styled-components';
import Row from '../../ui/Row';

const ProjectTitle = styled.a`
  font-family: 'Noto Serif Display', serif;
  font-size: 4rem;
  font-weight: 300;
  line-height: 4rem;
  text-transform: uppercase;
  cursor: pointer;
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    color: var(--color-grey-900);
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-300);
  }
`;

const ProjectInfo = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  letter-spacing: 0.3rem;

  color: var(--color-grey-300);
`;

function ShowProjectRow({ project }) {
  const { title, publisher, date, url } = project;

  return (
    <>
      <Row type='horizontal' $variation='project'>
        <ProjectInfo>{publisher}</ProjectInfo>
        <ProjectTitle href={url}>{title}</ProjectTitle>
        <ProjectInfo>{date}</ProjectInfo>
      </Row>
      <hr />
    </>
  );
}

export default ShowProjectRow;
