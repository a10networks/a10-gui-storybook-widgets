import { A10TimePicker, A10Icon } from '../../../src';
import * as React from 'react';
import ComboIcons from './SuffixIcon'

function onChange(time, timeString) {
    console.log(time, timeString);
}

const TwelveDemo = () => {
    return (
        <div>
            <A10TimePicker
                suffixIcon={<ComboIcons size="large" />}
                use12Hours
                onChange={onChange}
            />
            <A10TimePicker
                suffixIcon={<ComboIcons size="large" />} suffixIcon={<ComboIcons size="large" />}
                use12Hours
                format="h:mm:ss A"
                onChange={onChange}
            />
            <A10TimePicker
                suffixIcon={<ComboIcons size="large" />}
                use12Hours
                format="h:mm a"
                onChange={onChange}
            />
        </div>
    )
}

export default TwelveDemo