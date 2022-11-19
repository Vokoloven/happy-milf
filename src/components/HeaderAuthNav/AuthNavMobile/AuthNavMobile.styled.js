import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const PagesLinksMob = styled(NavLink)`
  @media screen and (min-width: 1280px) {
    display: none;
  }
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
export const SingInLinkMob = styled(NavLink)`
  @media screen and (min-width: 1280px) {
    display: none;
  }
  margin-left: auto;
  @media screen and (min-width: 1280px) {
    margin-left: revert;
  }
  font-family: 'Gotham Pro';
  font-style: normal;
  font-weight: 700;
  text-transform: uppercase;
  position: relative;
  font-size: 14px;
  line-height: 13px;

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
