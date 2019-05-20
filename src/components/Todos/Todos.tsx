import axios from 'axios';
import React, { Component } from 'react';
import { SERVICE_URI } from '../../Constants';
import TodoItem from '../TodoItem/TodoItem';
import { TodoList } from './style';

interface TodosProps {
  token: string;
  userid: string;
}

interface Todo {
  _id: string;
  title: string;
  content: string;
  priority: number;
  dueDate: Date;
  done: boolean;
}

interface TodosState {
  todos: Todo[];
}

interface TodoResponse {
  todos: Todo[];
}

export default class Todos extends Component<TodosProps, TodosState> {
  constructor(props: TodosProps) {
    super(props);

    this.state = {
      todos: [],
    };
  }

  renderTodos() {
    return this.state.todos.map((todo) => {
      return (<TodoItem
        key={todo._id}
        id={todo._id}
        title={todo.title}
        content={todo.content}
        priority={todo.priority}
        dueDate={todo.dueDate}
        done={todo.done} />);
    });
  }

  async componentDidMount() {
    try {
      const todos = await axios.get<TodoResponse>(`${SERVICE_URI}/api/${this.props.userid}`, {
        headers: { Authorization: this.props.token },
      });

      this.setState({ todos: todos.data.todos });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <TodoList>
        {this.renderTodos()}
      </TodoList>
    );
  }
}
