import * as React from 'react'
import { A10Cascader } from '../../../src'

const options = [{
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [{
        value: 'hangzhou',
        label: 'Hanzhou',
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


const ChangeOnSelectDemo = () => {
    return (
        <A10Cascader options={options} onChange={onChange} changeOnSelect />
    )
}

export default ChangeOnSelectDemo