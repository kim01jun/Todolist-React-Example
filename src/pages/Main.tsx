import React, { Component } from 'react';
import Header from '../components/Header';
import Login from '../components/Login/Login';
import Todos from '../components/Todos';

interface MainProps { }

interface MainState {
  isLogin: boolean;
}

export default class Main extends Component<MainProps, MainState> {
  constructor(props: MainProps) {
    super(props);
    this.state = {
      isLogin: false,
    };
  }

  render() {
    return (
      <div>
        <Header />
        <Todos />
        {!this.state.isLogin && <Login />}
      </div>
    );
  }
}
