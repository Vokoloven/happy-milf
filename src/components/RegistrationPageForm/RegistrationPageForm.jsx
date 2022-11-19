import { LoginPage } from 'Pages/LoginPage';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import operations from 'Redux/Auth/auth.service';

import {
  Form,
  Label,
  Title,
  Input,
  RegistertBtn,
  LoginBtn,
} from './RegistrationPageForm.styled';

export const RegistrationPageForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(operations.register({ username, email, password }));
  };

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'username':
        setUsername(value);
        break;
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
      <Title>Register</Title>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="username">
          Name *
          <Input
            id="username"
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
            autoComplete="off"
            required
          />
        </Label>

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

        <RegistertBtn type="submit">Register</RegistertBtn>
      </Form>
      <LoginBtn to="/login" value={<LoginPage />}>
        Login
      </LoginBtn>
    </>
  );
};
