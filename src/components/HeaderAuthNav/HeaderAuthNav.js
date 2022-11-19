import { SingInLink, PagesLinks } from './HeaderAuthNav.styled';

export const HeaderAuthNav = ({ handleAuthorization }) => {
  return (
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
  );
};
