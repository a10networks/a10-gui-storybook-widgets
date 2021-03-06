import * as React from 'react'
import { A10Cascader } from '../../../src'

const options = [{
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [{
        value: 'hangzhou',
        label: 'Hangzhou',
    }],
}, {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [{
        value: 'nanjing',
        label: 'Nanjing',
    }],
}];

export default class CustomTriggerDemo extends React.Component {
    state = {
        text: 'Unselect',
    };

    onChange = (value, selectedOptions) => {
        this.setState({
            text: selectedOptions.map(o => o.label).join(', '),
        });
    }

    render() {
        return (
            <span>
                {this.state.text}
                &nbsp;
          <A10Cascader options={options} onChange={this.onChange}>
                    <a href="#">Change city</a>
                </A10Cascader>
            </span>
        );
    }
}
