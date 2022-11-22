import { SingInLinkMob, PagesLinksMob } from './AuthNavMobile.styled';

export const AuthNavMobile = () => {
  return (
    <>
      <SingInLinkMob to="/login">Sing in</SingInLinkMob>
      <PagesLinksMob to="/registration">Registration</PagesLinksMob>
    </>
  );
};
