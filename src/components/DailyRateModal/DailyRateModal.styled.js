import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Backdrop = styled.div`
  background: rgba(33, 33, 33, 0.12);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const Modal = styled.div`
  padding: 64px 80px 81px 80px;
  display: block;
  width: 672px;
  box-shadow: 0px 22px 40px rgba(0, 0, 0, 0.1);
  background-color: white;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  @media screen and (max-width: 479px) {
    width: fit-content;
  }
  @media screen and (max-width: 767px) {
    max-width: 500px;
  }
`;

export const CloseBtnMob = styled.button`
@media screen and (min-width: 767px) {
display: none;
  
}
@media screen and (min-width: 480px) {
  left: 20px;

}
    position: absolute;
    top: -16px;
    transform: translateY(-100%);
    border: none;
    background-color: transparent;
      scale: 1.1;
}`;

export const CloseBtn = styled.button`
  @media screen and (max-width: 767px) {
    display: none;
  }
  background: none;
  border: none;
  outline: none;
  position: absolute;
  right: 14px;
  top: 14px;
  padding: 10px;
  transition: 250ms;

  &:hover,
  &:focus {
    scale: 1.1;
  }
`;

export const ModalTitle = styled.h2`
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 32px;
  text-align: center;
  color: #212121;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 767px) {
    font-size: 18px;
    line-height: 26px;
    width: 280px;
    margin: auto;
  }
`;

export const DailyRateNumber = styled.span`
  margin-top: 20px;
  margin-bottom: 32px;
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 58px;
  text-align: center;
  letter-spacing: 0.04em;
  color: #264061;
`;

export const CalText = styled.span`
  font-size: 25px;
  margin-left: 10px;
  @media screen and (max-width: 767px) {
    font-size: 18px;
    line-height: 26px;
    width: 280px;
    margin-left: 5px;
  }
`;

export const InfoBox = styled.div`
border-top 1px solid #E0E0E0;
padding-top: 12px;
  display: block;
  width: 330px;
  margin: auto;
  
  @media screen and (max-width: 767px) {
  width: fit-content;
  }

`;

export const ModalInfo = styled.h3`
  margin-bottom: 20px;
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;
  color: #212121;
`;

export const InfoItem = styled.li`
  list-style: auto;
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;
  color: #9b9faa;
`;

export const InfoList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0px 0px 0px 20px;
`;

export const ModalBtn = styled(Link)`
    margin: 40px auto 0px;
}
  width: 211px;
  height: 43px;
  background: #fc842d;
  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  border-radius: 30px;
  padding: 13px 25px;

  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.04em;
  color: #ffffff;
  transition: 250ms;
  
  &:hover,
  &:focus {
    background: #f5f5f5;
    color: #fc842d;
  }
`;
