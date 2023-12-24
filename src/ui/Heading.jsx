import styled, { css } from 'styled-components';

const variations = {
  center: css`
    text-align: center;
    padding-bottom: 6rem;
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
      ${(props) => variations[props.$variation]}
    `}

  ${(props) =>
    props.as === 'h2' &&
    css`
      font-size: 3.6rem;
      font-weight: 200;
      line-height: 3rem;
      text-transform: uppercase;
      color: rgba(0, 0, 0, 1);
      ${(props) => variations[props.$variation]}
    `}

  ${(props) =>
    props.as === 'h3' &&
    css`
      font-size: 1.6rem;
      font-weight: 600;
      line-height: 2rem;
      color: rgba(0, 0, 0, 1);
      ${(props) => variations[props.$variation]}
    `}
`;

export default Heading;
