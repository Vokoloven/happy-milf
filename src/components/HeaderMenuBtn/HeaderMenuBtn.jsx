import CloseIcon from './img/closeIcon.svg';
import MenuIcon from './img/Menu.svg';
import { MenuBtn } from './HeaderMenuBtn.styled';
import PropTypes from 'prop-types';

export const HeaderMenuBtn = ({ handleMenuOpen, isMenuOpen }) => {
  return (
    <MenuBtn onClick={handleMenuOpen}>
      {isMenuOpen ? (
        <img src={CloseIcon} alt="X" />
      ) : (
        <img src={MenuIcon} alt="menu"></img>
      )}
    </MenuBtn>
  );
};

HeaderMenuBtn.propTypes = {
  handleMenuOpen: PropTypes.func.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
};
