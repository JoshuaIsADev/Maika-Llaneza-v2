import styled, { css } from 'styled-components';

const align = {
  top: css`
    align-items: flex-start;
  `,
  bottom: css`
    align-items: flex-end;
  `,
  center: css`
    align-items: center;
  `,
};

const justify = {
  left: css`
    justify-content: left;
  `,
  right: css`
    justify-content: right;
  `,
  center: css`
    justify-content: center;
  `,
  between: css`
    justify-content: space-between;
  `,
};

const Row = styled.div`
  display: flex;

  ${(props) =>
    props.type === 'horizontal' &&
    css`
      flex-direction: row;
      ${(props) => align[props.align]}
      ${(props) => justify[props.justify]}
      flex-wrap: wrap;
      width: 100%;
    `}

  ${(props) =>
    props.type === 'vertical' &&
    css`
      flex-direction: column;
      /* align-items: left; */
    `}
`;

export default Row;
