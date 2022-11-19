import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  margin-top: 60px;
  align-items: baseline;
`;

export const WrapperProductName = styled.div`
  margin-right: 48px;
`;

export const ProductName = styled.input`
  margin-bottom: 40px;
  border: none;
  width: 240px;
  border-bottom: 1px solid #e0e0e0;
  height: 48px;
  letter-spacing: 1px;
  font-weight: 700;
  font-size: 14px;
  color: #9b9faa;
`;

export const WrapperGrams = styled.div`
  margin-right: 60px;
`;

export const Grams = styled.input`
  margin-bottom: 40px;
  text-align: right;
  width: 105px;
  border: none;
  border-bottom: 1px solid #e0e0e0;
  height: 48px;
  letter-spacing: 1px;
  font-weight: 700;
  font-size: 14px;
  color: #9b9faa;
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
`;