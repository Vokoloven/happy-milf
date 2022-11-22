import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LogoLink = styled(Link)`
  margin-right: 22px;
  @media screen and (max-width: 530px) {
    margin-right: 10px;
  }
  position: relative;
  @media screen and (min-width: 1280px) {
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
  }
`;

export const LogoImgB = styled.img`
  height: 66px;
  @media screen and (max-width: 1279px) {
    display: none;
  }
  @media screen and (max-width: 767px) {
    height: 44px;
  }
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

export const LogoImgT = styled.img`
  height: 44px;
  position: relative;
  bottom: -4px;
  display: none;
  @media screen and (min-width: 480px) {
    display: block;
  }
  @media screen and (min-width: 1280px) {
    display: none;
  }
`;
