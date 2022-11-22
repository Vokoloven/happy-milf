import styled from 'styled-components';

export const Form = styled.form`
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  gap: 32px;
  // width: 512px;
  @media screen and (max-width: 767px) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media screen and (min-width: 768px) {
    width: 512px;
  }
  @media screen and (min-width: 1280px) {
    gap: 40px;
    padding-bottom: 10px;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;
  width: 240px;
  color: #9b9faa;
  position: relative;
  @media screen and (min-width: 480px) {
    margin: auto;
  }
  @media screen and (min-width: 768px) {
    margin: inherit;
  }
`;

export const RadioBtnBox = styled.div`
  position: absolute;
  display: flex;
  bottom: 155px;
  right: 0;
  width: 240px;
  @media screen and (min-width: 768px) {
    position: absolute;
    bottom: 20px;
  }
`;

export const Title = styled.h1`
  @media screen and (max-width: 767px) {
    font-size: 18px;
    line-height: 26px;
  }
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 34px;
  line-height: 41px;
  // width: 608px;
  color: #212121;
  margin-bottom: 64px;
  @media screen and (min-width: 480px) {
    display: flex;
    justify-content: center;
  }
  @media screen and (min-width: 768px) {
    justify-content: center;
    width: 530px;
  }
`;

export const Input = styled.input`
  border: none;
  outline: none;
  background-color: transparent;
  border-bottom: 1px solid #9b9faa;
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 17px;
  letter-spacing: 0.04em;
  color: #7c7c7c;
  padding-left: 20px;
`;

export const StartBtn = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
  @media screen and (min-width: 1280px) {
    margin-left: auto;
    margin-bottom: 0px;
  }
  @media screen and (min-width: 768px) {
    position: relative;
    left: -287px;
    bottom: 6px;
  }
  @media screen and (max-width: 480px) {
    margin-top: 40px;
    margin-bottom: 0px;
  }
  margin-top: 103px;
  margin-bottom: 111px;
  width: 210px;
  height: 43px;
  background: #fc842d;
  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  border-radius: 30px;
  border: none;

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
  justify-content: center;
  transition: 250ms;

  &:hover,
  &:focus {
    background: #f5f5f5;
    color: #fc842d;
  }
`;
