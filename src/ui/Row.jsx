import styled, { css } from 'styled-components';

const variations = {
  buttons: css`
    justify-content: right;
    padding-bottom: 6rem;
  `,

  image: css`
    padding-top: 1rem;
    padding-bottom: 2rem;
  `,
};

const Row = styled.div`
  display: flex;

  ${(props) =>
    props.type === 'horizontal' &&
    css`
      flex-direction: row;
      align-items: center;
      flex-wrap: wrap;
      width: 100%;
      ${(props) => variations[props.$variation]}
    `}

  ${(props) =>
    props.type === 'vertical' &&
    css`
      flex-direction: column;
      ${(props) => variations[props.$variation]}
    `}
`;

export default Row;
