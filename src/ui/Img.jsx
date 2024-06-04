import styled, { css } from 'styled-components';

const variations = {
  bgLeft: css`
    object-fit: cover;
    border-radius: none;
    object-position: bottom right;
    width: 100%;
    height: 100%;
  `,
  bgRight: css`
    object-fit: cover;
    border-radius: none;
    object-position: bottom left;
    width: 100%;
    height: 100%;
  `,

  profile: css`
    aspect-ratio: 1;
    border-radius: 50%;
    object-position: center;
  `,
};

const Img = styled.img`
  object-fit: cover;
  width: 100%;
  ${(props) => variations[props.$variation]}
`;

export default Img;
