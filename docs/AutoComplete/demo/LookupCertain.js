import { A10Icon, A10Input, A10AutoComplete } from '../../../src';
import * as React from 'react'
import './index.less'
const Option = A10AutoComplete.Option;
const OptGroup = A10AutoComplete.OptGroup;

const dataSource = [{
    title: '话题',
    children: [{
        title: 'A10 ',
        count: 10000,
    }, {
        title: 'A10 UI',
        count: 10600,
    }],
}, {
    title: '问题',
    children: [{
        title: 'A10 UI 有多好',
        count: 60100,
    }, {
        title: 'A10 是啥',
        count: 30010,
    }],
}, {
    title: '文章',
    children: [{
        title: 'A10 是一个设计语言',
        count: 100000,
    }],
}];

function renderTitle(title) {
    return (
        <span>
            {title}
            <a
                style={{ float: 'right' }}
                href="https://www.google.com/search?q=a10-gui-widgets"
                target="_blank"
                rel="noopener noreferrer"
            >更多
      </a>
        </span>
    );
}

const options = dataSource.map(group => (
    <OptGroup
        key={group.title}
        label={renderTitle(group.title)}
    >
        {group.children.map(opt => (
            <Option key={opt.title} value={opt.title}>
                {opt.title}
                <span className="certain-search-item-count">{opt.count} 人 关注</span>
            </Option>
        ))}
    </OptGroup>
)).concat([
    <Option disabled key="all" className="show-all">
        <a
            href="https://www.google.com/search?q=a10-gui-widgets"
            target="_blank"
            rel="noopener noreferrer"
        >
            查看所有结果
    </a>
    </Option>,
]);

const Complete = () => {
    return (
        <div className="certain-category-search-wrapper" style={{ width: 250 }}>
            <A10AutoComplete
                className="certain-category-search"
                dropdownClassName="certain-category-search-dropdown"
                dropdownMatchSelectWidth={false}
                dropdownStyle={{ width: 300 }}
                size="large"
                style={{ width: '100%' }}
                dataSource={options}
                placeholder="input here"
                optionLabelProp="value"
            >
                <A10Input suffix={<A10Icon type="search" className="certain-category-icon" />} />
            </A10AutoComplete>
        </div>
    );
}

export default Complete