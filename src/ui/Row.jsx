import styled, { css } from 'styled-components';

const variations = {
  hero: css`
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
  `,

  buttons: css`
    justify-content: right;
    padding: 1rem 0 8rem;
  `,

  profileImage: css`
    /* padding: 2rem 0; */
    border-radius: 16px;
    width: 600px;
    height: 500px;
    margin: 3rem auto;
  `,

  project: css`
    flex-direction: column;
    /* padding: 2rem 0; */
    margin: 0rem auto;
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
