
export const basicCode = `import { A10Input } from 'a10-gui-widgets'

const Example = () => (
  <A10Input placeholder="Basic usage" />
)
ReactDOM.render(<Example />, mountNode);`

export const demo2Code = `import { A10Input, A10Select } from 'a10-gui-widgets'

const Option = A10Select.Option
const Example = () => {
  const selectBefore = (
    <A10Select defaultValue="Http://" style={{ width: 90 }}>
      <Option value="Http://">Http://</Option>
      <Option value="Https://">Https://</Option>
    </A10Select>
  )
  const selectAfter = (
    <A10Select defaultValue=".com" style={{ width: 80 }}>
      <Option value=".com">.com</Option>
      <Option value=".jp">.jp</Option>
      <Option value=".cn">.cn</Option>
      <Option value=".org">.org</Option>
    </A10Select>
  )
  return (
    <React.Fragment>
      <div style={{ marginBottom: 16 }}>
        <A10Input
          addonBefore="Http://"
          addonAfter=".com"
          defaultValue="mysite"
        />
      </div>
      <div style={{ marginBottom: 16 }}>
        <A10Input
          addonBefore={selectBefore}
          addonAfter={selectAfter}
          defaultValue="mysite"
        />
      </div>
      <div style={{ marginBottom: 16 }}>
        <A10Input addonAfter={<Icon type="setting" />} defaultValue="mysite" />
      </div>
    </React.Fragment>
  )
}
ReactDOM.render(<Example />, mountNode);`

export const textareaCode = `import { A10Input } from 'a10-gui-widgets'

const TextArea = A10Input.TextArea
const Example = () => {
  return (
    <div>
      <TextArea placeholder="Autosize height based on content lines" autosize />
      <div style={{ margin: '24px 0' }} />
      <TextArea
        placeholder="Autosize height with minimum and maximum number of lines"
        autosize={{ minRows: 2, maxRows: 6 }}
      />
    </div>
  )
}
ReactDOM.render(<Example />, mountNode);`

export const inputGroupCode = `import { A10Input, A10Select } from 'a10-gui-widgets'

const InputGroup = A10Input.InputGroup
const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
]

class Example extends React.Component {
  state = {
    dataSource: [],
  }
  handleChange = value => {
    this.setState({
      dataSource:
        !value || value.indexOf('@') >= 0
          ? []
          : [${"`${value}@gmail.com`, `${value}@163.com`, `${value}@qq.com`"}],
    })
  }
  render() {
    return (
      <div>
        <InputGroup size="large">
          <Col span={4}>
            <A10Input defaultValue="0571" />
          </Col>
          <Col span={8}>
            <A10Input defaultValue="26888888" />
          </Col>
        </InputGroup>
        <br />
        <InputGroup compact>
          <A10Input style={{ width: '20%' }} defaultValue="0571" />
          <A10Input style={{ width: '30%' }} defaultValue="26888888" />
        </InputGroup>
        <br />
        <InputGroup compact>
          <A10Select defaultValue="Zhejiang">
            <Option value="Zhejiang">Zhejiang</Option>
            <Option value="Jiangsu">Jiangsu</Option>
          </A10Select>
          <A10Input
            style={{ width: '50%' }}
            defaultValue="Xihu District, Hangzhou"
          />
        </InputGroup>
        <InputGroup compact>
          <A10Select defaultValue="Option1-1">
            <Option value="Option1-1">Option1-1</Option>
            <Option value="Option1-2">Option1-2</Option>
          </A10Select>
          <A10Select defaultValue="Option2-2">
            <Option value="Option2-1">Option2-1</Option>
            <Option value="Option2-2">Option2-2</Option>
          </A10Select>
        </InputGroup>
        <InputGroup compact>
          <A10Select defaultValue="1">
            <Option value="1">Between</Option>
            <Option value="2">Except</Option>
          </A10Select>
          <A10Input
            style={{ width: 100, textAlign: 'center' }}
            placeholder="Minimum"
          />
          <A10Input
            style={{
              width: 24,
              borderLeft: 0,
              pointerEvents: 'none',
              backgroundColor: '#fff',
            }}
            placeholder="~"
            disabled
          />
          <A10Input
            style={{ width: 100, textAlign: 'center', borderLeft: 0 }}
            placeholder="Maximum"
          />
        </InputGroup>
        <br />
          {<InputGroup compact>
            <A10Select defaultValue="Sign Up">
              <Option value="Sign Up">Sign Up</Option>
              <Option value="Sign In">Sign In</Option>
            </A10Select>
            <AutoComplete
              dataSource={this.state.dataSource}
              style={{ width: 200 }}
              onChange={this.handleChange}
              placeholder="Email"
            />
          </InputGroup>}
          <br />
          {<InputGroup compact>
            <A10Select style={{ width: '30%' }} defaultValue="Home">
              <Option value="Home">Home</Option>
              <Option value="Company">Company</Option>
            </A10Select>
            <Cascader
              style={{ width: '70%' }}
              options={options}
              placeholder="A10Select Address"
            />
          </InputGroup>}
      </div>
    )
  }
}
ReactDOM.render(<Example />, mountNode);`

export const threesizesInput = `
import { A10Input } from 'a10-gui-widgets';

ReactDOM.render(
  <div className="example-input">
    <A10Input size="large" placeholder="large size" />
    <A10Input placeholder="default size" />
    <A10Input size="small" placeholder="small size" />
  </div>,
  mountNode
);
`
export const searchBox = `
import { A10Input } from 'a10-gui-widgets';

const Search = A10Input.Search;

ReactDOM.render(
  <div>
    <Search
      placeholder="input search text"
      onSearch={value => console.log(value)}
      style={{ width: 200 }}
    />
    <br /><br />
    <Search
      placeholder="input search text"
      onSearch={value => console.log(value)}
      enterButton
    />
    <br /><br />
    <Search
      placeholder="input search text"
      enterButton="Search"
      size="large"
      onSearch={value => console.log(value)}
    />
  </div>,
  mountNode
);
`
export const prefixSuffix = `
import { A10Input, A10Icon } from 'a10-gui-widgets';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
    };
  }

  emitEmpty = () => {
    this.userNameInput.focus();
    this.setState({ userName: '' });
  }

  onChangeUserName = (e) => {
    this.setState({ userName: e.target.value });
  }

  render() {
    const { userName } = this.state;
    const suffix = userName ? <A10Icon type="close-circle" onClick={this.emitEmpty} /> : null;
    return (
      <A10Input
        placeholder="Enter your username"
        prefix={<A10Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
        suffix={suffix}
        value={userName}
        onChange={this.onChangeUserName}
        ref={node => this.userNameInput = node}
      />
    );
  }
}

ReactDOM.render(<App />, mountNode);
`

export const textArea = `
import { A10Input } from 'a10-gui-widgets';

const { TextArea } = A10Input;

ReactDOM.render(<TextArea rows={4} />, mountNode);
`

export const formatTooltipInput = `
import { A10Input, A10Tooltip } from 'antd';

function formatNumber(value) {
  value += '';
  const list = value.split('.');
  const prefix = list[0].charAt(0) === '-' ? '-' : '';
  let num = prefix ? list[0].slice(1) : list[0];
  let result = '';
  while (num.length > 3) {
    result = ',{num.slice(-3)result';
    num = num.slice(0, num.length - 3);
  }
  if (num) {
    result = num + result;
  }
  return '{prefix}{result}{list[1] ? '.{list[1]} : ''}'';
}

class NumericInput extends React.Component {
  onChange = (e) => {
    const { value } = e.target;
    const reg = /^-?(0|[1-9][0-9]*)(\.[0-9]*)?$/;
    if ((!Number.isNaN(value) && reg.test(value)) || value === '' || value === '-') {
      this.props.onChange(value);
    }
  }

  // '.' at the end or only '-' in the input box.
  onBlur = () => {
    const { value, onBlur, onChange } = this.props;
    if (value.charAt(value.length - 1) === '.' || value === '-') {
      onChange({ value: value.slice(0, -1) });
    }
    if (onBlur) {
      onBlur();
    }
  }

  render() {
    const { value } = this.props;
    const title = value ? (
      <span className="numeric-input-title">
        {value !== '-' ? formatNumber(value) : '-'}
      </span>
    ) : 'Input a number';
    return (
      <A10Tooltip
        trigger={['focus']}
        title={title}
        placement="topLeft"
        overlayClassName="numeric-input"
      >
        <A10Input
          {...this.props}
          onChange={this.onChange}
          onBlur={this.onBlur}
          placeholder="Input a number"
          maxLength="25"
        />
      </A10Tooltip>
    );
  }
}

class NumericInputDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  onChange = (value) => {
    this.setState({ value });
  }

  render() {
    return <NumericInput style={{ width: 120 }} value={this.state.value} onChange={this.onChange} />;
  }
}

ReactDOM.render(<NumericInputDemo />, mountNode);
`