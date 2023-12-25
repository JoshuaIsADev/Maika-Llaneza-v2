import styled, { css } from 'styled-components';

const variations = {
  default: css`
    flex-direction: column;
    gap: 2rem;
    max-width: var(--container-width-small);
  `,

  header: css`
    flex-direction: column;
    gap: 2rem;
    padding: 2rem;
    max-width: var(--container-width-small);
  `,

  project: css`
    flex-direction: column;
    max-width: var(--container-width-large);
    padding: 2rem 0rem;
  `,

  contact: css`
    padding: 8rem 0rem 2rem;
    flex-direction: column;
  `,

  cms: css`
    flex-direction: row;
    max-width: 600px;
    align-items: center;
    padding: 2rem;
  `,
};

const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 5rem 2rem;
  margin: 0 auto;
  ${(props) => variations[props.$variation]};
`;

export default Container;
