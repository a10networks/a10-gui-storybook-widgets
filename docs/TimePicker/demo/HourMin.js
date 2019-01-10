import { A10TimePicker, A10Icon } from '../../../src';
import * as moment from 'moment';
import * as React from 'react';
import ComboIcons from './SuffixIcon'

const format = 'HH:mm';

const HourMinExample = () => {
    return (
        <A10TimePicker
            suffixIcon={<ComboIcons size="large" />}
            defaultValue={moment('12:08', format)} format={format} />
    )
}
export default HourMinExample