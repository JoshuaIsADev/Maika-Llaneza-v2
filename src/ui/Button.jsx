import styled, { css } from 'styled-components';

const variations = {
  primary: css`
    color: var(--color-grey-0);
    border: 1px solid var(--color-grey-900);
    background-color: var(--color-grey-900);
    width: fit-content;

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
    width: fit-content;

    &:hover {
      color: var(--color-grey-0);
      background-color: var(--color-grey-900);
    }
  `,

  danger: css`
    color: var(--color-grey-900);
    border: 1px solid var(--color-danger);
    background-color: var(--color-danger);
    width: fit-content;

    &:hover {
      color: var(--color-grey-900);
      border: 1px solid var(--color-grey-100);
      background-color: var(--color-grey-100);
    }
  `,

  add: css`
    color: var(--color-grey-0);
    border: 1px solid var(--color-grey-900);
    background-color: var(--color-grey-900);
    width: 100%;
    margin-bottom: 3rem;

    &:hover {
      color: var(--color-grey-900);
      border: 1px solid var(--color-grey-100);
      background-color: var(--color-grey-100);
    }
  `,
};

const Button = styled.button`
  font-size: 1.4rem;
  font-weight: 400;
  border-radius: 0.5rem;
  height: fit-content;
  padding: 0.5rem 2.5rem;
  ${(props) => variations[props.$variation]}
`;

export default Button;
