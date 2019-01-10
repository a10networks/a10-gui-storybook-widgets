import { A10TimePicker, A10Icon } from '../../../src';
import * as React from 'react';
import ComboIcons from './SuffixIcon'

export default class Demo extends React.Component {
    state = {
        value: null,
    };

    onChange = (time) => {
        console.log(time);
        this.setState({ value: time });
    }

    render() {
        return <A10TimePicker
            suffixIcon={<ComboIcons size="large" />}
            value={this.state.value}
            onChange={this.onChange}
        />;
    }
}
