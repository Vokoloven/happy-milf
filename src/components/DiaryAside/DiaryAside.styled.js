import styled from 'styled-components';
import bgImg from '../HomePageForm/img/Layer1x.png';

export const Aside = styled.aside`
  background-color: #f0f1f3;
  margin-top: auto;

  width: 100%;

  @media screen and (max-width: 768px) {
    position: absolute;
    left: 0;
  }

  @media screen and (min-width: 1280px) {
    position: static;
  }
`;

export const AsideContainer = styled.div`
  // width: 320px;
  padding: 40px 20px 70px 20px;
  background-color: #f0f1f3;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    // position: absolute;
    left: 0;
    width: 100%;
    bottom: -100px;
    // transform: translateY(100%);
  }
  @media screen and (min-width: 768px) {
    position: absolute;
    bottom: 0;
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    display: flex;
    padding: 80px 0;

    width: 100%;
    left: 0;
    // margin-top: 48px;
    padding: 80px 32px;
    bottom: 0;
  }
  @media screen and (min-width: 1280px) {
    padding-top: 292px;
    padding-left: 106px;
    position: absolute;
    top: 0;
    right: 0;
    width: 517px;
    height: 101%%;
    background-image: url(${bgImg});

    background-repeat: no-repeat;
    background-position: 0px 0px;
  }
`;
export const AsideContainerx = styled.div`
  // width: 320px;
  padding: 40px 20px 70px 20px;
  background-color: #f0f1f3;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    // position: absolute;
    left: 0;
    width: 100%;
    bottom: -100px;
    // transform: translateY(100%);
  }
  @media screen and (min-width: 768px) {
    position: absolute;
  }

  @media screen and (max-width: 1279px) and (max-width: 1279px) {
    display: flex;
    padding: 80px 0;

    width: 100%;
    left: 0;
    // margin-top: 48px;
    padding: 80px 32px;
    // bottom: 0;
  }
  @media screen and (min-width: 1280px) {
    padding-top: 292px;
    padding-left: 106px;
    position: absolute;
    bottom: 0;
    top: 0;
    right: 0;
    width: 517px;
    height: 101%;
    background-image: url(${bgImg});

    background-repeat: no-repeat;
    background-position: 0px 0px;
  }
`;

export const TitleAside = styled.h3`
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;
  color: #212121;
  margin-bottom: 20px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 270px;
  margin-bottom: 60px;
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    margin-right: 80px;
    margin-bottom: 0;
  }
`;

export const InfoName = styled.p`
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;

  color: #9b9faa;
`;

export const InfoText = styled.span`
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;
  margin-left: auto;

  color: #9b9faa;
`;

export const RecTitle = styled.h3`
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;
  margin-bottom: 20px;
  color: #212121;
`;

export const DietText = styled.p`
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;

  color: #9b9faa;
`;
