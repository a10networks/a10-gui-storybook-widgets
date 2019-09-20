
import * as React from 'react'
import { A10Modal, A10Button } from '../../../src'

export default class App extends React.Component {
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

