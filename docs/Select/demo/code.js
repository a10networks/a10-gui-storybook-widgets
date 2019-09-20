
export const basicSelectCode = `import * as React from 'react'
import { A10Select } from 'a10-gui-widgets'

const Opeion = A10Select.Option

const handleChange = (value) => {
  console.log(${"`selected ${value}`"});
}

const Example = () => {
  return (
    <div>
      <A10Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="disabled" disabled>Disabled</Option>
        <Option value="Yiminghe">yiminghe</Option>
      </A10Select>
      <A10Select defaultValue="lucy" style={{ width: 120 }} allowClear disabled>
        <Option value="lucy">Lucy</Option>
      </A10Select>
      <A10Select defaultValue="lucy" style={{ width: 120 }} loading>
        <Option value="lucy">Lucy</Option>
      </A10Select>
    </div>
  )
}
ReactDOM.render(<Example />, mountNode);`

export const searchFieldCode = `
import { A10Select } from 'a10-gui-widgets';

const Option = A10Select.Option;

function handleChange(value) {
  console.log(selected ${"`value`"});
}

function handleBlur() {
  console.log('blur');
}

function handleFocus() {
  console.log('focus');
}

ReactDOM.render(
  <A10Select
    showSearch
    style={{ width: 200 }}
    placeholder="Select a person"
    optionFilterProp="children"
    onChange={handleChange}
    onFocus={handleFocus}
    onBlur={handleBlur}
    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
  >
    <Option value="jack">Jack</Option>
    <Option value="lucy">Lucy</Option>
    <Option value="tom">Tom</Option>
  </A10Select>,
  mountNode
);
`
export const multipleSelectionCode = `
import { A10Select } from 'a10-gui-widgets';

const Option = A10Select.Option;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

function handleChange(value) {
  console.log(selected ${"`value`"});
}

ReactDOM.render(
  <A10Select
    mode="multiple"
    style={{ width: '100%' }}
    placeholder="Please select"
    defaultValue={['a10', 'c12']}
    onChange={handleChange}
  >
    {children}
  </A10Select>,
  mountNode
);

`

export const moreSelectCode = `import * as React from 'react'
import { A10Select, A10Radio } from 'a10-gui-widgets';
const Option = A10Select.Option;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

function handleChange(value) {
  console.log(${"`Selected: ${value}`"});
}

class SelectSizesDemo extends React.Component {
  state = {
    size: 'default',
  };

  handleSizeChange = (e) => {
    this.setState({ size: e.target.value });
  }

  render() {
    const { size } = this.state;
    return (
      <div>
        <A10Radio.Group value={size} onChange={this.handleSizeChange}>
          <A10Radio value="large">Large</A10Radio>
          <A10Radio value="default">Default</A10Radio>
          <A10Radio value="small">Small</A10Radio>
        </A10Radio.Group>
        <br /><br />
        <A10Select
          size={size}
          defaultValue="a1"
          onChange={handleChange}
          style={{ width: 200 }}
        >
          {children}
        </A10Select>
        <br />
        <A10Select
          mode="combobox"
          size={size}
          defaultValue="a1"
          onChange={handleChange}
          style={{ width: 200 }}
        >
          {children}
        </A10Select>
        <br />
        <A10Select
          mode="multiple"
          size={size}
          placeholder="Please Select"
          defaultValue={['a10', 'c12']}
          onChange={handleChange}
          style={{ width: '100%' }}
        >
          {children}
        </A10Select>
        <br />
        <A10Select
          mode="tags"
          size={size}
          placeholder="Please Select"
          defaultValue={['a10', 'c12']}
          onChange={handleChange}
          style={{ width: '100%' }}
        >
          {children}
        </A10Select>
      </div>
    );
  }
}

ReactDOM.render(<SelectSizesDemo />, mountNode);`

export const tagsCode = `
import { A10Select } from 'a10-gui-widgets';

const Option = A10Select.Option;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

function handleChange(value) {
  console.log(selected ${"`value`"});
}

ReactDOM.render(
  <A10Select
    mode="tags"
    style={{ width: '100%' }}
    placeholder="Tags Mode"
    onChange={handleChange}
  >
    {children}
  </A10Select>,
  mountNode
);

`

export const coordinateCode = `
import { A10Select } from 'a10-gui-widgets';

const Option = A10Select.Option;
const provinceData = ['Zhejiang', 'Jiangsu'];
const cityData = {
  Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
  Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang'],
};

class App extends React.Component {
  state = {
    cities: cityData[provinceData[0]],
    secondCity: cityData[provinceData[0]][0],
  }

  handleProvinceChange = (value) => {
    this.setState({
      cities: cityData[value],
      secondCity: cityData[value][0],
    });
  }

  onSecondCityChange = (value) => {
    this.setState({
      secondCity: value,
    });
  }

  render() {
    const { cities } = this.state;
    return (
      <div>
        <A10Select
          defaultValue={provinceData[0]}
          style={{ width: 120 }}
          onChange={this.handleProvinceChange}
        >
          {provinceData.map(province => <Option key={province}>{province}</Option>)}
        </A10Select>
        <A10Select
          style={{ width: 120 }}
          value={this.state.secondCity}
          onChange={this.onSecondCityChange}
        >
          {cities.map(city => <Option key={city}>{city}</Option>)}
        </A10Select>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);

`

export const optionGroupCode = `
import { A10Select } from 'a10-gui-widgets';

const { Option, OptGroup } = A10Select;

function handleChange(value) {
  console.log(selected ${"`value`"});
}

ReactDOM.render(
  <A10Select
    defaultValue="lucy"
    style={{ width: 200 }}
    onChange={handleChange}
  >
    <OptGroup label="Manager">
      <Option value="jack">Jack</Option>
      <Option value="lucy">Lucy</Option>
    </OptGroup>
    <OptGroup label="Engineer">
      <Option value="Yiminghe">yiminghe</Option>
    </OptGroup>
  </A10Select>,
  mountNode
);

`

export const getSelectedItemCode = `
import { A10Select } from 'a10-gui-widgets';

const Option = A10Select.Option;

function handleChange(value) {
  console.log(value); // { key: "lucy", label: "Lucy (101)" }
}

ReactDOM.render(
  <A10Select labelInValue defaultValue={{ key: 'lucy' }} style={{ width: 120 }} onChange={handleChange}>
    <Option value="jack">Jack (100)</Option>
    <Option value="lucy">Lucy (101)</Option>
  </A10Select>,
  mountNode
);

`

export const automaticTokenizationCode = `
import { A10Select } from 'a10-gui-widgets';

const Option = A10Select.Option;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

function handleChange(value) {
  console.log(selected ${"`value`"});
}

ReactDOM.render(
  <A10Select
    mode="tags"
    style={{ width: '100%' }}
    onChange={handleChange}
    tokenSeparators={[',']}
  >
    {children}
  </A10Select>,
  mountNode
);
`
export const customDropdownCode = `
import { A10Select, A10Icon, A10Divider } from 'a10-gui-widgets';

const Option = A10Select.Option;

ReactDOM.render(
  <A10Select
    defaultValue="lucy"
    style={{ width: 120 }}
    dropdownRender={menu => (
      <div>
        {menu}
        <A10Divider style={{ margin: '4px 0' }} />
        <div style={{ padding: '8px', cursor: 'pointer' }}>
          <A10Icon type="plus" /> Add item
        </div>
      </div>
    )}
  >
    <Option value="jack">Jack</Option>
    <Option value="lucy">Lucy</Option>
  </A10Select>,
  mountNode,
);

`