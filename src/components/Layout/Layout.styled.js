import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

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

export const Header = styled.header`
  position: relative;
  display: flex;
  background-color: white;
  @media screen and (min-width: 1280px) {
    background-color: transparent;
    box-shadow: initial;
  }
  @media screen and (max-width: 1279px) {
    box-shadow: 0px 0px 4px grey;
    align-items: center;
    padding: 20px 20px 16px;
  }
  padding: 80px 16px 0px;
  // width: 1280px;
  margin: auto;
  align-items: baseline;
`;

export const MenuBox = styled.div`
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
  z-index: 2;
  text-align: center;
  display: flex;
  flex-direction: column;
  background-color: #264061;
`;
