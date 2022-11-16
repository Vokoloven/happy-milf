import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { PagesLinks } from './Layout.styled';
import Logo from './Logo.png';
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
  return (
    <>
      <Header>
        <LogoLink to="/">
          <LogoImg src={Logo} alt="Logo" />
        </LogoLink>
        <SingInLink to="/login">Sing in</SingInLink>
        <PagesLinks to="/registration">Registration</PagesLinks>
        <PagesLinks to="/diary">diary</PagesLinks>
        <PagesLinks to="/calculator">calculator</PagesLinks>
        <ExitBox>
          <NicName>Nic</NicName>
          <ExitBtn>Exit</ExitBtn>
        </ExitBox>
      </Header>
      <Outlet />
    </>
  );
};
