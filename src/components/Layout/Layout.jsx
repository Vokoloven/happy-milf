import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import operations from 'Redux/Auth/auth.service';
import { ChoiceAvatar } from 'components/Avatar/Avatar';
import { addAvatar } from 'Redux/Auth/authSlice';

import { Header } from './Layout.styled';

import { nameSelector, tokenSelector } from 'Redux/Selectors/authSelectors';
import { Logo } from 'components/Logo/Logo';
import { HeaderAuthNav } from 'components/HeaderAuthNav/HeaderAuthNav';
import { AuthNavMobile } from 'components/HeaderAuthNav/AuthNavMobile/AuthNavMobile';
import { HeaderPrivateNav } from 'components/HeaderPrivateNav/HeaderPrivateNav';
import { HeaderExitBox } from 'components/HeaderExitBox/HeaderExitBox';
import { HeaderMenuBtn } from 'components/HeaderMenuBtn/HeaderMenuBtn';
import { MenuBox } from 'components/MenuBox/MenuBox';

export const Layout = () => {
  const dispatch = useDispatch();
  const [authorization, setAuthorization] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const TOKEN = useSelector(tokenSelector);
  const NAME = useSelector(nameSelector);

  const root = document.getElementById('#root');

  const handleChangeTheme = () => {
    const foo = document.querySelectorAll('#root');
    console.log(foo[0].className === 'darkTheme');
    foo[0].classList.toggle('darkTheme');
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
        <button onClick={handleChangeTheme}></button>
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
