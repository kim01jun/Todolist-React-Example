import styled from 'styled-components';

export const EditTodoWrapper = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  flex: 3;
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
`;

export const PriorityInput = styled.input`
  font-family: 'Noto Sans KR';
  outline: none;
  border: 1px solid #555;
  border-radius: 4px;
  padding-left: 5px;
  width: 25px;
  height: 20px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 80%;
  margin-left: 30px;
`;

export const TitleInput = styled.input`
  font-family: 'Noto Sans KR';
  outline: none;
  border: 1px solid #555;
  border-radius: 4px;
  width: 30%;
  padding-left: 5px;
  margin-bottom: 5px;
`;

export const DescriptionInput = styled.input`
  font-family: 'Noto Sans KR';
  outline: none;
  border: 1px solid #555;
  border-radius: 4px;
  padding-left: 5px;
`;

export const SendBtn = styled.button`
  padding: 8px;
  border: none;
  background-color: #FF2D54;
  color: white;
  margin-left: 50px;

  &:hover {
    background-color: #C4002C;
  }
`;
