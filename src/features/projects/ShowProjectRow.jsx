import styled from 'styled-components';
import Row from '../../ui/Row';

const StyledShowProjectRow = styled.div`
  display: flex;
  flex-direction: column;
  /* border-bottom: 1px solid var(--color-grey-100); */
  &:last-child {
    border-bottom: none;
  }
  padding: 0 0 1rem;
`;

function ShowProjectRow({ project }) {
  const { title, publisher, date, url } = project;

  return (
    <StyledShowProjectRow>
      <a href={url} className='font-s font-bold'>
        {title}
      </a>
      <p className='font-xxs'>{date}</p>
      <p className='font-xxs'>{publisher}</p>
    </StyledShowProjectRow>
  );
}

export default ShowProjectRow;
