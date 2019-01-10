import * as React from 'react'
import { A10DatePicker } from '../../../src';
import ComboIcons from './SuffixIcon'
const { A10RangePicker, A10MonthPicker } = A10DatePicker;

const ExtraFooterDemo = () => {
    return (
        <div>
            <A10DatePicker suffixIcon={<ComboIcons />} renderExtraFooter={() => 'extra footer'} />
            <A10DatePicker suffixIcon={<ComboIcons />} renderExtraFooter={() => 'extra footer'} showTime />
            <A10RangePicker suffixIcon={<ComboIcons />} renderExtraFooter={() => 'extra footer'} />
            <A10RangePicker suffixIcon={<ComboIcons />} renderExtraFooter={() => 'extra footer'} showTime />
            <br />
            <A10MonthPicker suffixIcon={<ComboIcons />} renderExtraFooter={() => 'extra footer'} placeholder="Select month" />
        </div>
    )
}

export default ExtraFooterDemo
