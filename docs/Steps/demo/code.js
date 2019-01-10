export const basicCode = `import * as React from 'react'
import { A10Steps } from 'a10-gui-widgets'

const Step = A10Steps.Step;

const Example = () => {
  return (
    <A10Steps current={1}>
      <Step title="Finished" description="This is a description." />
      <Step title="In Progress" description="This is a description." />
      <Step title="Waiting" description="This is a description." />
    </A10Steps>
  )
}

ReactDOM.render(<Example />, mountNode)`

export const dotCode = `import * as React from 'react'
import { A10Steps } from 'a10-gui-widgets'

const Step = A10Steps.Step;

const Example = () => {
  return (
    <A10Steps progressDot current={1}>
      <Step title="Finished" description="This is a description." />
      <Step title="In Progress" description="This is a description." />
      <Step title="Waiting" description="This is a description." />
    </A10Steps>
  )
}

ReactDOM.render(<Example />, mountNode)`

export const errorCode = `import * as React from 'react'
import { A10Steps } from 'a10-gui-widgets'

const Step = A10Steps.Step;

const Example = () => {
  return (
    <A10Steps current={1} status="error">
      <Step title="Finished" description="This is a description." />
      <Step title="In Progress" description="This is a description." />
      <Step title="Waiting" description="This is a description." />
    </A10Steps>
  )
}

ReactDOM.render(<Example />, mountNode)`


export const verticalMiniCode = `import * as React from 'react'
import { A10Steps } from 'a10-gui-widgets'

const Step = A10Steps.Step;

const Example = () => {
  return (
    <A10Steps direction="vertical" size="small" current={1}>
      <Step title="Finished" description="This is a description." />
      <Step title="In Progress" description="This is a description." />
      <Step title="Waiting" description="This is a description." />
    </A10Steps>
  )
}

ReactDOM.render(<Example />, mountNode)`

export const miniCode = `import { A10Steps } from 'a10-gui-widgets';

const Step = A10Steps.Step;

ReactDOM.render(
  <A10Steps size="small" current={1}>
    <Step title="Finished" />
    <Step title="In Progress" />
    <Step title="Waiting" />
  </A10Steps>,
  mountNode
);`

export const withIconCode = `import { A10Steps, A10Icon } from 'a10-gui-widgets';

const Step = A10Steps.Step;

ReactDOM.render(
  <A10Steps>
    <Step status="finish" title="Login" icon={<A10Icon type="user" />} />
    <Step status="finish" title="Verification" icon={<A10Icon type="solution" />} />
    <Step status="process" title="Pay" icon={<A10Icon type="loading" />} />
    <Step status="wait" title="Done" icon={<A10Icon type="smile-o" />} />
  </A10Steps>,
  mountNode
);`
export const verticalCode = `import { A10Steps } from 'a10-gui-widgets';

const Step = A10Steps.Step;

ReactDOM.render(
  <A10Steps direction="vertical" current={1}>
    <Step title="Finished" description="This is a description." />
    <Step title="In Progress" description="This is a description." />
    <Step title="Waiting" description="This is a description." />
  </A10Steps>,
  mountNode
);`
export const switchCode = `import { A10Steps, A10Button, A10Message } from 'a10-gui-widgets';

const Step = A10Steps.Step;

const steps = [{
  title: 'First',
  content: 'First-content',
}, {
  title: 'Second',
  content: 'Second-content',
}, {
  title: 'Last',
  content: 'Last-content',
}];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
    };
  }

  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }

  render() {
    const { current } = this.state;
    return (
      <div>
        <A10Steps current={current}>
          {steps.map(item => <Step key={item.title} title={item.title} />)}
        </A10Steps>
        <div className="steps-content">{steps[current].content}</div>
        <div className="steps-action">
          {
            current < steps.length - 1
            && <A10Button type="primary" onClick={() => this.next()}>Next</A10Button>
          }
          {
            current === steps.length - 1
            && <A10Button type="primary" onClick={() => A10Message.success('Processing complete!')}>Done</A10Button>
          }
          {
            current > 0
            && (
            <A10Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
              Previous
            </A10Button>
            )
          }
        </div>
      </div>
    );
  }
}
`
export const customizeDotCode = `import { A10Steps, A10Popover } from 'a10-gui-widgets';

const Step = A10Steps.Step;

const customDot = (dot, { status, index }) => (
  <A10Popover content={<span>step {index} status: {status}</span>}>
    {dot}
  </A10Popover>
);

ReactDOM.render(
  <A10Steps current={1} progressDot={customDot}>
    <Step title="Finished" description="You can hover on the dot." />
    <Step title="In Progress" description="You can hover on the dot." />
    <Step title="Waiting" description="You can hover on the dot." />
    <Step title="Waiting" description="You can hover on the dot." />
  </A10Steps>,
  mountNode
);`