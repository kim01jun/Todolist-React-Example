import { Moment } from 'moment';
import React, { Component } from 'react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { SingleDatePicker } from 'react-dates';
import {
  EditTodoWrapper, Left, Right,
  PriorityInput, Content, TitleInput, DescriptionInput, SendBtn,
} from './style';

interface EditTodoProps {
  userid: string;
  addTodo: (title: string, description: string, priority: number, dueDate: number) => void;
}

interface EditTodoState {
  title: string;
  description: string;
  priority: number;
  date: Moment | null;
  focused: boolean;
}

export default class EditTodo extends Component<EditTodoProps, EditTodoState> {
  constructor (props: EditTodoProps) {
    super(props);

    this.state = {
      title: '',
      description: '',
      priority: 4,
      date: null,
      focused: false,
    };
  }

  private addTodo(this: Component<EditTodoProps, EditTodoState>) {
    if (this.state.title !== '' && this.state.description !== '' && this.state.date !== null) {
      this.props.addTodo(this.state.title,
        this.state.description,
        this.state.priority,
        this.state.date.valueOf());
      this.setState({
        title: '',
        description: '',
        priority: 4,
        date: null,
        focused: false,
      });
    }
  }

  render() {
    return (<EditTodoWrapper>
      <Left>
        <PriorityInput
          type="number"
          name="priority"
          value={this.state.priority}
          onChange={e => this.setState({ priority: Number(e.target.value) })}
          required
          min="1"
          max="4"/>
        <Content>
          <TitleInput
            type="text"
            name="title"
            value={this.state.title}
            onChange={e => this.setState({ title: e.target.value })}
            placeholder="제목"
            required />
          <DescriptionInput
            type="text"
            name="description"
            value={this.state.description}
            onChange={e => this.setState({ description: e.target.value })}
            placeholder="내용"
            required />
        </Content>
      </Left>
      <Right>
        <SingleDatePicker
          id="date"
          date={this.state.date}
          focused={this.state.focused}
          onDateChange={date => this.setState({ date })}
          onFocusChange={({ focused }) => this.setState({ focused: focused as boolean })} />
        <SendBtn
          onClick={this.addTodo.bind(this)}>추가</SendBtn>
      </Right>
    </EditTodoWrapper>
    );
  }
}
