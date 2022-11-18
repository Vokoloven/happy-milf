import { Outlet } from 'react-router-dom';
import LogoB from './img/LogoB.png';
import LogoS from './img/LogoS.png';
import LogoT from './img/LogoT.png';
import Menu from './img/Menu.svg';
import CloseIcon from './img/closeIcon.svg';
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
  PagesLinksPrivateMenu,
  PagesLinksMob,
  MenuBtn,
  MenuBox,
} from './Layout.styled';
import { useState } from 'react';

const AUTHORIZATION = false;

export const Layout = () => {
  const dispatch = useDispatch();
  const [authorization, setAuthorization] = useState(AUTHORIZATION);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const TOKEN = useSelector(state => state.auth.accessToken);
  const NAME = useSelector(state => state.auth.user.username);

  const handleLogOut = () => {
    dispatch(operations.logOut());
  };
  const handleAuthorization = () => {
    setAuthorization(!AUTHORIZATION);
  };
  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
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
            <SingInLink
              style={{ marginLeft: '20px' }}
              onClick={handleAuthorization}
              to="/login"
            >
              Sing in
            </SingInLink>
            <PagesLinks
              style={{ marginLeft: '15px' }}
              onClick={handleAuthorization}
              to="/registration"
            >
              Registration
            </PagesLinks>
          </>
        )}
        {!TOKEN && !authorization && (
          <>
            <SingInLinkMob to="/login">Sing in</SingInLinkMob>
            <PagesLinksMob style={{ marginLeft: '15px' }} to="/registration">
              Registration
            </PagesLinksMob>
          </>
        )}
        {TOKEN && (
          <>
            <PagesLinksPrivate style={{ marginLeft: '15px' }} to="/diary">
              diary
            </PagesLinksPrivate>
            <PagesLinksPrivate style={{ marginLeft: '15px' }} to="/calculator">
              calculator
            </PagesLinksPrivate>
          </>
        )}
        {TOKEN && (
          <ExitBox>
            <NicName>{NAME}</NicName>
            <ExitBtn onClick={handleLogOut}>Exit</ExitBtn>
          </ExitBox>
        )}
        {TOKEN && (
          <>
            <MenuBtn onClick={handleMenuOpen}>
              {isMenuOpen ? (
                <img src={CloseIcon} alt="X" />
              ) : (
                <img src={Menu} alt="menu"></img>
              )}
            </MenuBtn>
            {isMenuOpen && (
              <MenuBox>
                <PagesLinksPrivateMenu to="/diary">diary</PagesLinksPrivateMenu>
                <PagesLinksPrivateMenu
                  style={{ marginTop: '38px' }}
                  to="/calculator"
                >
                  calculator
                </PagesLinksPrivateMenu>
              </MenuBox>
            )}
          </>
        )}
      </Header>
      <Outlet />
    </>
  );
};
