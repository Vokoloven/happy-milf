import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MenuBoxStyled = styled.div`
  z-index: 15;
  padding-top: 60px;
  top: 80px;
  @media screen and (min-width: 768px) {
    padding: 100px;
    top: 80px;
  }
  left: 0;
  width: 100%;
  height: 100%;
  position: fixed;
  text-align: center;
  display: flex;
  flex-direction: column;
  background-color: #264061;
`;

export const PagesLinksPrivateMenu = styled(NavLink)`
  // @media screen and (max-width: 1279px) {
  //   display: none;
  // }
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  letter-spacing: 0.04em;
  text-transform: uppercase;

  color: #9b9faa;
  transition: 250ms;
  &:hover,
  &:focus {
    scale: 1.05;
  }

  &.active {
    color: #ffffff;
  }
`;
