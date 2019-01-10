import * as React from 'react'
import * as moment from 'moment';
import { A10DatePicker } from '../../../src';
import ComboIcons from './SuffixIcon'

const { A10MonthPicker, A10RangePicker } = A10DatePicker;

const dateFormat = 'YYYY/MM/DD';
const monthFormat = 'YYYY/MM';

const DateFormatDemo = () => {
    return (
        <div>
            <A10DatePicker suffixIcon={<ComboIcons />} defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} />
            <br />
            <A10MonthPicker suffixIcon={<ComboIcons />} defaultValue={moment('2015/01', monthFormat)} format={monthFormat} />
            <br />
            <A10RangePicker
                suffixIcon={<ComboIcons />}
                defaultValue={[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]}
                format={dateFormat}
            />
        </div>
    )
}

export default DateFormatDemo