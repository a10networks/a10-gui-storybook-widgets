export const basicString = `import { A10Badge} from 'a10-gui-widgets'

const Example = () => {
  return (
    <div>
        <A10Badge count={5}>
            <a href="#" className="head-example" />
        </A10Badge>
        <A10Badge count={0} showZero>
            <a href="#" className="head-example" />
        </A10Badge>
    </div>
  )
}
ReactDOM.render(<Example />, mountNode)`

export const overflowString = `import { A10Badge} from 'a10-gui-widgets'

const Example = () => {
  return (
    <div>
        <A10Badge count={99}>
            <a href="#" className="head-example" />
        </A10Badge>
        <A10Badge count={100}>
            <a href="#" className="head-example" />
        </A10Badge>
        <A10Badge count={99} overflowCount={10}>
            <a href="#" className="head-example" />
        </A10Badge>
        <A10Badge count={1000} overflowCount={999}>
            <a href="#" className="head-example" />
        </A10Badge>
    </div>
  )
}
ReactDOM.render(<Example />, mountNode)`

export const clickableString = `import { A10Badge} from 'a10-gui-widgets'

const Example = () => {
  return (
    <a href="#">
        <A10Badge count={5}>
            <span className="head-example" />
        </A10Badge>
    </a>
  )
}
ReactDOM.render(<Example />, mountNode)`

export const statusString = `import { A10Badge } from 'a10-gui-widgets';

ReactDOM.render(
  <div>
    <A10Badge status="success" />
    <A10Badge status="error" />
    <A10Badge status="default" />
    <A10Badge status="processing" />
    <A10Badge status="warning" />
    <br />
    <A10Badge status="success" text="Success" />
    <br />
    <A10Badge status="error" text="Error" />
    <br />
    <A10Badge status="default" text="Default" />
    <br />
    <A10Badge status="processing" text="Processing" />
    <br />
    <A10Badge status="warning" text="Warning" />
  </div>,
  mountNode
);`

export const standaloneString = `import { A10Badge} from 'a10-gui-widgets'

const Example = () => {
  return (
    <div>
        <A10Badge count={25} />
        <A10Badge count={4} style={{ backgroundColor: '#fff', color: '#999', boxShadow: '0 0 0 1px #d9d9d9 inset' }} />
        <A10Badge count={109} style={{ backgroundColor: '#52c41a' }} />
    </div>
  )
}
ReactDOM.render(<Example />, mountNode)`

export const linkString = `import { A10Badge} from 'a10-gui-widgets'

const Example = () => {
  return (
    <div>
        <A10Badge dot>
            <A10Icon type="notification" />
        </A10Badge>
        <A10Badge dot>
            <a href="#">Link something</a>
        </A10Badge>
    </div>
  )
}
ReactDOM.render(<Example />, mountNode)`


export const dynamicCode = `import * as React from 'react'
import { A10Badge, A10Button, A10Icon, A10Switch } from 'a10-gui-widgets'
const ButtonGroup = A10Button.Group;

 class Example extends React.Component {
  state = {
    count: 5,
    show: true,
  }

  increase = () => {
    const count = this.state.count + 1;
    this.setState({ count });
  }

  decline = () => {
    let count = this.state.count - 1;
    if (count < 0) {
      count = 0;
    }
    this.setState({ count });
  }

  onChange = (show: boolean) => {
    this.setState({ show });
  }

  render() {
    return (
      <div>
        <div>
          <A10Badge count={this.state.count}>
            <a href="#" className="head-example" />
          </A10Badge>
          <A10Button onClick={this.increase}>+</A10Button>
          <A10Button onClick={this.decline}>-</A10Button>
        </div>
        <div style={{ marginTop: 10 }}>
          <A10Badge dot={this.state.show}>
            <a href="#" className="head-example" />
          </A10Badge>
          <A10Switch onChange={this.onChange} checked={this.state.show} />
        </div>
      </div>
    );
  }
}
ReactDOM.render(<Example />, mountNode)`

export const titleCode = `import { A10Badge } from 'a10-gui-widgets';

ReactDOM.render(
  <div>
    <A10Badge count={5} title="Custom hover text">
      <a href="#" className="head-example" />
    </A10Badge>
  </div>,
  mountNode
);`