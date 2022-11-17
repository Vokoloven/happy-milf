import { Outlet } from 'react-router-dom';
import { PagesLinks } from './Layout.styled';
import LogoB from './img/LogoB.png';
import LogoS from './img/LogoS.png';
import { useSelector } from 'react-redux';
import operations from 'Redux/Auth/auth.service';
import { useDispatch } from 'react-redux';
import {
  Header,
  LogoLink,
  SingInLink,
  LogoImgB,
  LogoImgS,
  ExitBox,
  NicName,
  ExitBtn,
} from './Layout.styled';

export const Layout = () => {
  const dispatch = useDispatch();
  const TOKEN = useSelector(state => state.auth.accessToken);
  const NAME = useSelector(state => state.auth.user.username);
  const handleLogOut = () => {
    dispatch(operations.logOut());
  };
  return (
    <>
      <Header>
        <LogoLink to="/">
          <LogoImgB src={LogoB} alt="Logo" />
          <LogoImgS src={LogoS} alt="Logo" />
        </LogoLink>
        {!TOKEN && (
          <>
            <SingInLink to="/login">Sing in</SingInLink>
            <PagesLinks to="/registration">Registration</PagesLinks>
          </>
        )}
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
