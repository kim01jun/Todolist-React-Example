import React, { Component } from 'react';
import Header from '../components/Header/Header';
import Login from '../components/Login/Login';
import Start from '../components/Start/Start';
import Todos from '../components/Todos/Todos';

interface MainProps { }

interface MainState {
  isLogin: boolean;
  token?: string;
  userid?: string;
  name?: string;
}

export default class Main extends Component<MainProps, MainState> {
  constructor(props: MainProps) {
    super(props);

    const usp = new URLSearchParams(window.location.search);
    const hasQuerys = usp.has('token') && usp.has('userid') && usp.has('name');
    const hasLocal = !!localStorage['token'] && !!localStorage['userid'] && !!localStorage['name'];
    if (hasQuerys) {
      localStorage['token'] = usp.get('token');
      localStorage['userid'] = usp.get('userid');
      localStorage['name'] = usp.get('name');
    }
    this.state = {
      isLogin:  hasLocal || hasQuerys,
      token: localStorage['token'],
      userid: localStorage['userid'],
      name: localStorage['name'],
    };
  }

  render() {
    return (
      <div>
        <Header />
        <Todos token={this.state.token as string} userid={this.state.userid as string}/>
        {this.state.isLogin ? <Start name={this.state.name as string}/> : <Login />}
      </div>
    );
  }
}
