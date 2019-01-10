
export const lineProgressCode = `
import { A10Progress } from 'a10-gui-widgets';

ReactDOM.render(
  <div>
    <A10Progress percent={30} />
    <A10Progress percent={50} status="active" />
    <A10Progress percent={70} status="exception" />
    <A10Progress percent={100} />
    <A10Progress percent={50} showInfo={false} />
  </div>,
  mountNode
);`

export const circleProgressCode = `import { A10Progress } from 'a10-gui-widgets';

ReactDOM.render(
  <div>
    <A10Progress type="circle" percent={75} />
    <A10Progress type="circle" percent={70} status="exception" />
    <A10Progress type="circle" percent={100} />
  </div>,
  mountNode
);`

export const miniSizeProgressCode = `
import { A10Progress } from 'a10-gui-widgets';

ReactDOM.render(
  <div style={{ width: 170 }}>
    <A10Progress percent={30} size="small" />
    <A10Progress percent={50} size="small" status="active" />
    <A10Progress percent={70} size="small" status="exception" />
    <A10Progress percent={100} size="small" />
  </div>,
  mountNode
);
`

export const miniSizeCircularProgressCode = `
import { A10Progress } from 'a10-gui-widgets';

ReactDOM.render(
  <div>
    <A10Progress type="circle" percent={30} width={80} />
    <A10Progress type="circle" percent={70} width={80} status="exception" />
    <A10Progress type="circle" percent={100} width={80} />
  </div>,
  mountNode
);
`

export const dynamicCircularProgressCode = `
import { A10Progress, A10Button } from 'a10-gui-widgets';

const ButtonGroup = A10Button.Group;

class App extends React.Component {
  state = {
    percent: 0,
  }

  increase = () => {
    let percent = this.state.percent + 10;
    if (percent > 100) {
      percent = 100;
    }
    this.setState({ percent });
  }

  decline = () => {
    let percent = this.state.percent - 10;
    if (percent < 0) {
      percent = 0;
    }
    this.setState({ percent });
  }

  render() {
    return (
      <div>
        <A10Progress type="circle" percent={this.state.percent} />
        <ButtonGroup>
          <A10Button onClick={this.decline} icon="minus" />
          <A10Button onClick={this.increase} icon="plus" />
        </ButtonGroup>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);

`

export const dynamicCode = `
import { A10Progress, A10Button } from 'a10-gui-widgets';

const ButtonGroup = A10Button.Group;

class App extends React.Component {
  state = {
    percent: 0,
  }

  increase = () => {
    let percent = this.state.percent + 10;
    if (percent > 100) {
      percent = 100;
    }
    this.setState({ percent });
  }

  decline = () => {
    let percent = this.state.percent - 10;
    if (percent < 0) {
      percent = 0;
    }
    this.setState({ percent });
  }

  render() {
    return (
      <div>
        <A10Progress percent={this.state.percent} />
        <ButtonGroup>
          <A10Button onClick={this.decline} icon="minus" />
          <A10Button onClick={this.increase} icon="plus" />
        </ButtonGroup>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);

`
export const customFormatCode = `
import { A10Progress } from 'a10-gui-widgets';

ReactDOM.render(
  <div>
    <A10Progress type="circle" percent={75} format={percent => '$'{percent} Days'} />
    <A10Progress type="circle" percent={100} format={() => 'Done'} />
  </div>,
  mountNode
);`

export const dashboardCode = `
import { A10Progress } from 'a10-gui-widgets';

ReactDOM.render(<A10Progress type="dashboard" percent={75} />, mountNode);
`

export const progressBarCode = `
import { A10Tooltip, A10Progress } from 'a10-gui-widgets';

ReactDOM.render(
  <A10Tooltip title="3 done / 3 in progress / 4 to do">
    <A10Progress percent={60} successPercent={30} />
  </A10Tooltip>,
  mountNode
);
`

export const squareLinecapsCode = `
import { A10Progress } from 'a10-gui-widgets'

ReactDOM.render(
  <div>
    <A10Progress strokeLinecap="square" percent={75} />
    <A10Progress strokeLinecap="square" type="circle" percent={75} />
    <A10Progress strokeLinecap="square" type="dashboard" percent={75} />
  </div>,
  mountNode
);
`