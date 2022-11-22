import { SingInLink, PagesLinks } from './HeaderAuthNav.styled';
import PropTypes from 'prop-types';

export const HeaderAuthNav = ({ handleAuthorization }) => {
  return (
    <>
      <SingInLink
        style={{ marginLeft: '15px' }}
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
  );
};

HeaderAuthNav.propTypes = {
  handleAuthorization: PropTypes.func.isRequired,
};
