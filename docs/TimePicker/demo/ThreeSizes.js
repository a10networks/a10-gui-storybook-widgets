import { A10TimePicker, A10Icon } from '../../../src';
import * as moment from 'moment';
import * as React from 'react'
import ComboIcons from './SuffixIcon'

const ThreeSizesDemo = () => {
    return (
        <div>
            <A10TimePicker
                suffixIcon={<ComboIcons size="large" />}
                defaultValue={moment('12:08:23', 'HH:mm:ss')}
                size="large" />
            <A10TimePicker
                suffixIcon={<ComboIcons size="medium" />}
                defaultValue={moment('12:08:23', 'HH:mm:ss')}
                size="medium" />
            <A10TimePicker
                suffixIcon={<ComboIcons size="small" />}
                defaultValue={moment('12:08:23', 'HH:mm:ss')}
                size="small" />
        </div>
    )
}

export default ThreeSizesDemo