import * as React from 'react'
import { A10DatePicker } from '../../../src';
import ComboIcons from './SuffixIcon'
const { A10RangePicker } = A10DatePicker;

export class ControlledDatePicker extends React.Component {
    state = { mode: 'time' };

    handleOpenChange = (open) => {
        if (open) {
            this.setState({ mode: 'time' });
        }
    }

    handlePanelChange = (value, mode) => {
        this.setState({ mode });
    }

    render() {
        return (
            <A10DatePicker
                mode={this.state.mode}
                showTime
                onOpenChange={this.handleOpenChange}
                onPanelChange={this.handlePanelChange}
                suffixIcon={<ComboIcons />}
            />
        );
    }
}

export class ControlledRangePicker extends React.Component {
    state = {
        mode: ['month', 'month'],
        value: [],
    };

    handlePanelChange = (value, mode) => {
        this.setState({
            value,
            mode: [
                mode[0] === 'date' ? 'month' : mode[0],
                mode[1] === 'date' ? 'month' : mode[1],
            ],
        });
    }

    render() {
        const { value, mode } = this.state;
        return (
            <A10RangePicker
                placeholder={['Start month', 'End month']}
                format="YYYY-MM"
                value={value}
                mode={mode}
                onPanelChange={this.handlePanelChange}
                suffixIcon={<ComboIcons />}
            />
        );
    }
}
