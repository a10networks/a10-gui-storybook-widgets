import {
    A10Icon, A10Button, A10Input, A10AutoComplete,
} from '../../../src';
import * as React from 'react'
import './index.less'
const Option = A10AutoComplete.Option;

function onSelect(value) {
    console.log('onSelect', value);
}

function getRandomInt(max, min = 0) {
    return Math.floor(Math.random() * (max - min + 1)) + min; // eslint-disable-line no-mixed-operators
}

function searchResult(query) {
    return (new Array(getRandomInt(5))).join('.').split('.')
        .map((item, idx) => ({
            query,
            category: `${query}${idx}`,
            count: getRandomInt(200, 100),
        }));
}

function renderOption(item) {
    return (
        <Option key={item.category} text={item.category}>
            {item.query} 在
        <a
                href={`https://s.taobao.com/search?q=${item.query}`}
                target="_blank"
                rel="noopener noreferrer"
            >
                {item.category}
            </a>
            区块中
        <span className="global-search-item-count">约 {item.count} 个结果</span>
        </Option>
    );
}

class Complete extends React.Component {
    state = {
        dataSource: [],
    }

    handleSearch = (value) => {
        this.setState({
            dataSource: value ? searchResult(value) : [],
        });
    }

    render() {
        const { dataSource } = this.state;
        return (
            <div className="global-search-wrapper" style={{ width: 280 }}>
                <A10AutoComplete
                    className="global-search"
                    size="large"
                    style={{ width: '100%' }}
                    dataSource={dataSource.map(renderOption)}
                    onSelect={onSelect}
                    onSearch={this.handleSearch}
                    placeholder="input here"
                    optionLabelProp="text"
                >
                    <A10Input
                        suffix={(
                            <A10Button className="search-btn" size="large" type="primary">
                                <A10Icon type="search" />
                            </A10Button>
                        )}
                    />
                </A10AutoComplete>
            </div>
        );
    }
}

export default Complete;