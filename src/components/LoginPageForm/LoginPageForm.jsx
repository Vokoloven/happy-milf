import { useState } from 'react';
import { useDispatch } from 'react-redux';
import operations from 'Redux/Auth/auth.service';

import {
  Form,
  Label,
  Title,
  Input,
  LogIntBtn,
  RegisterBtn,
} from './LoginPageForm.styled';

export const LoginPageForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(operations.logIn({ email, password }));
  };

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  return (
    <>
      <Title style={{ color: '#fc842d' }}>Sing In</Title>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="email">
          Email *
          <Input
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            autoComplete="off"
            required
          />
        </Label>

        <Label htmlFor="password">
          Password *
          <Input
            id="password"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            autoComplete="off"
            required
          />
        </Label>

        <LogIntBtn type="submit">Log In</LogIntBtn>
      </Form>
      <RegisterBtn to="/registration">Register</RegisterBtn>
    </>
  );
};
