import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { HashLink } from 'react-router-hash-link';

const StyledNav = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  gap: 4rem;
`;

const commonStyles = css`
  &:link,
  &:visited {
    display: flex;
    align-items: center;

    font-size: 1.6rem;
    font-weight: 300;
    color: var(--color-grey-900);
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-300);
    /* border-bottom: 2px solid var(--color-grey-100); */
  }
`;

// const CommonStyledLink = styled.div`
//   ${commonStyles}
// `;

const StyledNavLink = styled(NavLink)`
  ${commonStyles}
`;

const StyledHashLink = styled(HashLink)`
  ${commonStyles}
`;

export { StyledNav, StyledNavLink, StyledHashLink };
