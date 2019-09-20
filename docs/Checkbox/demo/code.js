export const demoString = `import { A10Checkbox } from 'a10-gui-widgets';

const onChange = (e) => {
  console.log(e.target.checked);
}

const Example = () => {
  return <A10Checkbox onChange={onChange}>Checkbox</Checkbox>
}

ReactDOM.render(<Example />, mountNode);`

export const disableUsageCode = `import { A10Checkbox } from 'a10-gui-widgets';

class Example extends React.Component {
  render() {
    return (
      <div>
        <A10Checkbox defaultChecked={false} disabled />
        <A10Checkbox defaultChecked disabled />
      </div>
    );
  }
}
ReactDOM.render(<Example />, mountNode);`

export const controlCheckboxCode = `import { A10Checkbox } from 'a10-gui-widgets';

class Example extends React.Component {
  state = {
    checked: true,
    disabled: false,
  };

  render() {
    const label = ${"`${this.state.checked ? 'Checked' : 'Unchecked'}-${this.state.disabled ? 'Disabled' : 'Enabled'}`;"}
    return (
      <div>
        <p style={{ marginBottom: '20px' }}>
          <A10Checkbox
            checked={this.state.checked}
            disabled={this.state.disabled}
            onChange={this.onChange}
          >
            {label}
          </A10Checkbox>
        </p>
        <p>
          <A10Button
            type="primary"
            size="small"
            onClick={this.toggleChecked}
          >
            {!this.state.checked ? 'Check' : 'Uncheck'}
          </A10Button>
          <A10Button
            style={{ marginLeft: '10px' }}
            type="primary"
            size="small"
            onClick={this.toggleDisable}
          >
            {!this.state.disabled ? 'Disable' : 'Enable'}
          </A10Button>
        </p>
      </div>
    );
  }
  toggleChecked = () => {
    this.setState({ checked: !this.state.checked });
  }
  toggleDisable = () => {
    this.setState({ disabled: !this.state.disabled });
  }
  onChange = (e) => {
    console.log('checked = ', e.target.checked);
    this.setState({
      checked: e.target.checked,
    });
  }
}
ReactDOM.render(<Example />, mountNode);`

export const checkboxGroupCode = `import { A10Checkbox } from 'a10-gui-widgets';
const CheckboxGroup = A10Checkbox.Group;

const onChange = () => (checkedValues) {
  console.log('checked = ', checkedValues);
}

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

const Example = () => (
  <div>
    <CheckboxGroup options={plainOptions} defaultValue={['Apple']} onChange={onChange} />
    <br /><br />
    <CheckboxGroup options={options} defaultValue={['Pear']} onChange={onChange} />
    <br /><br />
    <CheckboxGroup options={optionsWithDisabled} disabled defaultValue={['Apple']} onChange={onChange} />
  </div>
)
ReactDOM.render(<Example />, mountNode);`
