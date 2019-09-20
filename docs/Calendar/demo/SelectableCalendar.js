import { A10Calendar, A10Alert } from '../../../src';
import * as moment from 'moment';
import * as React from 'react'

class SelectableDemo extends React.Component {
    state = {
        value: moment('2017-01-25'),
        selectedValue: moment('2017-01-25'),
    }

    onSelect = (value) => {
        this.setState({
            value,
            selectedValue: value,
        });
    }

    onPanelChange = (value) => {
        this.setState({ value });
    }

    render() {
        const { value, selectedValue } = this.state;
        return (
            <div>
                <A10Alert message={`You selected date: ${selectedValue && selectedValue.format('YYYY-MM-DD')}`} />
                <A10Calendar value={value} onSelect={this.onSelect} onPanelChange={this.onPanelChange} />
            </div>
        );
    }
}

export default SelectableDemo