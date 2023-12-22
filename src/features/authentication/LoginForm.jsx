import { useState } from 'react';
import Form from '../../ui/Form';
import Row from '../../ui/Row';
import Input from '../../ui/Input';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit() {}

  return (
    <Form type='vertical' onSubmit={handleSubmit}>
      <Row role='row' type='horizontal'>
        <h4>Username</h4>
      </Row>
      <Row role='row' type='horizontal'>
        <Input
          type='email'
          id='email'
          autoComplete='username'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Row>
      <Row role='row' type='horizontal'>
        <h4>Password</h4>
      </Row>
      <Row role='row' type='horizontal'>
        <Input
          type='password'
          id='password'
          autoComplete='current-password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Row>
    </Form>
  );
}

export default LoginForm;
