import { useState } from 'react';
import Form from '../../ui/Form';
import Row from '../../ui/Row';
import Input from '../../ui/Input';
import ButtonsContainer from '../../ui/ButtonsContainer';
import Button from '../../ui/Button';
import Label from '../../ui/Label';
import FormRow from '../../ui/FormRow';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit() {}

  return (
    <Form type='vertical' onSubmit={handleSubmit}>
      <FormRow label='Username'>
        <Input
          type='email'
          id='email'
          autoComplete='username'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormRow>

      <FormRow label='Password'>
        <Input
          type='password'
          id='password'
          autoComplete='current-password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormRow>

      <Row role='row' type='horizontal' $variation='buttons'>
        <Button $variation='add' type='submit'>
          Login
        </Button>
      </Row>
    </Form>
  );
}

export default LoginForm;
