
import * as React from 'react'
import { A10Message, A10Button } from '../../../src'

const close = () => {
  console.log('this message is closed');
}

export class SuccessMessage extends React.Component {
  render() {
    const success = () => {
      A10Message.success('This is a message of success', close);
    };
    return (
      <A10Button type='primary' onClick={success}> Success </A10Button>
    );
  }
}

export class DurationMessage extends React.Component {
  render() {
    const info = () => {
      A10Message.error('This is a prompt message for error, and it will disappear in 10 seconds', 10, close);
    };
    return (
      <A10Button type='primary' onClick={info}> Duration </A10Button>
    );
  }
}


export class LoadingMessage extends React.Component {
  render() {
    const load = () => {
      const hide = A10Message.loading('Action in progress..', 0);
      setTimeout(hide, 2500);
    };
    return (
      <A10Button type='primary' onClick={load}> Loading </A10Button>
    );
  }
}
