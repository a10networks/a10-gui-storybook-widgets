export const basicCode = `import { A10Affix, A10Button } from 'a10-gui-widgets';

class Demo extends React.Component {
  state = {
    top: 10,
    bottom: 10,
  }

  render() {
    return (
      <div>
        <A10Affix offsetTop={this.state.top}>
          <A10Button
            type="primary"
            onClick={() => {
              this.setState({
                top: this.state.top + 10,
              });
            }}
          >
            A10Affix top
          </A10Button>
        </A10Affix>
        <br />
        <A10Affix offsetBottom={this.state.bottom}>
          <A10Button
            type="primary"
            onClick={() => {
              this.setState({
                bottom: this.state.bottom + 10,
              });
            }}
          >
            A10Affix bottom
          </A10Button>
        </A10Affix>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
`
export const callbackCode = `import { A10Affix, A10Button } from 'a10-gui-widget';
ReactDOM.render(
  <A10Affix offsetTop={120} onChange={affixed => console.log(affixed)}>
    <A10Button>120px to affix top</A10Button>
  </A10Affix>,
  mountNode
);`

export const scrollCode = `import { A10Affix, A10Button } from 'a10-gui-widget';

class Demo extends React.Component {
  render() {
    return (
      <div className="scrollable-container" ref={(node) => { this.container = node; }}>
        <div className="background">
          <A10Affix target={() => this.container}>
            <A10Button type="primary">
              Fixed at the top of container
            </A10Button>
          </A10Affix>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);`