import { useState } from 'react';
import Form from '../../ui/Form';
import Row from '../../ui/Row';
import Input from '../../ui/Input';
import Button from '../../ui/Button';
import FormRow from '../../ui/FormRow';
import { useLogin } from './useLogin';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, isLoading } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    login(
      { email, password },
      {
        onSettled: () => {
          setEmail('');
          setPassword('');
        },
      }
    );
  }

  return (
    <Form type='vertical' onSubmit={handleSubmit}>
      <FormRow label='Username'>
        <Input
          type='email'
          id='email'
          autoComplete='username'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
        />
      </FormRow>

      <FormRow label='Password'>
        <Input
          type='password'
          id='password'
          autoComplete='current-password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
        />
      </FormRow>

      <Row role='row' type='horizontal' $variation='buttons'>
        <Button $variation='add' type='submit' disabled={isLoading}>
          {!isLoading ? 'Log in' : 'Signing in...'}
        </Button>
      </Row>
    </Form>
  );
}

export default LoginForm;
