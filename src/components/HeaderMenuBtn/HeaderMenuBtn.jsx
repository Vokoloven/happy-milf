import CloseIcon from './img/closeIcon.svg';
import { MenuBtn } from './HeaderMenuBtn.styled';
import PropTypes from 'prop-types';
import { ReactComponent as BurgerIcon } from './img/Menu.svg';
import { ReactComponent as ExitIcon } from './img/closeIcon.svg';

import styled from 'styled-components';

const BurgerIconBlack = styled(BurgerIcon)`
  * {
    color: black;
    fill: black;
  }
`;
const BurgerIconTomato = styled(BurgerIcon)`
  * {
    color: #fc842d;
    fill: #fc842d;
    pointer-events: bounding-box;
    transition: 150ms;
    &:hover,
    &:focus {
      color: white;
      fill: white;
    }
  }
`;

export const HeaderMenuBtn = ({ handleMenuOpen, isMenuOpen, changeTheme }) => {
  return (
    <MenuBtn onClick={handleMenuOpen}>
      {isMenuOpen ? (
        changeTheme ? (
          <ExitIcon src={CloseIcon} alt="X" />
        ) : (
          <ExitIcon src={CloseIcon} alt="X" />
        )
      ) : changeTheme ? (
        <BurgerIconTomato alt="menu"></BurgerIconTomato>
      ) : (
        <BurgerIconBlack alt="menu"></BurgerIconBlack>
      )}
    </MenuBtn>
  );
};

HeaderMenuBtn.propTypes = {
  handleMenuOpen: PropTypes.func.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
};
