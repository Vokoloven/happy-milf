import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { PagesLinks } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <header style={{ display: 'flex', gap: '15px' }}>
        <Link to="/">
          <img src="/src/images/Logo.png" alt="Logo" />
        </Link>
        <PagesLinks to="/login">Sing in</PagesLinks>
        <PagesLinks to="/registration">Registration</PagesLinks>
        <PagesLinks to="/diary">diary</PagesLinks>
        <PagesLinks to="/calculator">calculator</PagesLinks>
      </header>
      <Outlet />
    </>
  );
};
