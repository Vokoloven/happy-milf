import { Outlet } from 'react-router-dom';
import LogoB from './img/LogoB.png';
import LogoS from './img/LogoS.png';
import LogoT from './img/LogoT.png';
import { useSelector } from 'react-redux';
import operations from 'Redux/Auth/auth.service';
import { useDispatch } from 'react-redux';
import {
  Header,
  LogoLink,
  SingInLink,
  SingInLinkMob,
  LogoImgB,
  LogoImgT,
  LogoImgS,
  ExitBox,
  NicName,
  ExitBtn,
  PagesLinks,
  PagesLinksPrivate,
  PagesLinksMob,
} from './Layout.styled';
import { useState } from 'react';

const AUTHORIZATION = false;

export const Layout = () => {
  const dispatch = useDispatch();
  const [authorization, setAuthorization] = useState(AUTHORIZATION);

  const TOKEN = useSelector(state => state.auth.accessToken);
  const NAME = useSelector(state => state.auth.user.username);
  // const SID = useSelector(sidSelector);
  const handleLogOut = () => {
    dispatch(operations.logOut());
  };
  const handleAuthorization = () => {
    setAuthorization(!AUTHORIZATION);
  };
  const handleAuthorizationRestart = () => {
    setAuthorization(AUTHORIZATION);
  };
  return (
    <>
      <Header>
        <LogoLink onClick={handleAuthorizationRestart} to="/">
          <LogoImgB src={LogoB} alt="Logo" />
          <LogoImgT src={LogoT} alt="Logo" />
          <LogoImgS src={LogoS} alt="Logo" />
        </LogoLink>
        {!TOKEN && !authorization && (
          <>
            <SingInLink onClick={handleAuthorization} to="/login">
              Sing in
            </SingInLink>
            <PagesLinks onClick={handleAuthorization} to="/registration">
              Registration
            </PagesLinks>
          </>
        )}
        {!TOKEN && !authorization && (
          <>
            <SingInLinkMob to="/login">Sing in</SingInLinkMob>
            <PagesLinksMob to="/registration">Registration</PagesLinksMob>
          </>
        )}
        {TOKEN && (
          <>
            <PagesLinksPrivate to="/diary">diary</PagesLinksPrivate>
            <PagesLinksPrivate to="/calculator">calculator</PagesLinksPrivate>
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
