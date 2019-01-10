export const basicUsageCode = `import { A10InputNumber } from 'a10-gui-widgets';

const onChange = (value) {
  console.log('changed', value);
}

const Example = () => (
  <A10InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />
)

ReactDOM.render(<Example />, mountNode);`

const onChange = value => {
  console.log('changed', value)
}

export const formatterUsageCode = `import { A10InputNumber } from 'a10-gui-wdigets';

const Example = () => (
  <div>
    <A10InputNumber
      defaultValue={1000}
      formatter={value => ${'`$ ${value}`'}.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
      parser={value => value.replace(/\$\s?|(,*)/g, '')}
      onChange={onChange}
    />
    <A10InputNumber
      defaultValue={100}
      min={0}
      max={100}
      formatter={value => ${'`${value}%`'}}
      parser={value => value.replace('%', '')}
      onChange={onChange}
    />
  </div>
)
ReactDOM.render(<Example />, mountNode);`

export const sizetest = `
import { A10InputNumber } from 'a10-gui-wdigets';

function onChange(value) {
  console.log('changed', value);
}

ReactDOM.render(
  <div>
    <A10InputNumber size="large" min={1} max={100000} defaultValue={3} onChange={onChange} />
    <A10InputNumber min={1} max={100000} defaultValue={3} onChange={onChange} />
    <A10InputNumber size="small" min={1} max={100000} defaultValue={3} onChange={onChange} />
  </div>,
  mountNode
);
`
export const disabled = `
import { A10InputNumber, A10Button } from 'a10-gui-wdigets';

class App extends React.Component {
  state = {
    disabled: true,
  };

  toggle = () => {
    this.setState({
      disabled: !this.state.disabled,
    });
  }

  render() {
    return (
      <div>
        <A10InputNumber min={1} max={10} disabled={this.state.disabled} defaultValue={3} />
        <div style={{ marginTop: 20 }}>
          <A10Button onClick={this.toggle} type="primary">Toggle disabled</A10Button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
`
export const decimals = `
import { A10InputNumber } from 'a10-gui-wdigets';

function onChange(value) {
  console.log('changed', value);
}

ReactDOM.render(
  <A10InputNumber min={0} max={10} step={0.1} onChange={onChange} />,
  mountNode
);
`