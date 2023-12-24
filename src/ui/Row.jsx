import styled, { css } from 'styled-components';

const variations = {
  buttons: css`
    justify-content: right;
    padding-bottom: 6rem;
  `,

  profileImage: css`
    /* padding: 2rem 0; */
    width: 600px;
    height: 500px;
    margin: 3rem auto;
    transform: translateX(-9.5rem);
  `,

  image: css`
    padding-top: 1rem;
    padding-bottom: 2rem;
  `,

  center: css`
    text-align: center;
    justify-content: center;
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
