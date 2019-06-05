import styled from 'styled-components';

interface IColors {
  border: string;
  background: string;
  hover: string;
}

interface IPriorities {
  [priority: number]: IColors;
}

const COLOR: IPriorities = {
  1: {
    border: 'rgb(255, 0, 0)',
    background: 'rgba(255, 0, 0, 0.2)',
    hover: 'rgba(255, 0, 0, 0.4)',
  },
  2: {
    border: 'rgb(244,156,24)',
    background: 'rgba(244,156,24, 0.2)',
    hover: 'rgba(244,156,24, 0.4)',
  },
  3: {
    border: 'rgb(64,115,214)',
    background: 'rgba(64,115,214, 0.2)',
    hover: 'rgba(64,115,214, 0.4)',
  },
  4: {
    border: 'rgb(128, 128, 128)',
    background: 'rgba(0, 0, 0, 0.2)',
    hover: 'rgba(0, 0, 0, 0.4)',
  },
};

interface CircleBtnProps {
  priority: number;
}

export const Todo = styled.li`
  display: flex;
  font-family: 'Noto Sans KR';
  justify-content: space-between;
  padding: 10px;
`;

export const CircleBtn = styled.button<CircleBtnProps>`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  border: 2px solid ${props => COLOR[props.priority].border};
  background-color: ${props => COLOR[props.priority].background};

  &:hover {
    background-color: ${props => COLOR[props.priority].hover}
  }
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.p`
  margin: 0;
  text-align: start;
  font-weight: 700;
`;

export const Content = styled.span`
  font-weight: 300;
  text-align: start;
`;

export const TitleContent = styled.span`
  display: flex;
  margin-left: 30px;
  flex-direction: column;
  justify-content: flex-start;
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
`;

export const DueDate = styled.span`
  font-weight: 300;
  margin-right: 30px;
`;

export const DeleteBtn = styled.button`
  border: none;
  background-color: white;
  width: 20px;
  height: 20px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.4)
  }
`;
