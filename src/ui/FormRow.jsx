import styled, { css } from 'styled-components';

const variations = {
  buttons: css`
    justify-content: right;
    padding-bottom: 3rem;
  `,
};

const FormRow = styled.div`
  display: flex;

  ${(props) =>
    props.type === 'horizontal' &&
    css`
      flex-direction: row;
      align-items: center;
      padding-bottom: 1rem;
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

export default FormRow;
