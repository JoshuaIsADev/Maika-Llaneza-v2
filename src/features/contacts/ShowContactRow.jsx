import { StyledNormLink } from '../../ui/StyledNav';

function ShowContactRow({ contact }) {
  const { name, url } = contact;

  return (
    <>
      <li>
        <StyledNormLink href={url}>{name}</StyledNormLink>
      </li>
    </>
  );
}

export default ShowContactRow;
