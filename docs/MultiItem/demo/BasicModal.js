
import * as React from 'react'
import { A10Modal, A10Button } from '../../../src'

export default class App extends React.Component {
  state = {
    ModalText: 'This is a modal dialog which is closed asynchronously.',
    visible: false,
    confirmLoading: false,
  }
  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  handleOk = (e) => {
    this.setState({
      ModalText: 'The modal will be closed after two seconds',
      confirmLoading: true,
    });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false,
      });
    }, 2000);
  }
  handleCancel = (e) => {
    this.setState({
      visible: false,
    });
  }

  render() {
    return (
      <div>
        <A10Button type="primary" onClick={this.showModal}>Basic Modal</A10Button>
        <A10Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>{this.state.ModalText}</p>
        </A10Modal>
      </div>
    );
  }
}

