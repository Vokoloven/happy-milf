import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Form = styled.form`
  position: relative;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  gap: 32px;
  width: 512px;
  @media screen and (max-width: 767px) {
    width: auto;
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
`;

export const RadioBtnBox = styled.div`
  position: absolute;
  display: flex;
  bottom: 155px;
  right: 0;
  width: 240px;
`;

export const Title = styled.h1`
  font-family: 'Gotham Pro';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 13px;
  letter-spacing: 0.04em;
  text-transform: uppercase;

  color: #fc842d;
  margin-bottom: 60px;
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

export const LogIntBtn = styled.button`
  display: block;
  margin-top: 60px;
  // margin-bottom: 248px;
  width: 182px;
  height: 43px;
  background: #fc842d;
  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  border-radius: 30px;
  border: none;

  @media screen and (max-width: 767px) {
    margin-bottom: 20px;
    margin-left: auto;
    margin-right: auto;
  }
  @media screen and (max-width: 767px) {
    margin-left: auto;
  }

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
export const RegisterBtn = styled(Link)`
  @media screen and (max-width: 767px) {
    position: static;
    margin-left: auto;
    margin-right: auto;
  }
  @media screen and (min-width: 768px) {
    position: absolute;
    bottom: 495px;
    left: 234px;
  }
  position: absolute;
  @media screen and (min-width: 1280px) {
    bottom: 244px;
  }
  left: 213px;
  display: block;
  width: 182px;
  height: 43px;
  background: white;
  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  border-radius: 30px;
  border: none;
  position: absolute;

  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.04em;
  color: #fc842d;
  justify-content: center;
  transition: 250ms;
  border: 1px solid #fc842d;

  &:hover,
  &:focus {
    background: #fc842d;
    color: white;
  }
`;

export const Section = styled.section`
  display: flex;
  background-color: white;
  padding-top: 147px;
`;
