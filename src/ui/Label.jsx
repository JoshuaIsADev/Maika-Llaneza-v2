import styled, { css } from 'styled-components';

const Label = styled.div`
  display: flex;
  margin-bottom: 0.5rem;

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
      width: 80%;
      text-align: left;
      font-size: 1.4rem;
      color: var(--color-grey-900);
    `}
`;

export default Label;
