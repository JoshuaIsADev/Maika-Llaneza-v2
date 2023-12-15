import styled, { css } from 'styled-components';

const Column = styled.div`
  display: flex;

  ${(props) =>
    props.type === 'info' &&
    css`
      display: flex;
      width: 20%;
      min-width: 150px;
    `}

  ${(props) =>
    props.type === 'input' &&
    css`
      display: flex;
      width: 80%;
      text-align: left;
    `}
`;

export default Column;
