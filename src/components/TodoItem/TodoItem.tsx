import React, { Component } from 'react';
import {
  Todo, CircleBtn, Title, Description, Content, Left, Right, DueDate, DeleteBtn,
} from './style';

interface TodoItemProps {
  key: string;
  id: string;
  title: string;
  description: string;
  priority: number;
  dueDate?: Date;
  done: boolean;

  complete: (todoId: string, before: boolean) => void;
  delete: (todoId: string) => void;
}

interface TodoItemState {  }

export default class TodoItem extends Component<TodoItemProps, TodoItemState> {
  render() {
    return (<Todo>
      <Left>
        <CircleBtn onClick={e => this.props.complete(this.props.id, this.props.done)}
          priority={this.props.priority} />
        <Content>
          <Title>{this.props.title}</Title>
          <Description>{this.props.description}</Description>
        </Content>
      </Left>
      <Right>
        {this.props.dueDate && <DueDate>{new Date(this.props.dueDate).toLocaleString()}</DueDate>}
        <DeleteBtn onClick={e => this.props.delete(this.props.id)}>×</DeleteBtn>
      </Right>
    </Todo>);
  }
}
