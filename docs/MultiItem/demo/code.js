
export const BasicModalCode =`import { A10Modal, A10Button } from 'a10-gui-widgets'

class Example extends React.Component {
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

ReactDOM.render(<Example />, mountNode);`


export const CustomizedFooterModalCode =`import { A10Modal, A10Button } from 'a10-gui-widgets'

class Example extends React.Component {
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
            <A10Button key="back" onClick={this.handleCancel}>Return</A10Button>,
            <A10Button key="submit" type="primary" loading={this.state.loading} onClick={this.handleOk}>
              Submit
            </A10Button>,
          ]}
        >
          <p>{this.state.ModalText}</p>
        </A10Modal>
      </div>
    );
  }
}
ReactDOM.render(<Example />, mountNode);`

export const InformationModalCode =`import { A10Modal, A10Button } from 'a10-gui-widgets'

class Example extends React.Component {
  info = () => {
    A10Modal.info({
      title: 'This is a notification message',
      content: (
        <div>
          <p>This is a notification message</p>
        </div>
      ),
      onOk() {},
    });
  }

  success = () => {
    A10Modal.success({
      title: 'This is a success message',
      content: (
        <div>
          <p>This is a success message</p>
        </div>
      ),
      onOk() {},
    });
  }

  warning = () => {
    A10Modal.warning({
      title: 'This is a warning message',
      content: (
        <div>
          <p>This is a warning message</p>
        </div>
      ),
      onOk() {},
    });
  }

  error = () => {
    A10Modal.error({
      title: 'This is an error message',
      content: (
        <div>
          <p>This is an error message</p>
        </div>
      ),
      onOk() {},
    });
  }

  confirm = () => {
    A10Modal.confirm({
      title: 'Are you sure delete this task?',
      content: 'This is a confirm modal',
      okText: 'Yes',
      okType: 'primary',
      cancelText: 'No',
      onOk() {
        console.log('OK');
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }


  render() {
    return (
      <div>
        <A10Button onClick={this.info}>Info</A10Button>&nbsp;&nbsp;
        <A10Button onClick={this.success}>Success</A10Button>&nbsp;&nbsp;
        <A10Button onClick={this.warning}>Warning</A10Button>&nbsp;&nbsp;
        <A10Button onClick={this.error}>Error</A10Button>&nbsp;&nbsp;
        <A10Button onClick={this.confirm}>Confirm</A10Button>
      </div>
    );
  }
}
ReactDOM.render(<Example />, mountNode);`
