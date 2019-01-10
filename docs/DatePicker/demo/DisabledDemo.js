import * as React from 'react'
import { A10DatePicker } from '../../../src'
import * as moment from 'moment';
import ComboIcons from './SuffixIcon'
const { A10MonthPicker, A10RangePicker, A10WeekPicker } = A10DatePicker;

const dateFormat = 'YYYY-MM-DD';

const DisabledDemo = () => {
    return (
        <div>
            < A10DatePicker suffixIcon={<ComboIcons />} defaultValue={moment('2015-06-06', dateFormat)} disabled />
            <br />
            < A10MonthPicker suffixIcon={<ComboIcons />} defaultValue={moment('2015-06', 'YYYY-MM')} disabled />
            <br />
            <A10RangePicker
                suffixIcon={<ComboIcons />}
                defaultValue={[moment('2015-06-06', dateFormat), moment('2015-06-06', dateFormat)]}
                disabled
            />
        </div>
    )
}

export default DisabledDemo