// import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import operations from 'Redux/Auth/auth.service';
// import { useSelector } from 'react-redux';

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const TOKEN = useSelector(state => state.auth.accessToken);
  // const ID = useSelector(state => state);
  // console.log(TOKEN);
  // console.log(ID);

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

  const handleLogOut = () => {
    dispatch(operations.logOut());
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
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

        <button type="submit">Log In</button>
      </form>

      <button type="button" onClick={handleLogOut}>
        Log Out
      </button>
    </>
  );
};
