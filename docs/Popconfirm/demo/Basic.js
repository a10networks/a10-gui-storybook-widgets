import * as React from 'react'
import { A10Popconfirm } from '../../../src'

function confirm(e) {
  console.log(e);
  message.success('Click on Yes');
}

function cancel(e) {
  console.log(e);
  message.error('Click on No');
}
export default class App extends React.Component {
  render() {
    return (
      <A10Popconfirm title="Are you sure delete this task?" onConfirm={confirm} onCancel={cancel} okText="Yes" cancelText="No">
        <a href="#">Delete</a>
      </A10Popconfirm>
    );
  }
}
