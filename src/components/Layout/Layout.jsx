import { Outlet } from 'react-router-dom';
import { PagesLinks } from './Layout.styled';
import Logo from './Logo.png';
import { useSelector } from 'react-redux';
import operations from 'Redux/Auth/auth.service';
import { useDispatch } from 'react-redux';
import {
  Header,
  LogoLink,
  SingInLink,
  LogoImg,
  ExitBox,
  NicName,
  ExitBtn,
} from './Layout.styled';

export const Layout = () => {
  const dispatch = useDispatch();
  const TOKEN = useSelector(state => state.auth.accessToken);
  const NAME = useSelector(state => state.auth.user.username);
  console.log(TOKEN);
  console.log(NAME);
  const handleLogOut = () => {
    dispatch(operations.logOut());
  };
  return (
    <>
      <Header>
        <LogoLink to="/">
          <LogoImg src={Logo} alt="Logo" />
        </LogoLink>
        <SingInLink to="/login">Sing in</SingInLink>
        <PagesLinks to="/registration">Registration</PagesLinks>
        {TOKEN && (
          <>
            <PagesLinks to="/diary">diary</PagesLinks>
            <PagesLinks to="/calculator">calculator</PagesLinks>
          </>
        )}

        {TOKEN && (
          <ExitBox>
            <NicName>{NAME}</NicName>
            <ExitBtn onClick={handleLogOut}>Exit</ExitBtn>
          </ExitBox>
        )}
      </Header>
      <Outlet />
    </>
  );
};
