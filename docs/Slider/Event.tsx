import * as React from 'react'
import { A10Slider } from '../../src'

function onChange(value) {
   console.log('onChange: ', value);
}

function onAfterChange(value) {
   console.log('onAfterChange: ', value);
}

export class EventDemo extends React.Component {
  render() {
    return (
      <div>
        <A10Slider defaultValue={30} onChange={onChange} onAfterChange={onAfterChange} />
        <A10Slider range step={10} defaultValue={[20, 50]} onChange={onChange} onAfterChange={onAfterChange} />
      </div>
    );
  }
}