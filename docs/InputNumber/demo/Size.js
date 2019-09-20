import * as React from 'react'
import { A10InputNumber } from '../../../src'

const onChange = value => {
    console.log('changed', value)
}

const Example = () => (
    <div>
        <A10InputNumber size="large" min={1} max={100000} defaultValue={3} onChange={onChange} />
        <A10InputNumber size="medium" min={1} max={100000} defaultValue={3} onChange={onChange} />
        <A10InputNumber size="small" min={1} max={100000} defaultValue={3} onChange={onChange} />
    </div>
)

export default Example