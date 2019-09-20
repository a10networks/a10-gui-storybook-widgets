import * as React from 'react'
import { A10TreeSelect } from '../../src'
const A10TreeNode = A10TreeSelect.A10TreeNode;

export const BasicDemoString = `
import { A10TreeSelect } from 'a10-gui-widgets'
const A10TreeNode = A10TreeSelect.A10TreeNode;

class Demo extends React.Component {
  state = {
    value: undefined,
  }
  onChange = (value) => {
    console.log(arguments);
    this.setState({ value });
  }
  render() {
    return (
      <A10TreeSelect
        showSearch
        style={{ width: 300 }}
        value={this.state.value}
        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
        placeholder="Please select"
        allowClear
        treeDefaultExpandAll
        onChange={this.onChange}
      >
        <A10TreeNode value="parent 1" title="parent 1" key="0-1">
          <A10TreeNode value="parent 1-0" title="parent 1-0" key="0-1-1">
            <A10TreeNode value="leaf1" title="my leaf" key="random" />
            <A10TreeNode value="leaf2" title="your leaf" key="random1" />
          </A10TreeNode>
          <A10TreeNode value="parent 1-1" title="parent 1-1" key="random2">
            <A10TreeNode value="sss" title={<b style={{ color: '#08c' }}>sss</b>} key="random3" />
          </A10TreeNode>
        </A10TreeNode>
      </A10TreeSelect>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
`

export const BasicUsageDemo = () => {

  class TreeSelectDemo extends React.Component {
    state = {
      value: undefined,
    }

    onChange = (value) => {
      console.log(arguments);
      this.setState({ value });
    }

    render() {
      return (
        <A10TreeSelect
          showSearch
          style={{ width: 300 }}
          value={this.state.value}
          dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
          placeholder="Please select"
          allowClear
          treeDefaultExpandAll
          onChange={this.onChange}
        >
          <A10TreeNode value="parent 1" title="parent 1" key="0-1">
            <A10TreeNode value="parent 1-0" title="parent 1-0" key="0-1-1">
              <A10TreeNode value="leaf1" title="my leaf" key="random" />
              <A10TreeNode value="leaf2" title="your leaf" key="random1" />
            </A10TreeNode>
            <A10TreeNode value="parent 1-1" title="parent 1-1" key="random2">
              <A10TreeNode value="sss" title={<b style={{ color: '#08c' }}>sss</b>} key="random3" />
            </A10TreeNode>
          </A10TreeNode>
        </A10TreeSelect>
      );
    }
  }

  return <TreeSelectDemo />
}
