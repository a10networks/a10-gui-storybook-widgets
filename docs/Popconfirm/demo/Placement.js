import * as React from 'react'
import { A10Popconfirm, A10Message, A10Button } from '../../../src'

const text = 'Are you sure delete this task?';

function confirm() {
  A10Message.info('Click on Yes.');
}

export default class App extends React.Component {
  render() {
    return (
      <div className="demo" id="popConfirmPlacementSpecific">
        <div style={{ marginLeft: 70, whiteSpace: 'nowrap' }}>
          <A10Popconfirm placement="topLeft" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
            <A10Button>TL</A10Button>
          </A10Popconfirm>
          <A10Popconfirm placement="top" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
            <A10Button>Top</A10Button>
          </A10Popconfirm>
          <A10Popconfirm placement="topRight" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
            <A10Button>TR</A10Button>
          </A10Popconfirm>
        </div>
        <div style={{ width: 70, float: 'left' }}>
          <A10Popconfirm placement="leftTop" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
            <A10Button>LT</A10Button>
          </A10Popconfirm>
          <A10Popconfirm placement="left" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
            <A10Button>L</A10Button>
          </A10Popconfirm>
          <A10Popconfirm placement="leftBottom" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
            <A10Button>LB</A10Button>
          </A10Popconfirm>
        </div>
        <div style={{ width: 70, marginLeft: 280 }}>
          <A10Popconfirm placement="rightTop" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
            <A10Button>RT</A10Button>
          </A10Popconfirm>
          <A10Popconfirm placement="right" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
            <A10Button>R</A10Button>
          </A10Popconfirm>
          <A10Popconfirm placement="rightBottom" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
            <A10Button>RB</A10Button>
          </A10Popconfirm>
        </div>
        <div style={{ marginLeft: 70, clear: 'both', whiteSpace: 'nowrap' }}>
          <A10Popconfirm placement="bottomLeft" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
            <A10Button>BL</A10Button>
          </A10Popconfirm>
          <A10Popconfirm placement="bottom" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
            <A10Button>Bot</A10Button>
          </A10Popconfirm>
          <A10Popconfirm placement="bottomRight" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
            <A10Button>BR</A10Button>
          </A10Popconfirm>
        </div>
      </div>
    );
  }
}
