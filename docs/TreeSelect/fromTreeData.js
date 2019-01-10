import * as React from 'react'
import { A10TreeSelect } from '../../src'

export const FromTreeDataDemoString = `
import { A10TreeSelect } from 'a10-gui-widgets'

const treeData = [{
  label: 'Node1',
  value: '0-0',
  key: '0-0',
  children: [{
    label: 'Child Node1',
    value: '0-0-1',
    key: '0-0-1',
  }, {
    label: 'Child Node2',
    value: '0-0-2',
    key: '0-0-2',
  }],
}, {
  label: 'Node2',
  value: '0-1',
  key: '0-1',
}];

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
        style={{ width: 300 }}
        value={this.state.value}
        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
        treeData={treeData}
        placeholder="Please select"
        treeDefaultExpandAll
        onChange={this.onChange}
      />
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
`

export const FromTreeDataUsageDemo = () => {

  const treeData = [{
    label: 'Node1',
    value: '0-0',
    key: '0-0',
    children: [{
      label: 'Child Node1',
      value: '0-0-1',
      key: '0-0-1',
    }, {
      label: 'Child Node2',
      value: '0-0-2',
      key: '0-0-2',
    }],
  }, {
    label: 'Node2',
    value: '0-1',
    key: '0-1',
  }];

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
          style={{ width: 300 }}
          value={this.state.value}
          dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
          treeData={treeData}
          placeholder="Please select"
          treeDefaultExpandAll
          onChange={this.onChange}
        />
      );
    }
  }

  return <TreeSelectDemo />
}
