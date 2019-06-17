import styled from 'styled-components';

export const EditTodoWrapper = styled.li`
  display: flex;
  justify-content: space-between;
`;

export const Left = styled.div`
  display:flex;
  justify-content: space-between;
`;

export const PriorityInput = styled.input`
  font-family: 'Noto Sans KR';
  outline: none;
  border: 1px solid #555;
  border-radius: 4px;
  width: 30px;

  &:focus {
    border: 2px solid #555;
  }
`;

export const TitleInput = styled.input`
  font-family: 'Noto Sans KR';
  outline: none;
  border: 1px solid #555;
  border-radius: 4px;

  &:focus {
    border: 2px solid #555;
  }
`;

export const DescriptionInput = styled.input`
  font-family: 'Noto Sans KR';
  outline: none;
  border: 1px solid #555;
  border-radius: 4px;

  &:focus {
    border: 2px solid #555;
  }
`;

export const SendBtn = styled.button`
  padding: 8px;
  border: none;
  background-color: #FF2D54;
  color: white;

  &:hover {
    background-color: #C4002C;
  }
`;
