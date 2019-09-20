import * as React from 'react'
import { A10AutoComplete, A10Input } from '../../../src'

const { TextArea } = A10Input;

function onSelect(value) {
    console.log('onSelect', value);
}

export default class Complete extends React.Component {
    state = {
        dataSource: [],
    }

    handleSearch = (value) => {
        this.setState({
            dataSource: !value ? [] : [
                value,
                value + value,
                value + value + value,
            ],
        });
    }

    handleKeyPress = (ev) => {
        console.log('handleKeyPress', ev);
    }

    render() {
        const { dataSource } = this.state;
        return (
            <A10AutoComplete
                dataSource={dataSource}
                style={{ width: 200 }}
                onSelect={onSelect}
                onSearch={this.handleSearch}
                placeholder="input here"
                className="custom"
                style={{ height: 50 }}
                onKeyPress={this.handleKeyPress}
            >
                {/* <TextArea
                    placeholder="input here"
                    className="custom"
                    style={{ height: 50 }}
                    onKeyPress={this.handleKeyPress}
                /> */}
            </A10AutoComplete>
        );
    }
}
