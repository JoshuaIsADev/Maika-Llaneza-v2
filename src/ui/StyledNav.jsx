import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { HashLink } from 'react-router-hash-link';

const variations = {
  cms: css`
    gap: 2rem;

    @media (max-width: 550px) {
      gap: 1rem;
    }
  `,
};

const StyledNav = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  ${(props) => variations[props.$variation]};
`;

const CommonStyles = css`
  &:link,
  &:visited {
    display: flex;
    align-items: center;

    font-size: 1.8rem;
    font-weight: 300;
    color: var(--color-grey-900);
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-300);
  }
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;

    font-size: 1.4rem;
    font-weight: 300;
    color: var(--color-grey-900);
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-300);
  }
`;

const StyledHashLink = styled(HashLink)`
  ${CommonStyles}
`;

const StyledNormLink = styled.a`
  ${CommonStyles}
`;

export { StyledNav, StyledNavLink, StyledHashLink, StyledNormLink };
