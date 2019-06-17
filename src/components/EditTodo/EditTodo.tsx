import React, { Component } from 'react';
import { EditTodoWrapper, PriorityInput, TitleInput, DescriptionInput, SendBtn } from './style';

interface EditTodoProps {
  userid: string;
  addTodo: (title: string, description: string, priority: number) => void;
}

interface EditTodoState {
  title: string;
  description: string;
  priority: number;
  [state: string]: string | number;
}

export default class EditTodo extends Component<EditTodoProps, EditTodoState> {
  constructor (props: EditTodoProps) {
    super(props);

    this.state = {
      title: '',
      description: '',
      priority: 4,
    };
  }

  handleChange(e: any) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (<EditTodoWrapper>
      <PriorityInput
        type="number"
        name="priority"
        value={this.state.priority}
        onChange={this.handleChange.bind(this)}
        required
        min="1"
        max="4"/>
      <TitleInput
        type="text"
        name="title"
        value={this.state.title}
        onChange={this.handleChange.bind(this)}
        placeholder="제목"
        required />
      <DescriptionInput
        type="text"
        name="description"
        value={this.state.description}
        onChange={this.handleChange.bind(this)}
        placeholder="내용"
        required />
      <SendBtn
        onClick={() => this.props.addTodo(this.state.title,
          this.state.description,
          this.state.priority)}>추가</SendBtn>
    </EditTodoWrapper>
    );
  }
}
