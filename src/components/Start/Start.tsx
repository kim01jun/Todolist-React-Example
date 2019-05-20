import React, { Component } from 'react';
import { ModalBackground, Modal, ExplainTitle, ExplainGeneral } from '../style';
import { StartBtn } from './style';

interface StartProps {
  name: string;
}

interface StartState {
  active: boolean;
}

export default class Start extends Component<StartProps, StartState> {
  constructor(props: StartProps) {
    super(props);

    this.state = { active: true };
    this.start = this.start.bind(this);
  }

  start(e: React.SyntheticEvent) {
    this.setState({ active: false });
  }

  render() {
    return (
      <ModalBackground active={this.state.active}>
        <Modal>
          <ExplainTitle>안녕하세요, {this.props.name}님!</ExplainTitle>
          <ExplainGeneral>당신의 할일을 정리하세요!</ExplainGeneral>
          <StartBtn onClick={this.start}>할일 정리하기</StartBtn>
        </Modal>
      </ModalBackground>
    );
  }
}
