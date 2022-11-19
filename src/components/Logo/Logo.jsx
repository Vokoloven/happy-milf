import PropTypes from 'prop-types';
import { LogoLink, LogoImgB, LogoImgT, LogoImgS } from './Logo.styled';
import LogoB from './img/LogoB.png';
import LogoS from './img/LogoS.png';
import LogoT from './img/LogoT.png';

export const Logo = ({ handleAuthorizationRestart }) => {
  return (
    <LogoLink onClick={handleAuthorizationRestart} to="/">
      <LogoImgB src={LogoB} alt="Logo" />
      <LogoImgT src={LogoT} alt="Logo" />
      <LogoImgS src={LogoS} alt="Logo" />
    </LogoLink>
  );
};

Logo.propTypes = {
  handleAuthorizationRestart: PropTypes.func.isRequired,
};
