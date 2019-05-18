import React, { Component } from 'react';
import {
  ModalBackground, LoginModal, ExplainLogin, ExplainTodoList, FacebookLoginBtn,
} from './style';

interface LoginProps { }

interface LoginState { }

export default class Login extends Component<LoginProps, LoginState> {
  constructor (props: LoginProps) {
    super(props);

    this.login = this.login.bind(this);
  }

  login() {
    window.location.href = 'https://todolist.kim1jun.xyz/api/auth/login';
  }

  render() {
    return (
      <ModalBackground>
        <LoginModal>
          <ExplainLogin>TodoList에 로그인</ExplainLogin>
          <ExplainTodoList>당신의 할일을 정리하세요!</ExplainTodoList>
          <FacebookLoginBtn onClick={this.login}>Facebook으로 계속</FacebookLoginBtn>
        </LoginModal>
      </ModalBackground>
    );
  }
}
