import * as React from 'react'
import { A10Select, A10Radio } from '../../../src';
const Option = A10Select.Option;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

function handleChange(value) {
  console.log(`Selected: ${value}`);
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
        <div style={{ paddingBottom: '8px' }} />
        <A10Select
          size={size}
          defaultValue="a1"
          onChange={handleChange}
          style={{ width: 200 }}
        >
          {children}
        </A10Select>
        <div style={{ paddingBottom: '8px' }} />
        <A10Select
          mode="combobox"
          size={size}
          defaultValue="a1"
          onChange={handleChange}
          style={{ width: 200 }}
        >
          {children}
        </A10Select>
        <div style={{ paddingBottom: '8px' }} />
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
        <div style={{ paddingBottom: '8px' }} />
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
        <div style={{ paddingBottom: '8px' }} />
      </div>
    );
  }
}

export default SelectSizesDemo
