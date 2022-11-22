import { LoginPage } from 'Pages/LoginPage';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import operations from 'Redux/Auth/auth.service';
import { useForm } from 'react-hook-form';

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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  });

  const dispatch = useDispatch();

  const onSubmit = () => {
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
      <Title style={{ color: '#fc842d' }}>Register</Title>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="username">
          Name *
          <Input
            {...register('username', {
              required: 'Name cant be empty',
              minLength: {
                value: 5,
                message: 'Name must be bigger than 5 symbols',
              },
              onChange: handleChange,
            })}
            type="text"
            value={username}
            autoComplete="off"
          />
          <div style={{ color: 'red' }}>
            {errors?.username && <p>{errors?.username.message || 'Error!'}</p>}
          </div>
        </Label>

        <Label>
          Email *
          <Input
            {...register('email', {
              required: 'Email cant be empty',
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: 'Wrong email type',
              },
              onChange: handleChange,
            })}
            type="email"
            value={email}
            autoComplete="off"
          />
          <div style={{ color: 'red' }}>
            {errors?.email && <p>{errors?.email.message || 'Error!'}</p>}
          </div>
        </Label>

        <Label>
          Password *
          <Input
            {...register('password', {
              required: 'Password cant be empty',
              pattern: {
                value:
                  /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/,
                message:
                  'Wrong input. Must contain at least one number, one special character, one lowercase latin letter, one uppercase latin letter, consist of at least 6 of the above characters',
              },
              onChange: handleChange,
            })}
            type="password"
            value={password}
            autoComplete="off"
          />
          <div style={{ color: 'red' }}>
            {errors?.password && <p>{errors?.password.message || 'Error!'}</p>}
          </div>
        </Label>

        <RegistertBtn type="submit">Register</RegistertBtn>
      </Form>
      <LoginBtn to="/login" value={<LoginPage />}>
        Login
      </LoginBtn>
    </>
  );
};
