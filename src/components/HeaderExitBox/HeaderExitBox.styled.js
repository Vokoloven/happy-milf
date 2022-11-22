import styled from '@emotion/styled';

export const ExitBox = styled.div`
  display: flex;
  margin-left: auto;
  position: relative;
  z-index: 10;

  @media screen and (max-width: 529px) {
    position: absolute;
    top: 80px;
    left: 0;
    background-color: #eff1f3;
    width: 100%;
    height: 40px;
    align-items: center;
    margin-left: auto;
    justify-content: end;
    padding-right: 15px;
    padding-left: 15px;
  }
`;

export const NicName = styled.p`
  @media screen and (min-width: 530px) {
    padding-right: 90px;
  }
  // @media screen and (min-width: 1280px) {
  //   padding-right: 0px;
  // }
  pointer-events: none;
  margin-right: 20px;
  position: relative;
  font-family: 'Gotham Pro';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 13px;
  text-align: right;
  letter-spacing: 0.04em;

  color: #212121;

  &::after {
    pointer-events: none;
    position: absolute;
    content: '';
    height: 32px;
    width: 2px;
    background-color: #e0e0e0;
    top: 50%;
    right: -20px;
    transform: translateY(-50%);
  }
`;

export const ExitBtn = styled.button`
  border: none;
  background-color: transparent;
  padding: 0px;
  margin-left: 20px;
  font-family: 'Gotham Pro';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 13px;
  letter-spacing: 0.04em;

  color: #9b9faa;
  transition: 250ms;
  &:hover,
  &:focus {
    scale: 1.05;
    color: #212121;
  }
`;
