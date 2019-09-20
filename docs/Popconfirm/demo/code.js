
export const basicCode = `import * as React from 'react'
import { A10Popconfirm } from 'a10-gui-widgets'

export default class App extends React.Component {
  function confirm(e) {
    console.log(e);
    message.success('Click on Yes');
  }
  
  function cancel(e) {
    console.log(e);
    message.error('Click on No');
  }
  
  render() {
    return (
      <A10Popconfirm title="Are you sure delete this task?" onConfirm={confirm} onCancel={cancel} okText="Yes" cancelText="No">
        <a href="#">Delete</a>
      </A10Popconfirm>
    );
  }
}
`

export const localeTextCode = `
import { A10Popconfirm } from 'a10-gui-widgets';

ReactDOM.render(
  <A10Popconfirm title="Are you sure？" okText="Yes" cancelText="No">
    <a href="#">Delete</a>
  </A10Popconfirm>,
  mountNode
);
`

export const placementCode = `import * as React from 'react'
import { A10Popconfirm, A10Message, A10Button } from 'a10-gui-widgets'

export default class App extends React.Component {

  render() {
    return (
      <div className="demo">
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
            <A10Button>Left</A10Button>
          </A10Popconfirm>
          <A10Popconfirm placement="leftBottom" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
            <A10Button>LB</A10Button>
          </A10Popconfirm>
        </div>
        <div style={{ width: 70, marginLeft: 304 }}>
          <A10Popconfirm placement="rightTop" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
            <A10Button>RT</A10Button>
          </A10Popconfirm>
          <A10Popconfirm placement="right" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
            <A10Button>Right</A10Button>
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
            <A10Button>Bottom</A10Button>
          </A10Popconfirm>
          <A10Popconfirm placement="bottomRight" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
            <A10Button>BR</A10Button>
          </A10Popconfirm>
        </div>
      </div>
    );
  }
}
`
export const conditionalTriggerCode = `
import { A10Popconfirm, A10Switch, A10Message } from 'a10-gui-widgets'

class App extends React.Component {
  state = {
    visible: false,
    condition: true, // Whether meet the condition, if not show popconfirm.
  }

  changeCondition = (value) => {
    this.setState({ condition: value });
  }

  confirm = () => {
    this.setState({ visible: false });
    A10Message.success('Next step.');
  }

  cancel = () => {
    this.setState({ visible: false });
    A10Message.error('Click on cancel.');
  }

  handleVisibleChange = (visible) => {
    if (!visible) {
      this.setState({ visible });
      return;
    }
    // Determining condition before show the popconfirm.
    console.log(this.state.condition);
    if (this.state.condition) {
      this.confirm(); // next step
    } else {
      this.setState({ visible }); // show the popconfirm
    }
  }

  render() {
    return (
      <div>
        <A10Popconfirm
          title="Are you sure delete this task?"
          visible={this.state.visible}
          onVisibleChange={this.handleVisibleChange}
          onConfirm={this.confirm}
          onCancel={this.cancel}
          okText="Yes"
          cancelText="No"
        >
          <a href="#">Delete a task</a>
        </A10Popconfirm>
        <br />
        <br />
        Whether directly execute：<A10Switch defaultChecked onChange={this.changeCondition} />
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
`

export const customizeIconCode = `
import { A10Popconfirm, A10Icon } from 'a10-gui-widgets';

ReactDOM.render(
  <A10Popconfirm title="Are you sure？" icon={<A10Icon type="question-circle-o" style={{ color: 'red' }} />}>
    <a href="#">Delete</a>
  </A10Popconfirm>,
  mountNode
);
`