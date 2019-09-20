export const basicCode = `
import { A10AutoComplete } from 'a10-gui-widgets'

class Example extends React.Component {
  constructor() {
    super()
    this.state = {
      dataSource: [],
    }
  }

  handleSearch = (value) => {
    this.setState({
      dataSource: !value ? [] : [
        value,
        value + value,
        value + value + value,
      ],
    })
  }

  render() {
    const { dataSource } = this.state
    const onSelect(value) => {
      console.log('onSelect', value);
    }
    return (
      <A10AutoComplete
        dataSource={dataSource}
        style={{ width: 200 }}
        onSelect={onSelect}
        onSearch={this.handleSearch}
        placeholder="input here"
      />
    )
  }
}

ReactDOM.render(<Example />, mountNode)`


export const customizedCode = `
import { A10AutoComplete } from 'a10-gui-widgets'

const Option = A10AutoComplete.Option;

class Example extends React.Component {

  constructor() {
    super()
    this.state = {
      result: [],
    }
  }

  handleSearch = (value) => {
    let result;
    if (!value || value.indexOf('@') >= 0) {
      result = [];
    } else {
      result = ['gmail.com', '163.com', 'qq.com'].map(domain => ${"`${value}@${domain}`"});
    }
    this.setState({ result });
  }

  render() {
    const { result } = this.state;
    const children = result.map((email) => {
      return <Option key={email}>{email}</Option>;
    })

    return (
      <A10AutoComplete
        style={{ width: 200 }}
        onSearch={this.handleSearch}
        placeholder="input here"
      >
        {children}
      </A10AutoComplete>
    )
  }
}

ReactDOM.render(<Example />, mountNode)`

export const customizeInputCode = `import { A10AutoComplete, A10Input } from 'a10-gui-widgets';

const { TextArea } = A10Input;

function onSelect(value) {
  console.log('onSelect', value);
}

class Complete extends React.Component {
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
      >
        <TextArea
          placeholder="input here"
          className="custom"
          style={{ height: 50 }}
          onKeyPress={this.handleKeyPress}
        />
      </A10AutoComplete>
    );
  }
}

ReactDOM.render(<Complete />, mountNode);`

export const nonCaseSensitiveCode = `import { A10AutoComplete } from 'a10-gui-widgets';

const dataSource = ['Burns Bay Road', 'Downing Street', 'Wall Street'];

function Complete() {
  return (
    <A10AutoComplete
      style={{ width: 200 }}
      dataSource={dataSource}
      placeholder="try to type \`b\`"
      filterOption={(inputValue, option) => option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
    />
  );
}

ReactDOM.render(<Complete />, mountNode);`

export const lookupUncertainCode = `import {
  A10Icon, A10Button, A10Input, A10AutoComplete,
} from 'a10-gui-widgets';

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
      category: \`$\`{ query }$\`{idx }\`,
      count: getRandomInt(200, 100),
    }));
}

function renderOption(item) {
  return (
    <Option key={item.category} text={item.category}>
      {item.query} 在
      <a
        href={\`https://s.taobao.com/search?q=$\`{item.query}\`}
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
      <div className="global-search-wrapper" style={{ width: 300 }}>
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

ReactDOM.render(<Complete />, mountNode);`

export const lookupCertainCode = `import { A10Icon, A10Input, A10AutoComplete } from 'a10-gui-widgets';

const Option = A10AutoComplete.Option;
const OptGroup = A10AutoComplete.OptGroup;

const dataSource = [{
  title: '话题',
  children: [{
    title: 'A10',
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

function Complete() {
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

ReactDOM.render(<Complete />, mountNode);`

