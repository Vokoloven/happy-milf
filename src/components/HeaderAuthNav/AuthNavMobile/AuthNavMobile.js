import { SingInLinkMob, PagesLinksMob } from './AuthNavMobile.styled';

export const AuthNavMobile = () => {
  return (
    <>
      <SingInLinkMob to="/login">Sing in</SingInLinkMob>
      <PagesLinksMob style={{ marginLeft: '15px' }} to="/registration">
        Registration
      </PagesLinksMob>
    </>
  );
};
