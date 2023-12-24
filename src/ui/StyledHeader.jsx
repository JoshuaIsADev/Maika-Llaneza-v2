import styled, { css } from 'styled-components';

const variations = {
  default: css`
    gap: 1rem;
  `,
};

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  overflow: hidden;
  position: fixed;
  top: 0;
  margin: 0 auto;
  width: 100%;
  background-color: var(--background-color);
  ${(props) => variations[props.$variation]};
`;

export default StyledHeader;
