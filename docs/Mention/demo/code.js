export const basicDemoCode = `import { A10Mention } from 'a10-gui-widgets'
const { toString, toContentState } = A10Mention;

function onChange(contentState) {
  console.log('onChange', contentState);
}

function onSelect(suggestion) {
  console.log('onSelect', suggestion);
}

ReactDOM.render(
  <A10Mention
    style={{ width: '100%' }}
    onChange={onChange}
    defaultValue={toContentState('@afc163')}
    suggestions={['afc163', 'benjycui', 'yiminghe', 'RaoHai', '中文', 'にほんご']}
    onSelect={onSelect}
  />
, mountNode);`

export const placementCode = `import { A10Mention } from 'a10-gui-widgets';

const onChange = (contentState) => {
  console.log(A10Mention.toString(contentState));
}

const onSelect = (suggestion) => {
  console.log('onSelect', suggestion);
}

const Example = () => (
  <A10Mention
    style={{ width: '100%' }}
    onChange={onChange}
    suggestions={['afc163', 'benjycui', 'yiminghe', 'RaoHai', '中文', 'にほんご']}
    onSelect={onSelect}
    placement="top"
  />
)

ReactDOM.render(<Example />, mountNode);`

export const asynchronous = `
import { A10Mention } from 'a10-gui-widgets';

const users = ['afc163', 'benjycui', 'yiminghe', 'jljsj33', 'dqaria', 'RaoHai'];

class AsyncMention extends React.Component {
  state = {
    suggestions: [],
    loading: false,
  }

  fetchSuggestions = (value, callback) => {
    setTimeout(() => {
      callback(users.filter(item => item.indexOf(value) !== -1));
    }, 500);
  }

  onSearchChange = (value) => {
    this.fetchSuggestions(value, (suggestions) => {
      this.setState({
        suggestions,
        loading: false,
      });
    });
    this.setState({
      loading: true,
    });
  }

  render() {
    const { suggestions, loading } = this.state;
    return (
      <A10Mention
        style={{ width: '100%' }}
        loading={loading}
        suggestions={suggestions}
        onSearchChange={this.onSearchChange}
      />
    );
  }
}

ReactDOM.render(<AsyncMention />, mountNode);
`

export const customizeSuggestion = `
import { A10Mention } from 'a10-gui-widgets';

const Nav = A10Mention.Nav;

const webFrameworks = [
  { name: 'React', type: 'JavaScript' },
  { name: 'Angular', type: 'JavaScript' },
  { name: 'Laravel', type: 'PHP', disabled: true },
  { name: 'Flask', type: 'Python' },
  { name: 'Django', type: 'Python' },
];

function onSelect(suggestion, data) {
  console.log('onSelect', suggestion, data);
}

class CustomNavMention extends React.Component {
  state = {
    suggestions: [],
  }

  onSearchChange = (value) => {
    const searchValue = value.toLowerCase();
    const filtered = webFrameworks.filter(item => item.name.toLowerCase().indexOf(searchValue) !== -1);
    const suggestions = filtered.map(suggestion => (
      <Nav
        value={suggestion.name}
        data={suggestion}
      >
        <span>{suggestion.name} - {suggestion.type}</span>
      </Nav>
    ));
    this.setState({ suggestions });
  }

  render() {
    const { suggestions } = this.state;
    return (
      <A10Mention
        placeholder="@someone"
        style={{ width: '100%' }}
        suggestions={suggestions}
        onSearchChange={this.onSearchChange}
        onSelect={onSelect}
      />
    );
  }
}

ReactDOM.render(<CustomNavMention />, mountNode);
`

export const iconImageCode = `import { A10Mention, A10Avatar } from 'a10-gui-widgets';
const Nav = A10Mention.Nav;

const webFrameworks = [
  { name: 'React', type: 'JavaScript', icon: 'https://zos.alipayobjects.com/rmsportal/LFIeMPzdLcLnEUe.svg' },
  { name: 'Angular', type: 'JavaScript', icon: 'https://zos.alipayobjects.com/rmsportal/PJTbxSvzYWjDZnJ.png' },
  { name: 'Dva', type: 'Javascript', icon: 'https://zos.alipayobjects.com/rmsportal/EYPwSeEJKxDtVxI.png' },
  { name: 'Flask', type: 'Python', icon: 'https://zos.alipayobjects.com/rmsportal/xaypBUijfnpAlXE.png' },
];

class Example extends React.Component {
  state = {
    suggestions: [],
  }
  onSearchChange = (value) => {
    const searchValue = value.toLowerCase();
    const filtered = webFrameworks.filter(item =>
      item.name.toLowerCase().indexOf(searchValue) !== -1
    );
    const suggestions = filtered.map(suggestion => (
      <Nav
        value={suggestion.name}
        data={suggestion}
        disabled={suggestion.disabled}
      >
        <A10Avatar
          src={suggestion.icon}
          size="small"
          style={{ width: 14, height: 14, marginRight: 8, top: 2, position: 'relative' }}
        />
        {suggestion.name} - {suggestion.type}
      </Nav>
    ));
    this.setState({ suggestions });
  }
  render() {
    const { suggestions } = this.state;
    return (
      <A10Mention
        style={{ width: '100%' }}
        suggestions={suggestions}
        onSearchChange={this.onSearchChange}
      />
    );
  }
}

ReactDOM.render(<Example />, mountNode);`

export const controlled = `
import { A10Mention } from 'a10-gui-widgets';

const { toContentState } = A10Mention;

class App extends React.Component {
  state = {
    value: toContentState('@afc163'),
  }

  componentDidMount() {
    this.mention.focus();
  }

  handleChange = (editorState) => {
    this.setState({
      value: editorState,
    });
  }

  render() {
    return (
      <A10Mention
        ref={ele => this.mention = ele}
        suggestions={['afc163', 'benjycui', 'yiminghe', 'RaoHai', '中文', 'にほんご']}
        value={this.state.value}
        onChange={this.handleChange}
      />
    );
  }
}

ReactDOM.render(<App />, mountNode);
`

export const withForm = `
import { A10Mention, A10Form, A10Button } from 'a10-gui-widgets';

const { toContentState, getMentions } = A10Mention;
const FormItem = A10Form.Item;

class App extends React.Component {
  state = {
    initValue: toContentState('@afc163'),
  }

  handleReset = (e) => {
    e.preventDefault();
    this.props.form.resetFields();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((errors, values) => {
      if (errors) {
        console.log('Errors in the form!!!');
        return;
      }
      console.log('Submit!!!');
      console.log(values);
    });
  }

  checkMention = (rule, value, callback) => {
    const { getFieldValue } = this.props.form;
    const mentions = getMentions(getFieldValue('mention'));
    if (mentions.length < 2) {
      callback(new Error('More than one must be selected!'));
    } else {
      callback();
    }
  }

  render() {
    const { getFieldDecorator, getFieldValue } = this.props.form;
    console.log('>> render', getFieldValue('mention') === this.state.initValue);
    return (
      <A10Form layout="horizontal">
        <FormItem
          id="control-mention"
          label="Top coders"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 16 }}
        >
          {getFieldDecorator('mention', {
            rules: [
              { validator: this.checkMention },
            ],
            initialValue: this.state.initValue,
          })(
            <A10Mention
              suggestions={['afc163', 'benjycui', 'yiminghe', 'RaoHai', '中文', 'にほんご']}
            />
          )}
        </FormItem>
        <FormItem wrapperCol={{ span: 14, offset: 6 }}>
          <A10Button type="primary" onClick={this.handleSubmit}>Submit</A10Button>
          &nbsp;&nbsp;&nbsp;
          <A10Button onClick={this.handleReset}>Reset</A10Button>
        </FormItem>
      </A10Form>
    );
  }
}

const FormDemo = A10Form.create()(App);

ReactDOM.render(<FormDemo />, mountNode);
`

export const multiLines = `
import { A10Mention} from 'a10-gui-widgets';

const { toString } = A10Mention;

function onChange(editorState) {
  console.log(toString(editorState));
}

ReactDOM.render(
  <A10Mention
    style={{ width: '100%', height: 100 }}
    onChange={onChange}
    suggestions={['afc163', 'benjycui', 'yiminghe', 'jljsj33', 'dqaria', 'RaoHai']}
    multiLines
  />,
  mountNode
);

`

export const disabledOrReadOnly = `
import { A10Mention} from 'a10-gui-widgets';

const { toString } = A10Mention;

function onChange(editorState) {
  console.log(toString(editorState));
}

const users = ['afc163', 'benjycui', 'yiminghe', 'jljsj33', 'dqaria', 'RaoHai'];

function App() {
  return (
    <div>
      <div style={{ marginBottom: 10 }}>
        <A10Mention
          style={{ width: '100%' }}
          onChange={onChange}
          placeholder="this is disabled Mention"
          suggestions={users}
          disabled
        />
      </div>
      <A10Mention
        style={{ width: '100%' }}
        onChange={onChange}
        placeholder="this is readOnly Mention"
        suggestions={users}
        readOnly
      />
    </div>
  );
}


ReactDOM.render(
  <App />,
  mountNode
);`

export const suggestionContainer = `
import { A10Mention, A10Popover, A10Button } from 'a10-gui-widgets';

const { toString, toContentState } = A10Mention;

function onChange(editorState) {
  console.log(toString(editorState));
}

function onSelect(suggestion) {
  console.log('onSelect', suggestion);
}

class PopoverContainer extends React.Component {
  getSuggestionContainer = () => this.popover.getPopupDomNode()

  visibleChange = (visible) => {
    if (visible && this.mention) {
      this.mention.focus();
    }
  }

  render() {
    const mention = (
      <A10Mention
        ref={ele => this.mention = ele}
        style={{ width: '100%' }}
        onChange={onChange}
        defaultValue={toContentState('@afc163')}
        suggestions={['afc163', 'benjycui', 'yiminghe', 'RaoHai', '中文', 'にほんご']}
        onSelect={onSelect}
        getSuggestionContainer={this.getSuggestionContainer}
      />
    );
    return (
      <A10Popover
        trigger="click"
        content={mention}
        title="Title"
        ref={popover => this.popover = popover}
        onVisibleChange={this.visibleChange}
      >
        <A10Button type="primary">Click Me</A10Button>
      </A10Popover>
    );
  }
}

ReactDOM.render(<PopoverContainer />, mountNode);
`

export const customizeTriggerToken = `
import { A10Mention } from 'a10-gui-widgets';

const { toString } = A10Mention;

function onChange(editorState) {
  console.log(toString(editorState));
}

function onSelect(suggestion) {
  console.log('onSelect', suggestion);
}

const users = ['afc163', 'benjycui', 'yiminghe', 'jljsj33', 'dqaria', 'RaoHai'];
const tags = ['1.0', '2.0', '3.0'];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      suggestions: [],
    };
  }

  onSearchChange = (value, trigger) => {
    console.log('onSearchChange', value, trigger);
    const dataSource = trigger === '@' ? users : tags;
    this.setState({
      suggestions: dataSource.filter(item => item.indexOf(value) !== -1),
    });
  }

  render() {
    return (
      <A10Mention
        style={{ width: '100%' }}
        onChange={onChange}
        placeholder="input @ to mention people, # to mention tag"
        prefix={['@', '#']}
        onSearchChange={this.onSearchChange}
        suggestions={this.state.suggestions}
        onSelect={onSelect}
      />
    );
  }
}

ReactDOM.render(
  <App />,
  mountNode
);
`