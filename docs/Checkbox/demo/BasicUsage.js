import * as React from 'react'
import { A10Checkbox } from '../../../src'


const onChange = (e) => {
  console.log(e.target.checked);
}

const Example = () => {
  return (<A10Checkbox onChange={onChange}>Checkbox</A10Checkbox>)
}

export default Example
