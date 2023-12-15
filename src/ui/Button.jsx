import styled, { css } from 'styled-components';

const variations = {
  primary: css`
    color: var(--color-grey-0);
    border: 1px solid var(--color-grey-900);
    background-color: var(--color-grey-900);

    &:hover {
      color: var(--color-grey-900);
      border: 1px solid var(--color-grey-100);
      background-color: var(--color-grey-100);
    }
  `,

  secondary: css`
    color: var(--color-grey-900);
    border: 1px solid var(--color-grey-200);
    background-color: var(--color-grey-0);

    &:hover {
      color: var(--color-grey-0);
      background-color: var(--color-grey-900);
    }
  `,
};

const Button = styled.button`
  font-size: 1.4rem;
  font-weight: 400;
  border-radius: none;
  width: fit-content;
  height: fit-content;
  padding: 0.5rem 1.5rem;
  ${(props) => variations[props.variation]}
`;

export default Button;
