import styled from 'styled-components';
import { ReactComponent as arrowIcon } from '../CalendarForm/img/arrow-left.svg';

export const ReturnIconBlack = styled(arrowIcon)`
  * {
    color: black;
    fill: black;
  }
  width: 20px;
`;
export const ReturnIconTomato = styled(arrowIcon)`
  * {
    color: #fc842d;
    fill: #fc842d;
  }
  width: 20px;
`;

export const Form = styled.form`
  @media screen and (max-width: 767px) {
    position: relative;
  }
  display: flex;
  flex-direction: row;
  margin-top: 40px;
  align-items: baseline;
  @media screen and (max-width: 767px) {
    position: absolute;
    background-color: white;
    margin: 0;
    top: 30px;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 80px 20px 0px;
    display: flex;
    flex-direction: column;
    z-index: 2;
    height: 500px;
  }
`;

export const WrapperProductName = styled.div``;

export const ProductName = styled.input`
  outline: none;
  margin-bottom: 40px;
  border: none;
  width: 240px;
  border-bottom: 1px solid #e0e0e0;
  height: 48px;
  letter-spacing: 1px;
  font-weight: 700;
  font-size: 14px;
  color: #9b9faa;
  width: 334px;
  padding-right: 48px;
}

&:focus {
  border-bottom: 1px solid #fc842d;
}
@media screen and (max-width: 767px) {
  width: 280px;
  margin-bottom: 20px;
}
`;
export const ProductNameTheme = styled.input`
  outline: none;
  margin-bottom: 40px;
  border: none;
  width: 240px;
  border-bottom: 1px solid #e0e0e0;
  height: 48px;
  letter-spacing: 1px;
  font-weight: 700;
  font-size: 14px;
  color: #9b9faa;
  width: 334px;
  padding-right: 48px;
  background-color: transparent;
}

&:focus {
  border-bottom: 1px solid #fc842d;
}
@media screen and (max-width: 767px) {
  width: 280px;
  margin-bottom: 20px;
}
`;

export const WrapperGrams = styled.div`
  margin-right: 60px;
`;

export const Grams = styled.input`
  width: 60px;
  text-align: start;
  outline: none;
  margin-bottom: 40px;
  width: 105px;
  border: none;
  border-bottom: 1px solid #e0e0e0;
  height: 48px;
  letter-spacing: 1px;
  font-weight: 700;
  font-size: 14px;
  color: #9b9faa;

  &:focus {
    border-bottom: 1px solid #fc842d;
  }
  @media screen and (max-width: 767px) {
    width: 280px;
    margin-bottom: 40px;
  }
`;
export const GramsTheme = styled.input`
  width: 60px;
  text-align: start;
  outline: none;
  margin-bottom: 40px;
  width: 105px;
  border: none;
  border-bottom: 1px solid #e0e0e0;
  height: 48px;
  letter-spacing: 1px;
  font-weight: 700;
  font-size: 14px;
  color: #9b9faa;
  background-color: transparent;

  &:focus {
    border-bottom: 1px solid #fc842d;
  }
  @media screen and (max-width: 767px) {
    width: 280px;
    margin-bottom: 40px;
  }
`;

export const AddMeal = styled.button`
  background-color: #fc842d;
  border: none;
  border-radius: 100%;
  box-shadow: 0 4px 10px rgb(252 132 45 / 50%);
  color: #fff;
  font-size: 24px;
  height: 48px;
  width: 48px;
  @media screen and (max-width: 767px) {
    position: absolute;
    top: 392px;
    left: 50%;
    transform: translateX(-50%);
  }
`;
export const AddMeals = styled.button`
  @media screen and (min-width: 768px) {
    display: none;
  }
  background-color: #fc842d;
  border: none;
  border-radius: 100%;
  box-shadow: 0 4px 10px rgb(252 132 45 / 50%);
  color: #fff;
  font-size: 24px;
  height: 48px;
  width: 48px;
  width: 176px;
  border-radius: 24px;
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.04em;
  justify-content: center;
  @media screen and (max-width: 767px) {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 392px;
  }
`;
export const StartBtn = styled.button`
  background-color: #fc842d;
  border: none;
  border-radius: 100%;
  box-shadow: 0 4px 10px rgb(252 132 45 / 50%);
  color: #fff;
  font-size: 24px;
  height: 48px;
  width: 48px;
  @media screen and (max-width: 767px) {
    position: absolute;
    top: 478px;
    left: 50%;
    transform: translateX(-50%);
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const DelMeal = styled.button`
  background: none;
  border: none;
  margin-left: 10px;
  outline: none;
  @media screen and (max-width: 767px) {
    margin: auto 0;
    margin-left: 10px;
  }
`;

export const ProductsList = styled.ul`
  // margin-top: 20px;
`;

export const CurrenProduct = styled.li`
  align-items: end;
  display: flex;
  margin-bottom: 8px;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;
  color: #212121;
  font-weight: 400;
`;

export const CurrenProductName = styled.p`
  padding-bottom: 10px;
  width: 304px;
  border-bottom: 1px solid #e0e0e0;
  margin-right: 50px;
  @media screen and (max-width: 767px) {
    padding-bottom: 10px;
    margin-right: 0;
  }
`;

export const CurrenProductWeight = styled.p`
  padding-bottom: 10px;
  width: 105px;
  border-bottom: 1px solid #e0e0e0;
  margin-right: 50px;
  text-align: right;
  @media screen and (max-width: 767px) {
    padding-bottom: 10px;
    margin-right: 0;
  }
`;

export const CurrenProductCal = styled.p`
  padding-bottom: 10px;
  width: 105px;
  border-bottom: 1px solid #e0e0e0;
  margin-right: 32px;
  text-align: right;
  @media screen and (max-width: 767px) {
    padding-bottom: 10px;
    margin-right: 0;
  }
`;

export const ProductsBox = styled.div`
  z-index: 3;
  position: absolute;
  left: 12px;
  top: 268px;

  @media screen and (min-width: 768px) {
    position: absolute;
    left: 24px;
    top: 217px;
    width: 395px;
  }
  @media screen and (min-width: 1280px) {
    top: 421px;
    width: 395px;
    left: 7px;
  }
`;

export const ReturnButton = styled.button`
  position: absolute;
  top: -6px;
  z-index: 10;
  border: none;
  height: 25px;
  border: none;
  background: transparent;
`;

export const ProductBox = styled.div`
  @media screen and (max-width: 767px) {
    margin-top: 0px;

    height: 450px;
  }
  margin-top: 90px;
  height: 200px;
  overflow: auto;
  @media screen and (min-width: 1280px) {
    margin-top: 60px;
    height: 280px;
    width: 660px;
    padding-right: 40px;
  }
`;
