import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const PagesLinksPrivate = styled(NavLink)`
  @media screen and (max-width: 1279px) {
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
