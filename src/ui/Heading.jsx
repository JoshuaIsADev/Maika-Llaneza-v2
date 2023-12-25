import styled, { css } from 'styled-components';

const variations = {
  padding: css`
    text-align: center;
    padding: 2rem 0;
  `,
};

const Heading = styled.h1`
  ${(props) =>
    props.as === 'h1' &&
    css`
      font-size: 6.4rem;
      font-weight: 300;
      line-height: 6rem;
      text-transform: uppercase;
      color: rgba(0, 0, 0, 1);
      padding-bottom: 6rem;
      ${(props) => variations[props.$variation]}
    `}

  ${(props) =>
    props.as === 'h2' &&
    css`
      font-size: 3.6rem;
      font-weight: 300;
      line-height: 3rem;
      text-transform: uppercase;
      color: rgba(0, 0, 0, 1);
      ${(props) => variations[props.$variation]}
    `}

  ${(props) =>
    props.as === 'h3' &&
    css`
      font-size: 1.6rem;
      font-weight: 200;
      line-height: 2rem;
      letter-spacing: 0.5rem;
      color: rgba(0, 0, 0, 1);
      ${(props) => variations[props.$variation]}
    `}

${(props) =>
    props.as === 'h4' &&
    css`
      font-size: 1.4rem;
      font-weight: 400;
      line-height: 1.6rem;
      color: rgba(0, 0, 0, 1);
      ${(props) => variations[props.$variation]}
    `}
`;

export default Heading;
