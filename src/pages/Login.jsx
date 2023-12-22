import styled from 'styled-components';
import LoginForm from '../features/authentication/LoginForm';
import Heading from '../ui/Heading';

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  /* gap: 3.2rem; */
`;

function Login() {
  return (
    <LoginLayout>
      <Heading as='h3' $variation='center'>
        Hello Maika, log in to access the CMS
      </Heading>
      <LoginForm />
    </LoginLayout>
  );
}

export default Login;
