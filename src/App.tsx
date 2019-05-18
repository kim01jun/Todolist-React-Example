import React, { Component } from 'react';
import Main from './pages/Main';
import { GlobalStyle } from './GlobalStyle';

interface AppProps { }

interface AppState { }

export default class App extends Component<AppProps, AppState> {
  render() {
    return (
    <div>
      <GlobalStyle/>
      <Main/>
    </div>
    );
  }
}
