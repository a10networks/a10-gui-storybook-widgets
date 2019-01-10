import { A10TimePicker, A10Icon } from '../../../src';
import * as moment from 'moment';
import * as React from 'react';
import ComboIcons from './SuffixIcon'

const DisableDemo = () => {
    return (
        <div id="DisabledTimepickerSpecific">
            <A10TimePicker
                suffixIcon={<ComboIcons size="large" />}
                defaultValue={moment('12:08:23', 'HH:mm:ss')} disabled />
        </div>
    )
}

export default DisableDemo