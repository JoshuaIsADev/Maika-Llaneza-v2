import styled, { css } from 'styled-components';

const ProjectTitle = styled.a`
  font-size: 4rem;
  font-weight: 300;
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
  font-size: 1.4rem;
  font-weight: 300;
  color: var(--color-grey-600);
`;

export { ProjectTitle, ProjectInfo };
