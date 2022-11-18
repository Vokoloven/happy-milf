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
  width: 512px;
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
  font-size: 34px;
  line-height: 41px;
  width: 608px;
  color: #212121;
  margin-bottom: 64px;
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

export const Section = styled.section`
  display: flex;
  background-color: white;
  // padding-top: 147px;
  // position: relative;

  padding: 40px 20px 0px 20px;
  @media screen and (min-width: 768px) {
    padding: 160px 32px 0px 32px;
  }
  @media screen and (min-width: 768px) {
    padding: 160px 16px 0px 16px;
  }
`;
