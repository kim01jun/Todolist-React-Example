import React, { Component } from 'react';
import {
  Todo, CircleBtn, Title, Content, TitleContent, Left, Right, DueDate, DeleteBtn
} from './style';

interface TodoItemProps {
  key: string;
  id: string;
  title: string;
  content: string;
  priority: number;
  dueDate: Date;
  done: boolean;

  complete: (todoId: string, before: boolean) => void;
  delete: (todoId: string) => void;
}

interface TodoItemState {  }

export default class TodoItem extends Component<TodoItemProps, TodoItemState> {
  render() {
    return (<Todo>
        <Left>
          <CircleBtn
            onClick={e => this.props.complete(this.props.id, this.props.done)}
            priority={this.props.priority} />
            <TitleContent>
              <Title>{this.props.title}</Title>
              <Content>{this.props.content}</Content>
            </TitleContent>
        </Left>
        <Right>
          <DueDate>{new Date(this.props.dueDate).toLocaleString()}</DueDate>
          <DeleteBtn onClick={e => this.props.delete(this.props.id)}>×</DeleteBtn>
        </Right>
      </Todo>);
  }
}
