import * as React from 'react'
import { A10DatePicker } from '../../../src';
import ComboIcons from './SuffixIcon'

const { A10RangePicker } = A10DatePicker;

function onChange(value, dateString) {
    console.log('Selected Time: ', value);
    console.log('Formatted Selected Time: ', dateString);
}

function onOk(value) {
    console.log('onOk: ', value);
}

const ChooseTimeDemo = () => {
    return (
        <div>
            <A10DatePicker
                showTime
                format="YYYY-MM-DD HH:mm:ss"
                placeholder="Select Time"
                onChange={onChange}
                onOk={onOk}
                suffixIcon={<ComboIcons />}
            />
            <br />
            <A10RangePicker
                showTime={{ format: 'HH:mm' }}
                format="YYYY-MM-DD HH:mm"
                placeholder={['Start Time', 'End Time']}
                onChange={onChange}
                onOk={onOk}
                suffixIcon={<ComboIcons />}
            />
        </div>
    )
}

export default ChooseTimeDemo