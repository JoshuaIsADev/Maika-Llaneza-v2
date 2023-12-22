import styled from 'styled-components';

const FileInput = styled.input.attrs({ type: 'file' })`
  border-radius: 2rem;
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  font-size: 1.4rem;

  &::file-selector-button {
    font-size: 1.4rem;
    padding: 0.5rem 2rem;
    margin-right: 1.2rem;
    border-radius: none;
    border: none;
    color: var(--color-grey-900);
    background-color: var(--color-grey-100);
    cursor: pointer;
    transition: color 0.1s, background-color 0.1s;

    &:hover {
      color: var(--color-grey-0);
      background-color: var(--color-grey-900);
    }
  }
`;

export default FileInput;
