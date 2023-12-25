import styled from 'styled-components';

const TextArea = styled.textarea`
  border: none;
  border-bottom: 1px solid var(--color-grey-100);
  background-color: var(--color-background);
  border-radius: none;
  padding: 1rem 1.5rem;
  margin-bottom: 2rem;
  width: 100%;
  resize: none;
  height: 40rem;
`;

export default TextArea;
