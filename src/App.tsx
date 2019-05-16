import React, { Component } from 'react';
import Main from './pages/Main';

interface AppProps { }

interface AppState { }

export default class App extends Component<AppProps, AppState> {
  render() {
    return <Main />;
  }
}
