import styled from 'styled-components';

export const Form = styled.form`
  margin-top: 32px;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    position: relative;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    gap: 32px;
    width: 512px;
    margin-top: 68px;
  }

  @media screen and (min-width: 1280px) {
    position: relative;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    gap: 32px;
    width: 512px;
  }
`;

export const DiaryContainer = styled.div`
  // width: 320px;
  margin: 0 auto;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 768px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;
  width: 240px;
  color: #9b9faa;

  &:nth-child(5) {
    margin-bottom: 0;
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    margin-bottom: 0;

    &:nth-child(5) {
      margin-bottom: 10px;
    }
  }

  @media screen and (min-width: 1280px) {
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
  }
`;

export const RadioBtnBox = styled.div`
  position: absolute;
  display: flex;
  bottom: 155px;
  right: 0;
  width: 240px;
`;

export const Title = styled.h1`
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  margin-top: 32px;
  color: #212121;
  width: 280px;
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    margin-top: 0;
    font-family: 'Verdana';
    font-style: normal;
    font-weight: 700;
    font-size: 34px;
    line-height: 41px;
    width: 704px;
  }

  @media screen and (min-width: 1280px) {
    font-family: 'Verdana';
    font-style: normal;
    font-weight: 700;
    font-size: 34px;
    line-height: 41px;
    width: 608px;
    color: #212121;
    margin-bottom: 64px;
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
  color: #e0e0e0;
  padding-left: 20px;
`;

export const StartBtn = styled.button`
  margin: 40px auto;
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

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    margin: 100px 0 0 0;
    display: block;
    margin-left: -268px;
  }

  @media screen and (min-width: 1280px) {
    display: block;
    margin-left: auto;
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
  }
`;

export const Section = styled.section`
  position: relative;
  top: 8px;
  padding-top: 32px;
  background-color: white;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 1px;
  

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    display: flex;
    background-color: white;
    padding-top: 100px;
    padding-bottom: 48px;
    max-width: 1280px;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    background-color: white;
    padding-top: 147px;
    max-width: 1280px;
    padding-left: 16px;
    padding-right: 16px;
  } /* 
*/
`;
