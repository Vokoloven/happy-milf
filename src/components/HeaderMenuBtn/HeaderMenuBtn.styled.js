import styled from 'styled-components';

export const MenuBtn = styled.button`
  position: relative;
  z-index: 15;
  padding: 0px;
  border: none;
  background-color: transparent;
  margin-left: 50px;
  @media screen and (min-width: 1280px) {
    display: none;
  }
  @media screen and (max-width: 529px) {
    margin-left: auto;
  }
`;
