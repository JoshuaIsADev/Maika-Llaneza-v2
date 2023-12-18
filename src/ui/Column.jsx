import styled, { css } from 'styled-components';

const Column = styled.div`
  display: flex;

  ${(props) =>
    props.type === 'info' &&
    css`
      display: flex;
      width: 20%;
      min-width: 150px;
      font-size: 1.4rem;
      color: var(--color-grey-300);
    `}

  ${(props) =>
    props.type === 'input' &&
    css`
      display: flex;
      flex-wrap: wrap;
      width: 80%;
      text-align: left;
      font-size: 1.4rem;
      color: var(--color-grey-900);
    `}
`;

export default Column;
