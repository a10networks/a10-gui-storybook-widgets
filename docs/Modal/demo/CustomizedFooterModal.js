
import * as React from 'react'
import { A10Modal, A10Button } from '../../../src'

export default class App extends React.Component {
  state = {
    ModalText: 'The dialog will change to loading state after clicking submit button. ',
    visible: false,
    loading: false,
  }
  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  handleOk = (e) => {
    this.setState({
      ModalText: 'When the loading is over after 3 seconds, the modal dialog will be closed.',
      loading: true,
    });
    setTimeout(() => {
      this.setState({
        visible: false,
        loading: false,
      });
    }, 3000);
  }
  handleCancel = (e) => {
    this.setState({
      visible: false,
    });
  }

  render() {
    return (
      <div>
        <A10Button type="primary" onClick={this.showModal}>Customized Footer Modal</A10Button>
        <A10Modal
          title="Customized Footer Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <A10Button key="submit" type="primary" loading={this.state.loading} onClick={this.handleOk}>
              Submit
            </A10Button>,
            <A10Button key="back" onClick={this.handleCancel}>Return</A10Button>,
          ]}
        >
          <p>{this.state.ModalText}</p>
        </A10Modal>
      </div>
    );
  }
}

