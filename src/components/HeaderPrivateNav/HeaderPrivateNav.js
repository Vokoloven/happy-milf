import { PagesLinksPrivate } from './HeaderPrivateNav.styled';

export const HeaderPrivateNav = () => {
  return (
    <>
      <PagesLinksPrivate style={{ marginLeft: '15px' }} to="/diary">
        diary
      </PagesLinksPrivate>
      <PagesLinksPrivate style={{ marginLeft: '15px' }} to="/calculator">
        calculator
      </PagesLinksPrivate>
    </>
  );
};
