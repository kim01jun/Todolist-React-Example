import styled from 'styled-components';

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.4);
`;

export const Modal = styled.div`
  background-color: #fefefe;
  margin: 17% auto;
  padding: 30px;
  border: 1px solid #888;
  width: 30%;
  text-align: center;
  border-radius: 10px;
`;
