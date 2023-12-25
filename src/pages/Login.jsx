import styled from 'styled-components';
import LoginForm from '../features/authentication/LoginForm';
import Heading from '../ui/Heading';
import Row from '../ui/Row';

const LoginLayout = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  max-width: var(--container-width-small);
  padding: 2rem;
`;

function Login() {
  return (
    <LoginLayout>
      <Row type='horizontal' $variation='center'>
        <Heading as='h3' $variation='center'>
          Hello Maika, log in to access the CMS
        </Heading>
      </Row>
      <LoginForm />
    </LoginLayout>
  );
}

export default Login;
