import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  margin-top: 60px;
  align-items: baseline;
`;

export const WrapperProductName = styled.div`
  margin-right: 48px;
  margin-bottom: 40px;
`;

export const ProductName = styled.input`
  outline: none;
  border: none;
  width: 240px;
  border-bottom: 1px solid #e0e0e0;
  height: 48px;
  letter-spacing: 1px;
  font-weight: 700;
  font-size: 14px;
  color: #9b9faa;

  &:focus {
    border-bottom: 1px solid #fc842d;
  }
`;

export const WrapperGrams = styled.div`
  margin-right: 60px;
  margin-bottom: 40px;
`;

export const Grams = styled.input`
  outline: none;
  text-align: right;
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

export const DelMeal = styled.button`
  background: none;
  border: none;
  margin-left: 10px;
  outline: none;
`;

export const ProductsList = styled.ul`
  margin-top: 40px;
`;

export const CurrenProduct = styled.li`
  display: flex;
  margin-bottom: 15px;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;
  color: #212121;
  font-weight: 400;
`;

export const CurrenProductName = styled.p`
  padding-bottom: 20px;
  width: 304px;
  border-bottom: 1px solid #e0e0e0;
  margin-right: 50px;
`;

export const CurrenProductWeight = styled.p`
  padding-bottom: 20px;
  width: 105px;
  border-bottom: 1px solid #e0e0e0;
  margin-right: 50px;
  text-align: right;
`;

export const CurrenProductCal = styled.p`
  padding-bottom: 20px;
  width: 105px;
  border-bottom: 1px solid #e0e0e0;
  margin-right: 32px;
  text-align: right;
`;
