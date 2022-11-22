import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import operations from 'Redux/Auth/auth.service';
import { ChoiceAvatar } from 'components/Avatar/Avatar';
import { addAvatar } from 'Redux/Auth/authSlice';
import styled from 'styled-components';

import { ReactComponent as ThemeBtnIcon } from './img/lightbulb_outline.svg';

import { Header } from './Layout.styled';

import { nameSelector, tokenSelector } from 'Redux/Selectors/authSelectors';
import { Logo } from 'components/Logo/Logo';
import { HeaderAuthNav } from 'components/HeaderAuthNav/HeaderAuthNav';
import { AuthNavMobile } from 'components/HeaderAuthNav/AuthNavMobile/AuthNavMobile';
import { HeaderPrivateNav } from 'components/HeaderPrivateNav/HeaderPrivateNav';
import { HeaderExitBox } from 'components/HeaderExitBox/HeaderExitBox';
import { HeaderMenuBtn } from 'components/HeaderMenuBtn/HeaderMenuBtn';
import { MenuBox } from 'components/MenuBox/MenuBox';

const ThemeIcon = styled(ThemeBtnIcon)`
  * {
    color: #fc842d;
    fill: #fc842d;
  }
  @media screen and (max-width: 350px) {
    position: absolute;
    left: 5px;
    top: 1px;
  }
`;

const ThemeBtn = styled.button`
  background-color: transparent;
  border: none;
  @media screen and (max-width: 350px) {
    position: absolute;
    left: 75px;
    top: 30px;
  }
  @media screen and (min-width: 1280px) {
    margin-left: 10px;
    position: relative;
    top: 5px;
  }
`;

export const Layout = ({ changeTheme, setChangeTheme }) => {
  const dispatch = useDispatch();
  const [authorization, setAuthorization] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const TOKEN = useSelector(tokenSelector);
  const NAME = useSelector(nameSelector);

  const handleChangeTheme = () => {
    const foo = document.querySelectorAll('#root');
    foo[0].classList.toggle('darkTheme');
    setChangeTheme(!changeTheme);
    console.log(changeTheme);
  };

  const handleLogOut = () => {
    dispatch(operations.logOut());
    dispatch(addAvatar(null));
    setAuthorization(false);
  };

  const handleAuthorization = () => {
    setAuthorization(!authorization);
  };

  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleAuthorizationRestart = () => {
    setAuthorization(false);
  };

  return (
    <>
      <Header>
        <Logo handleAuthorizationRestart={handleAuthorizationRestart} />
        <ThemeBtn onClick={handleChangeTheme}>
          {changeTheme ? (
            <ThemeIcon alt="themeIcon"></ThemeIcon>
          ) : (
            <ThemeBtnIcon alt="themeIcon"></ThemeBtnIcon>
          )}
        </ThemeBtn>
        {!TOKEN && !authorization && (
          <HeaderAuthNav handleAuthorization={handleAuthorization} />
        )}
        {!TOKEN && !authorization && <AuthNavMobile />}
        {TOKEN && <HeaderPrivateNav />}

        {TOKEN && <HeaderExitBox NAME={NAME} handleLogOut={handleLogOut} />}
        {TOKEN && (
          <>
            <ChoiceAvatar />
            <HeaderMenuBtn
              changeTheme={changeTheme}
              handleMenuOpen={handleMenuOpen}
              isMenuOpen={isMenuOpen}
            />
            {isMenuOpen && <MenuBox />}
          </>
        )}
      </Header>
      <Outlet />
    </>
  );
};
