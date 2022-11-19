import { Outlet } from 'react-router-dom';
import Menu from './img/Menu.svg';
import CloseIcon from './img/closeIcon.svg';
import { useSelector } from 'react-redux';
import operations from 'Redux/Auth/auth.service';
import { useDispatch } from 'react-redux';
import { Logo } from 'components/Logo/Logo';

import {
  Header,
  SingInLinkMob,
  ExitBox,
  NicName,
  ExitBtn,
  PagesLinksPrivate,
  PagesLinksPrivateMenu,
  PagesLinksMob,
  MenuBtn,
  MenuBox,
} from './Layout.styled';
import { useState } from 'react';
import { nameSelector, tokenSelector } from 'Redux/Selectors/authSelectors';
import { HeaderAuthNav } from 'components/HeaderAuthNav/HeaderAuthNav';

export const Layout = () => {
  const dispatch = useDispatch();
  const [authorization, setAuthorization] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const TOKEN = useSelector(tokenSelector);
  const NAME = useSelector(nameSelector);

  const handleLogOut = () => {
    dispatch(operations.logOut());
  };

  const handleAuthorization = () => {
    setAuthorization(!authorization);
  };

  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleAuthorizationRestart = () => {
    setAuthorization(authorization);
  };

  return (
    <>
      <Header>
        <Logo handleAuthorizationRestart={handleAuthorizationRestart} />
        {!TOKEN && !authorization && (
          <HeaderAuthNav handleAuthorization={handleAuthorization} />
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
