import styled from 'styled-components';

export const Form = styled.form`
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

export const Title = styled.h1`
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 34px;
  line-height: 41px;
  width: 608px;
  color: #212121;
`;
