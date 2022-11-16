import styled from 'styled-components';

export const Backdrop = styled.div`
  background: rgba(33, 33, 33, 0.12);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const Modal = styled.div`
  display: block;
  width: 672px;
  height: 573px;
  box-shadow: 0px 22px 40px rgba(0, 0, 0, 0.1);
  background-color: white;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
