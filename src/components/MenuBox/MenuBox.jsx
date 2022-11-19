import { MenuBoxStyled, PagesLinksPrivateMenu } from './MenuBox.styled';

export const MenuBox = () => {
  return (
    <MenuBoxStyled>
      <PagesLinksPrivateMenu to="/diary">diary</PagesLinksPrivateMenu>
      <PagesLinksPrivateMenu style={{ marginTop: '38px' }} to="/calculator">
        calculator
      </PagesLinksPrivateMenu>
    </MenuBoxStyled>
  );
};
