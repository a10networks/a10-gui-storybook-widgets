import * as React from 'react'
import { A10InputNumber } from '../../../src'

const onChange = value => {
    console.log('changed', value)
}

const Example = () => (
    <A10InputNumber min={0} max={10} step={0.1} onChange={onChange} />
)

export default Example