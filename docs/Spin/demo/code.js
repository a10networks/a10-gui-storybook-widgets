
export const basicCode = `import * as React from 'react'
import { A10Spin } from 'a10-gui-widgets'

const Example = () => {
  return (
    <A10Spin />
  )
}

ReactDOM.render(<Example />, mountNode)`

export const sizeCode = `import * as React from 'react'
import { A10Spin } from 'a10-gui-widgets'

const Example = () => {
  return (
    <div>
      <div><A10Spin size="small" /></div>
      <div><A10Spin /></div>
      <div><A10Spin size="large" /></div>
    </div>
  )
}

ReactDOM.render(<Example />, mountNode)`

export const insideContentCode = `
import { A10Spin } from 'a10-gui-widgets'

ReactDOM.render(
  <div className="example">
    <A10Spin />
  </div>,
  mountNode
);
`

export const embeddedModeCode = `import { A10Spin, A10Switch, A10Alert } from 'a10-gui-widgets';

class Card extends React.Component {
  state = { loading: false }

  toggle = (value) => {
    this.setState({ loading: value });
  }

  render() {
    return (
      <div>
        <A10Spin spinning={this.state.loading}>
          <A10Alert
            message="Alert message title"
            description="Further details about the context of this alert."
            type="info"
          />
        </A10Spin>
        <div style={{ marginTop: 16 }}>
          Loading state：<A10Switch checked={this.state.loading} onChange={this.toggle} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Card />, mountNode);`

export const customizedCode = `
import { A10Spin, A10Alert } from 'a10-gui-widgets'

ReactDOM.render(
  <A10Spin tip="Loading...">
    <A10Alert
      message="Alert message title"
      description="Further details about the context of this alert."
      type="info"
    />
  </A10Spin>,
  mountNode
);

`

export const customSpinningCode = `
import { A10Spin, A10Icon } from 'a10-gui-widgets';

const antIcon = <A10Icon type="loading" style={{ fontSize: 24 }} spin />;

ReactDOM.render(<A10Spin indicator={antIcon} />, mountNode);
`

export const delayCode = `
import { A10Spin, A10Alert, A10Switch } from 'a10-gui-widgets';

class Card extends React.Component {
  state = { loading: false }

  toggle = (value) => {
    this.setState({ loading: value });
  }

  render() {
    const container = (
      <A10Alert
        message="Alert message title"
        description="Further details about the context of this alert."
        type="info"
      />
    );
    return (
      <div>
        <A10Spin spinning={this.state.loading} delay={500}>{container}</A10Spin>
        <div style={{ marginTop: 16 }}>
          Loading state：<A10Switch checked={this.state.loading} onChange={this.toggle} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Card />, mountNode);

`