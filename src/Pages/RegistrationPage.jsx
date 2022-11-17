import { NavLink } from 'react-router-dom';
import { LoginPage } from './LoginPage';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import operations from 'Redux/Auth/auth.service';

export const RegistrationPage = () => {
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
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">
          Name *
          <input
            id="username"
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
            autoComplete="off"
            required
          />
        </label>

        <label htmlFor="email">
          Email *
          <input
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            autoComplete="off"
            required
          />
        </label>

        <label htmlFor="password">
          Password *
          <input
            id="password"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            autoComplete="off"
            required
          />
        </label>

        <button type="submit">Register</button>

        <NavLink to="/login" value={<LoginPage />}>
          Login
        </NavLink>
      </form>
    </>
  );
};
