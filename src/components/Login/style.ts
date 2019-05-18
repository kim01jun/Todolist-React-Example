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

export const LoginModal = styled.div`
  background-color: #fefefe;
  margin: 17% auto;
  padding: 30px;
  border: 1px solid #888;
  width: 30%;
  text-align: center;
  border-radius: 10px;
`;

export const ExplainLogin = styled.p`
  font-family: 'Noto Sans KR';
  font-weight: 900;
  font-size: 30px;
  margin-bottom: 0px;
`;

export const ExplainTodoList = styled.p`
  font-family: 'Noto Sans KR';
  font-size: 20px;
  margin-top: 0px;
  margin-bottom: 50px;
`;

export const FacebookLoginBtn = styled.button`
  background-color: #3B5998;
  width: 90%;
  height: 50px;
  font-familty: 'Noto Sans KR';
  font-weight: 700;
  font-size: 20px;
  color: white;
  border: none;
  border-radius: 4px;

  &:hover {
    cursor: pointer;
    background: #003069;
  }
`;