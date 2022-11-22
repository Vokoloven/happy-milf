import styled from 'styled-components';

export const chooseAvatar = styled.input`
  width: 30px;
`;

export const Input = styled.input`
  position: absolute;
  width: 60px;
  height: 60px;
  padding: 0;
  bottom: 0;
  border-radius: 50%;
  opacity: 0;
  cursor: pointer;
`;

export const AvatarBox = styled.div`
  border-radius: 10px;
  box-shadow: inset 0px 0px 8px grey;
  z-index: 20;
  position: absolute;
  right: 60px;
  @media screen and (min-width: 530px) {
    right: 150px;
  }
  @media screen and (min-width: 580px) {
    right: 170px;
  }
  @media screen and (min-width: 1280px) {
    top: 108px;
    right: 87px;
  }
  // pointer-events: none;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AvatarImg = styled.img`
  pointer-events: none;
  width: 60px;
  height: 60px;
  border-radius: 10px;
`;
