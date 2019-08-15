export const basicDemoCode = `
import { A10Mentions } from 'a10-gui-widgets';

const { Option } = A10Mentions;

function onChange(value) {
  console.log('Change:', value);
}

function onSelect(option) {
  console.log('select', option);
}

ReactDOM.render(
  <A10Mentions
    style={{ width: '100%' }}
    onChange={onChange}
    onSelect={onSelect}
    defaultValue="@afc163"
  >
    <Option value="afc163">afc163</Option>
    <Option value="zombieJ">zombieJ</Option>
    <Option value="yesmeck">yesmeck</Option>
  </A10Mentions>,
  mountNode,
);
`

export const placementCode = `
import { A10Mentions } from 'a10-gui-widgets';

const { Option } = A10Mentions;

ReactDOM.render(
  <A10Mentions style={{ width: '100%' }} placement="top">
    <Option value="afc163">afc163</Option>
    <Option value="zombieJ">zombieJ</Option>
    <Option value="yesmeck">yesmeck</Option>
  </A10Mentions>,
  mountNode,
);
`

export const asynchronous = `
import { A10Mentions } from 'a10-gui-widgets'

const { Option } = A10Mentions

class Asynchronous extends React.Component {
  constructor() {
    super()

    this.loadGithubUsers = setTimeout(this.loadGithubUsers, 800)
  }

  state = {
    search: '',
    loading: false,
    users: [],
  }

  onSearch = search => {
    this.setState({ search, loading: !!search, users: [] })
    console.log('Search:', search)
    this.loadGithubUsers(search)
  }

  loadGithubUsers(key) {
    if (!key) {
      this.setState({
        users: [],
      })
      return
    }

    fetch(https://api.github.com/search/users?q=key)
      .then(res => res.json())
      .then(({ items = [] }) => {
        const { search } = this.state
        if (search !== key) return

        this.setState({
          users: items.slice(0, 10),
          loading: false,
        })
      })
  }

  render() {
    const { users, loading } = this.state

    return (
      <A10Mentions
        style={{ width: '100%' }}
        loading={loading}
        onSearch={this.onSearch}
      >
        {users.map(({ login, avatar_url: avatar }) => (
          <Option
            key={login}
            value={login}
            className="antd-demo-dynamic-option"
          >
            <img src={avatar} alt={login} />
            <span>{login}</span>
          </Option>
        ))}
      </A10Mentions>
    )
  }
}

ReactDOM.render(<AsyncMention />, mountNode);
`

export const withForm = `
import { A10Mentions, A10Form, A10Button } from 'a10-gui-widgets';

const { Option, getA10Mentions } = A10Mentions;

class App extends React.Component {
  handleReset = e => {
    e.preventDefault();
    this.props.form.resetFields();
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((errors, values) => {
      if (errors) {
        console.log('Errors in the form!!!');
        return;
      }
      console.log('Submit!!!');
      console.log(values);
    });
  };

  checkMention = (rule, value, callback) => {
    const mentions = getA10Mentions(value);
    if (mentions.length < 2) {
      callback(new Error('More than one must be selected!'));
    } else {
      callback();
    }
  };

  render() {
    const {
      form: { getFieldDecorator },
    } = this.props;

    return (
      <A10Form layout="horizontal">
        <A10Form.Item label="Top coders" labelCol={{ span: 6 }} wrapperCol={{ span: 16 }}>
          {getFieldDecorator('mention', {
            rules: [{ validator: this.checkMention }],
          })(
            <A10Mentions rows="3">
              <Option value="afc163">afc163</Option>
              <Option value="zombieJ">zombieJ</Option>
              <Option value="yesmeck">yesmeck</Option>
            </A10Mentions>,
          )}
        </A10Form.Item>
        <A10Form.Item wrapperCol={{ span: 14, offset: 6 }}>
          <A10Button type="primary" onClick={this.handleSubmit}>
            Submit
          </A10Button>
          &nbsp;&nbsp;&nbsp;
          <A10Button onClick={this.handleReset}>Reset</A10Button>
        </A10Form.Item>
      </A10Form>
    );
  }
}

const FormDemo = A10Form.create()(App);

ReactDOM.render(<FormDemo />, mountNode);
`

export const disabledOrReadOnly = `
import { A10Mentions } from 'a10-gui-widgets'

const { Option } = A10Mentions;

function getOptions() {
  return ['afc163', 'zombiej', 'yesmeck'].map(value => (
    <Option key={value} value={value}>
      {value}
    </Option>
  ));
}

function App() {
  return (
    <div>
      <div style={{ marginBottom: 10 }}>
        <A10Mentions style={{ width: '100%' }} placeholder="this is disabled A10Mentions" disabled>
          {getOptions()}
        </A10Mentions>
      </div>
      <A10Mentions style={{ width: '100%' }} placeholder="this is readOnly A10Mentions" readOnly>
        {getOptions()}
      </A10Mentions>
    </div>
  );
}

ReactDOM.render(<App />, mountNode);
`

export const customizeTriggerToken = `
import { A10Mentions } from 'a10-gui-widgets';

const { Option } = A10Mentions;

const MOCK_DATA = {
  '@': ['afc163', 'zombiej', 'yesmeck'],
  '#': ['1.0', '2.0', '3.0'],
};

class App extends React.Component {
  state = {
    prefix: '@',
  };

  onSearch = (_, prefix) => {
    this.setState({ prefix });
  };

  render() {
    const { prefix } = this.state;

    return (
      <A10Mentions
        style={{ width: '100%' }}
        placeholder="input @ to mention people, # to mention tag"
        prefix={['@', '#']}
        onSearch={this.onSearch}
      >
        {(MOCK_DATA[prefix] || []).map(value => (
          <Option key={value} value={value}>
            {value}
          </Option>
        ))}
      </A10Mentions>
    );
  }
}

ReactDOM.render(<App />, mountNode);
`
