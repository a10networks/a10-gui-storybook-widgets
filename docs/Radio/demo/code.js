
export const basicRadioCode = `import { A10Radio } from 'a10-gui-widgets'

ReactDOM.render(<A10Radio>Radio</A10Radio>, mountNode);`

export const disableRadioCode = `import { A10Radio, A10Button } from 'a10-gui-widgets'

class Example extends React.Component {
  state = {
    disabled: true,
  }
  toggleDisabled = () => {
    this.setState({
      disabled: !this.state.disabled,
    });
  }
  render() {
    return (
      <div>
        <A10Radio defaultChecked={false} disabled={this.state.disabled}>Disabled</A10Radio>
        <br />
        <A10Radio defaultChecked disabled={this.state.disabled}>Disabled</A10Radio>
        <div style={{ marginTop: 20 }}>
          <A10Button type="primary" onClick={this.toggleDisabled}>
            Toggle disabled
          </A10Button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Example />, mountNode);`

export const radioGroupCode = `import { A10Radio } from 'a10-gui-widgets'
const RadioGroup = A10Radio.Group;

class Example extends React.Component {
  state = {
    value: 1,
  }
  onChange = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  }
  render() {
    return (
      <RadioGroup onChange={this.onChange} value={this.state.value}>
        <A10Radio value={1}>A</A10Radio>
        <A10Radio value={2}>B</A10Radio>
        <A10Radio value={3}>C</A10Radio>
        <A10Radio value={4}>D</A10Radio>
      </RadioGroup>
    );
  }
}

ReactDOM.render(<Example />, mountNode);`


export const radioButtonCode = `import { A10Radio } from 'a10-gui-widgets'
const RadioGroup = A10Radio.Group
const RadioButton = A10Radio.Button
const onChange = (e) => {
  console.log(${"`radio checked:${e.target.value}`"});
}

const Example = () => {
  return (
    <div>
      <div>
        <RadioGroup onChange={onChange} defaultValue="a">
          <RadioButton value="a">Hangzhou</RadioButton>
          <RadioButton value="b">Shanghai</RadioButton>
          <RadioButton value="c">Beijing</RadioButton>
          <RadioButton value="d">Chengdu</RadioButton>
        </RadioGroup>
      </div>
      <div style={{ marginTop: 16 }}>
        <RadioGroup onChange={onChange} defaultValue="a">
          <RadioButton value="a">Hangzhou</RadioButton>
          <RadioButton value="b" disabled>Shanghai</RadioButton>
          <RadioButton value="c">Beijing</RadioButton>
          <RadioButton value="d">Chengdu</RadioButton>
        </RadioGroup>
      </div>
      <div style={{ marginTop: 16 }}>
        <RadioGroup disabled onChange={onChange} defaultValue="a">
          <RadioButton value="a">Hangzhou</RadioButton>
          <RadioButton value="b">Shanghai</RadioButton>
          <RadioButton value="c">Beijing</RadioButton>
          <RadioButton value="d">Chengdu</RadioButton>
        </RadioGroup>
      </div>
    </div>
  )
}

ReactDOM.render(<Example />, mountNode);`

export const radioButtonCodeOptional = `
import { A10Radio } from 'a10-gui-widgets'

const RadioGroup = A10Radio.Group;

const plainOptions = ['Apple', 'Pear', 'Orange'];
const options = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange' },
];
const optionsWithDisabled = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange', disabled: false },
];

class App extends React.Component {
  state = {
    value1: 'Apple',
    value2: 'Apple',
    value3: 'Apple',
  }

  onChange1 = (e) => {
    console.log('radio1 checked', e.target.value);
    this.setState({
      value1: e.target.value,
    });
  }

  onChange2 = (e) => {
    console.log('radio2 checked', e.target.value);
    this.setState({
      value2: e.target.value,
    });
  }

  onChange3 = (e) => {
    console.log('radio3 checked', e.target.value);
    this.setState({
      value3: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <RadioGroup options={plainOptions} onChange={this.onChange1} value={this.state.value1} />
        <RadioGroup options={options} onChange={this.onChange2} value={this.state.value2} />
        <RadioGroup options={optionsWithDisabled} onChange={this.onChange3} value={this.state.value3} />
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);

`

export const verticalRadioGroupCode = `
import { A10Radio, A10Input } from 'a10-gui-widgets';

const RadioGroup = A10Radio.Group;

class App extends React.Component {
  state = {
    value: 1,
  }

  onChange = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  }

  render() {
    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px',
    };
    return (
      <RadioGroup onChange={this.onChange} value={this.state.value}>
        <A10Radio style={radioStyle} value={1}>Option A</A10Radio>
        <A10Radio style={radioStyle} value={2}>Option B</A10Radio>
        <A10Radio style={radioStyle} value={3}>Option C</A10Radio>
        <A10Radio style={radioStyle} value={4}>
          More...
          {this.state.value === 4 ? <A10Input style={{ width: 100, marginLeft: 10 }} /> : null}
        </A10Radio>
      </RadioGroup>
    );
  }
}

ReactDOM.render(<App />, mountNode);

`

export const radioStyleCode= `
import { A10Radio} from 'a10-gui-widgets';

const RadioButton = A10Radio.Button;
const RadioGroup = A10Radio.Group;

function onChange(e) {
  console.log('radio checked:{e.target.value}');
}

ReactDOM.render(
  <div>
    <div>
      <RadioGroup onChange={onChange} defaultValue="a">
        <RadioButton value="a">Hangzhou</RadioButton>
        <RadioButton value="b">Shanghai</RadioButton>
        <RadioButton value="c">Beijing</RadioButton>
        <RadioButton value="d">Chengdu</RadioButton>
      </RadioGroup>
    </div>
    <div style={{ marginTop: 16 }}>
      <RadioGroup onChange={onChange} defaultValue="a">
        <RadioButton value="a">Hangzhou</RadioButton>
        <RadioButton value="b" disabled>Shanghai</RadioButton>
        <RadioButton value="c">Beijing</RadioButton>
        <RadioButton value="d">Chengdu</RadioButton>
      </RadioGroup>
    </div>
    <div style={{ marginTop: 16 }}>
      <RadioGroup disabled onChange={onChange} defaultValue="a">
        <RadioButton value="a">Hangzhou</RadioButton>
        <RadioButton value="b">Shanghai</RadioButton>
        <RadioButton value="c">Beijing</RadioButton>
        <RadioButton value="d">Chengdu</RadioButton>
      </RadioGroup>
    </div>
  </div>,
  mountNode
);

`

export const radioGroupNameCode = `
import { A10Radio} from 'a10-gui-widgets';

const RadioGroup = A10Radio.Group;

function App() {
  return (
    <RadioGroup name="radiogroup" defaultValue={1}>
      <A10Radio value={1}>A</A10Radio>
      <A10Radio value={2}>B</A10Radio>
      <A10Radio value={3}>C</A10Radio>
      <A10Radio value={4}>D</A10Radio>
    </RadioGroup>
  );
}

ReactDOM.render(<App />, mountNode);

`

export const solidRadioCode = `
import { A10Radio} from 'a10-gui-widgets';

ReactDOM.render(
  <div>
    <div>
      <A10Radio.Group defaultValue="a" buttonStyle="solid">
        <A10Radio.Button value="a">Hangzhou</A10Radio.Button>
        <A10Radio.Button value="b">Shanghai</A10Radio.Button>
        <A10Radio.Button value="c">Beijing</A10Radio.Button>
        <A10Radio.Button value="d">Chengdu</A10Radio.Button>
      </A10Radio.Group>
    </div>
    <div style={{ marginTop: 16 }}>
      <A10Radio.Group defaultValue="c" buttonStyle="solid">
        <A10Radio.Button value="a">Hangzhou</A10Radio.Button>
        <A10Radio.Button value="b" disabled>Shanghai</A10Radio.Button>
        <A10Radio.Button value="c">Beijing</A10Radio.Button>
        <A10Radio.Button value="d">Chengdu</A10Radio.Button>
      </A10Radio.Group>
    </div>
  </div>,
  mountNode
);
`

export const sizeCode = `
import { A10Radio} from 'a10-gui-widgets';

const RadioButton = A10Radio.Button;
const RadioGroup = A10Radio.Group;

ReactDOM.render(
  <div>
    <div>
      <RadioGroup defaultValue="a" size="large">
        <RadioButton value="a">Hangzhou</RadioButton>
        <RadioButton value="b">Shanghai</RadioButton>
        <RadioButton value="c">Beijing</RadioButton>
        <RadioButton value="d">Chengdu</RadioButton>
      </RadioGroup>
    </div>
    <div style={{ marginTop: 16 }}>
      <RadioGroup defaultValue="a">
        <RadioButton value="a">Hangzhou</RadioButton>
        <RadioButton value="b">Shanghai</RadioButton>
        <RadioButton value="c">Beijing</RadioButton>
        <RadioButton value="d">Chengdu</RadioButton>
      </RadioGroup>
    </div>
    <div style={{ marginTop: 16 }}>
      <RadioGroup defaultValue="a" size="small">
        <RadioButton value="a">Hangzhou</RadioButton>
        <RadioButton value="b">Shanghai</RadioButton>
        <RadioButton value="c">Beijing</RadioButton>
        <RadioButton value="d">Chengdu</RadioButton>
      </RadioGroup>
    </div>
  </div>,
  mountNode
);
`