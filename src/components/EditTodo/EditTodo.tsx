import axios from 'axios';
import React, { Component } from 'react';
import { EditTodoWrapper, CustomInput, SendBtn } from './style';
import { SERVICE_URI } from '../../Constants';

interface EditTodoProps {
  userid: string;
  addTodo: (title: string, content: string, priority: number) => void;
}

interface EditTodoState {
  title: string;
  content: string;
  priority: number;
  [state: string]: string | number;
}

export default class EditTodo extends Component<EditTodoProps, EditTodoState> {
  constructor (props: EditTodoProps) {
    super(props);

    this.state = {
      title: '',
      content: '',
      priority: 4,
    };
  }

  handleChange(e: any) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (<EditTodoWrapper>
      <CustomInput
        type="text"
        name="title"
        value={this.state.title}
        onChange={this.handleChange.bind(this)}
        placeholder="제목"
        required />
      <CustomInput
        type="text"
        name="content"
        value={this.state.content}
        onChange={this.handleChange.bind(this)}
        placeholder="내용"
        required />
      <CustomInput
        type="number"
        name="priority"
        value={this.state.priority}
        onChange={this.handleChange.bind(this)}
        required
        min="1"
        max="4"/>
      <SendBtn
        onClick={e => this.props.addTodo(this.state.title,
          this.state.content,
          this.state.priority)}>추가</SendBtn>
    </EditTodoWrapper>
    );
  }
}
