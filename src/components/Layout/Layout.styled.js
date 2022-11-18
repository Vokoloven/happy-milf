import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

export const PagesLinks = styled(NavLink)`
  font-family: 'Gotham Pro';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 13px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #9b9faa;
  transition: 250ms;
  &:hover,
  &:focus {
    scale: 1.05;
  }

  &.active {
    font-weight: 700;
    font-size: 14px;
    line-height: 13px;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    position: relative;
    color: #212121;
  }
`;
export const SingInLink = styled(NavLink)`
  margin-left: auto;
  font-family: 'Gotham Pro';
  font-style: normal;
  font-weight: 700;
  text-transform: uppercase;
  position: relative;
  font-size: 14px;

  letter-spacing: 0.04em;

  color: #9b9faa;
  &.active {
    color: #212121;
    line-height: 13px;
  }
  transition: 250ms;
  &:hover,
  &:focus {
    scale: 1.05;
  }
`;

export const Header = styled.header`
  display: flex;
  gap: 15px;
  @media screen and (max-width: 1279px) {
    padding: 20px 20px 16px;
  }
  padding: 80px 16px 0px;
  // width: 1280px;
  margin: auto;
  align-items: baseline;
`;

export const LogoLink = styled(Link)`
  margin-right: 22px;
  position: relative;
  &::after {
    pointer-events: none;
    position: absolute;
    content: '';
    height: 32px;
    width: 2px;
    background-color: #e0e0e0;
    bottom: -26px;
    right: -20px;
    transform: translateY(-50%);
  }
`;

export const LogoImgB = styled.img`
  @media screen and (max-width: 479px) {
    display: none;
  }
  width: 167px;
  position: relative;
  bottom: -4px;
`;
export const LogoImgS = styled.img`
  height: 44px;
  position: relative;
  bottom: -4px;
  @media screen and (min-width: 480px) {
    display: none;
  }
`;

export const ExitBox = styled.div`
  display: flex;
  margin-left: auto;
  position: relative;
  z-index: 10;
`;

export const NicName = styled.p`
  pointer-events: none;
  margin-right: 20px;
  position: relative;
  font-family: 'Gotham Pro';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 13px;
  text-align: right;
  letter-spacing: 0.04em;

  color: #212121;
  &::after {
    pointer-events: none;
    position: absolute;
    content: '';
    height: 32px;
    width: 2px;
    background-color: #e0e0e0;
    top: 50%;
    right: -20px;
    transform: translateY(-50%);
  }
`;

export const ExitBtn = styled.button`
  border: none;
  background-color: transparent;
  padding: 0px;
  margin-left: 20px;
  font-family: 'Gotham Pro';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 13px;
  letter-spacing: 0.04em;

  color: #9b9faa;
  transition: 250ms;
  &:hover,
  &:focus {
    scale: 1.05;
    color: #212121;
  }
`;
