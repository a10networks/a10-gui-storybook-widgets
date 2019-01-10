import { A10TimePicker, A10Icon } from '../../../src';
import * as React from 'react';
import ComboIcons from './SuffixIcon'

const IntervalDemo = () => {
    return (
        <A10TimePicker
            suffixIcon={<ComboIcons size="large" />}
            minuteStep={15}
            secondStep={10}
        />
    )
}

export default IntervalDemo