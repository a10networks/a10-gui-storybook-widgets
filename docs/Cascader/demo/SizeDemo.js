import * as React from 'react'
import { A10Cascader } from '../../../src'

const options = [{
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [{
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [{
            value: 'xihu',
            label: 'West Lake',
        }],
    }],
}, {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [{
        value: 'nanjing',
        label: 'Nanjing',
        children: [{
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
        }],
    }],
}];

function onChange(value) {
    console.log(value);
}

const SizeDemo = () => {
    return (
        <div>
            <A10Cascader size="large" options={options} onChange={onChange} /><br /><br />
            <A10Cascader size="middle" options={options} onChange={onChange} /><br /><br />
            <A10Cascader size="small" options={options} onChange={onChange} /><br /><br />
        </div>
    )
}

export default SizeDemo