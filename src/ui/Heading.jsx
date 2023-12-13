import styled, { css } from 'styled-components';

const Heading = styled.h1`
  ${(props) =>
    props.as === 'h1' &&
    css`
      font-size: 3rem;
      font-weight: 600;
      line-height: 3rem;
      color: rgba(0, 0, 0, 1);
    `}

  ${(props) =>
    props.as === 'h2' &&
    css`
      font-size: 2rem;
      font-weight: 600;
      line-height: 2rem;
      color: rgba(0, 0, 0, 1);
    `}
`;

export default Heading;
