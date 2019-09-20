import * as React from 'react'
import { A10Checkbox } from '../../../src'


class CheckboxDemo extends React.Component {
  render() {
    return (
      <div>
        <A10Checkbox defaultChecked={false} disabled />
        <div style={{ height: '8px'}} />
        <A10Checkbox defaultChecked disabled />
      </div>
    );
  }
}

export default CheckboxDemo
