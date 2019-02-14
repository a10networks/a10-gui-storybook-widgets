import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs, withReadme } from 'storybook-readme'
import * as readme from '../../src/Progress/README.md'
import { A10Progress, A10Button, A10Tooltip } from '../../src'
import { Code, CodeComponent, CodeCard } from '../utils'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react'
import {
  lineProgressCode,
  circleProgressCode,
  miniSizeProgressCode,
  miniSizeCircularProgressCode,
  dynamicCircularProgressCode,
  dynamicCode,
  customFormatCode,
  dashboardCode,
  progressBarCode,
  squareLinecapsCode,
} from './demo/code'

const Demo = () => {
  return (
    <div>
      <A10Progress percent={30} />
      <A10Progress percent={50} status="active" />
      <A10Progress percent={70} status="exception" />
      <A10Progress percent={100} />
      <A10Progress percent={50} showInfo={false} />
    </div>
  )
}

const Demo1 = () => {
  return (
    <div>
      <A10Progress type="circle" percent={75} />
      <A10Progress type="circle" percent={70} status="exception" />
      <A10Progress type="circle" percent={100} />
    </div>
  )
}

export const Demo2 = () => {
  return (
    <div style={{ width: 170 }}>
      <A10Progress percent={30} size="small" />
      <A10Progress percent={50} size="small" status="active" />
      <A10Progress percent={70} size="small" status="exception" />
      <A10Progress percent={100} size="small" />
    </div>
  )
}

const Demo3 = () => {
  return (
    <div>
      <A10Progress type="circle" percent={30} width={80} />
      <A10Progress type="circle" percent={70} width={80} status="exception" />
      <A10Progress type="circle" percent={100} width={80} />
    </div>
  )
}

const Demo4 = () => {
  const ButtonGroup = A10Button.Group

  class App extends React.Component {
    state = {
      percent: 0,
    }

    increase = () => {
      let percent = this.state.percent + 10
      if (percent > 100) {
        percent = 100
      }
      this.setState({ percent })
    }

    decline = () => {
      let percent = this.state.percent - 10
      if (percent < 0) {
        percent = 0
      }
      this.setState({ percent })
    }

    render() {
      return (
        <div>
          <A10Progress type="circle" percent={this.state.percent} />
          <A10Button onClick={this.decline} icon="minus" />
          <A10Button onClick={this.increase} icon="plus" />
        </div>
      )
    }
  }
  return <App />
}

const Demo5 = () => {
  const ButtonGroup = A10Button.Group

  class App extends React.Component {
    state = {
      percent: 0,
    }

    increase = () => {
      let percent = this.state.percent + 10
      if (percent > 100) {
        percent = 100
      }
      this.setState({ percent })
    }

    decline = () => {
      let percent = this.state.percent - 10
      if (percent < 0) {
        percent = 0
      }
      this.setState({ percent })
    }

    render() {
      return (
        <div>
          <A10Progress percent={this.state.percent} />
          <A10Button onClick={this.decline} icon="minus" />
          <A10Button onClick={this.increase} icon="plus" />
        </div>
      )
    }
  }
  return <App />
}

const Demo6 = () => {
  return (
    <div>
      <A10Progress
        type="circle"
        percent={75}
        format={percent => `${percent} Days`}
      />
      <A10Progress type="circle" percent={100} format={() => 'Done'} />
    </div>
  )
}

const Demo7 = () => {
  return <A10Progress type="dashboard" percent={75} />
}

const Demo8 = () => {
  return (
    <A10Tooltip title="3 done / 3 in progress / 4 to do">
      <A10Progress percent={60} successPercent={30} />
    </A10Tooltip>
  )
}

const Demo9 = () => {
  return (
    <div>
      <A10Progress strokeLinecap="square" percent={75} />
      <A10Progress strokeLinecap="square" type="circle" percent={75} />
      <A10Progress strokeLinecap="square" type="dashboard" percent={75} />
    </div>
  )
}

const Example = () => {
  const linePercent = 80,
    lineStatus = 'active',
    lineSize = 'small',
    cirleType = 'circle',
    dashboardType = 'dashboard',
    circlePercent = 70,
    circleStatus = 'exception',
    circleWidth = 70
  return (
    <CodeComponent>
      <CodeCard
        title="Progress bar"
        desc="A standard progress bar."
        code={<Code string={lineProgressCode} />}
      >
        <Demo />
      </CodeCard>
      <CodeCard
        title="Circular progress bar"
        desc="A circular progress bar."
        code={<Code string={circleProgressCode} />}
      >
        <Demo1 />
      </CodeCard>
      <CodeCard
        title="Mini size progress bar"
        desc="Appropriate for a narrow area."
        code={<Code string={miniSizeProgressCode} />}
      >
        <Demo2 />
      </CodeCard>
      <CodeCard
        title="Mini size circular progress bar"
        desc="A smaller circular progress bar."
        code={<Code string={miniSizeCircularProgressCode} />}
      >
        <Demo3 />
      </CodeCard>
      <CodeCard
        title="Dynamic circular progress bar"
        desc="A dynamic progress bar is better."
        code={<Code string={dynamicCircularProgressCode} />}
      >
        <Demo4 />
      </CodeCard>
      <CodeCard
        title="Dynamic"
        desc="A dynamic progress bar is better."
        code={<Code string={dynamicCode} />}
      >
        <Demo5 />
      </CodeCard>
      <CodeCard
        title="Custom text format"
        desc="You can set a custom text by setting the format prop."
        code={<Code string={customFormatCode} />}
      >
        <Demo6 />
      </CodeCard>
      <CodeCard
        title="Dashboard"
        desc="By setting type=dashboard, you can get a dashboard style of progress easily."
        code={<Code string={dashboardCode} />}
      >
        <Demo7 />
      </CodeCard>
      <CodeCard
        title="Progress bar with success segment"
        desc="A standard progress bar."
        code={<Code string={progressBarCode} />}
      >
        <Demo8 />
      </CodeCard>
      <CodeCard
        title="Square linecaps"
        desc="By setting strokeLinecap=' square', you can change the linecaps from round to square."
        code={<Code string={squareLinecapsCode} />}
      >
        <Demo9 />
      </CodeCard>
    </CodeComponent>
  )
}

export default story => {
  story.add('A10Progress', withReadme(readme, Example))
}
