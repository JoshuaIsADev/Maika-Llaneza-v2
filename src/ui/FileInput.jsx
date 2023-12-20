import styled from 'styled-components';

const FileInput = styled.input.attrs({ type: 'file' })`
  border-radius: none;
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);

  &::file-selector-button {
    padding: 0.5rem 1.5rem;
    margin-right: 1.2rem;
    border-radius: none;
    border: none;
    color: var(--color-grey-900);
    background-color: var(--color-grey-0);
    cursor: pointer;
    transition: color 0.1s, background-color 0.1s;

    &:hover {
      color: var(--color-grey-900);
      background-color: var(--color-grey-100);
    }
  }
`;

export default FileInput;
