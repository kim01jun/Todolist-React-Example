import axios, { AxiosResponse } from 'axios';
import React, { Component } from 'react';
import { SERVICE_URI } from '../../Constants';
import TodoItem from '../TodoItem/TodoItem';
import EditTodo from '../EditTodo/EditTodo';
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
  dueDate?: Date;
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
        done={todo.done}
        complete={this.complete.bind(this)}
        delete={this.delete.bind(this)} />);
    });
  }

  addTodo(title: string, content: string, priority: number) {
    axios.post<TodoResponse>(`${SERVICE_URI}/api/${this.props.userid}`, {
      title,
      content,
      priority,
    }, {
      headers: { Authorization: this.props.token },
    }).then(res => this.setState({ todos: res.data.todos }));
  }

  complete(todoId: string, before: boolean) {
    axios.patch<TodoResponse>(`${SERVICE_URI}/api/${this.props.userid}/${todoId}`, {
      done: !before,
    }, {
      headers: { Authorization: this.props.token },
    }).then(res => this.setState({ todos: res.data.todos }));
  }

  delete(todoId: string) {
    axios.delete(`${SERVICE_URI}/api/${this.props.userid}/${todoId}`, {
      headers: { Authorization: this.props.token },
    }).then((res: AxiosResponse<TodoResponse>) => this.setState({ todos: res.data.todos }));
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
        <EditTodo
          userid={this.props.userid}
          addTodo={this.addTodo.bind(this)}
        />
      </TodoList>
    );
  }
}
