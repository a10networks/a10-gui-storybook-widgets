export const basicString = `import { A10Tag} from 'a10-gui-widgets'

const log = (e: any) => console.log(e)

const preventDefault = (e: any) => {
    e.preventDefault();
    console.log('Clicked! But prevent default.');
}

const Example = () => (
    <div>
        <A10Tag>A10Tag 1</A10Tag>
        <A10Tag><a href="https://github.com/ant-design/ant-design/issues/1862">Link</a></A10Tag>
        <A10Tag closable onClose={log}>A10Tag 2</A10Tag>
        <A10Tag closable onClose={preventDefault}>Prevent Default</A10Tag>
    </div>
)
ReactDOM.render(<Example />, mountNode);`

export const colorfulString = `import { A10Tag} from 'a10-gui-widgets'

const Example = () => (
    <div>
        <h4 style={{ marginBottom: 16 }}>Presets:</h4>
        <div>
            <A10Tag color="magenta">magenta</A10Tag>
            <A10Tag color="red">red</A10Tag>
            <A10Tag color="volcano">volcano</A10Tag>
            <A10Tag color="orange">orange</A10Tag>
            <A10Tag color="gold">gold</A10Tag>
            <A10Tag color="lime">lime</A10Tag>
            <A10Tag color="green">green</A10Tag>
            <A10Tag color="cyan">cyan</A10Tag>
            <A10Tag color="blue">blue</A10Tag>
            <A10Tag color="geekblue">geekblue</A10Tag>
            <A10Tag color="purple">purple</A10Tag>
        </div>
            <h4 style={{ margin: '16px 0' }}>Custom:</h4>
        <div>
            <A10Tag color="#f50">#f50</A10Tag>
            <A10Tag color="#2db7f5">#2db7f5</A10Tag>
            <A10Tag color="#87d068">#87d068</A10Tag>
            <A10Tag color="#108ee9">#108ee9</A10Tag>
        </div>
    </div>
)
ReactDOM.render(<Example />, mountNode);`

export const addRemoveString = `import {
    A10Tag, A10Input, A10Tooltip, A10Icon,
  } from 'a10-gui-widgets';
  
  class EditableTagGroup extends React.Component {
    state = {
      tags: ['Unremovable', 'A10Tag 2', 'A10Tag 3'],
      inputVisible: false,
      inputValue: '',
    };
  
    handleClose = (removedTag) => {
      const tags = this.state.tags.filter(tag => tag !== removedTag);
      console.log(tags);
      this.setState({ tags });
    }
  
    showInput = () => {
      this.setState({ inputVisible: true }, () => this.input.focus());
    }
  
    handleInputChange = (e) => {
      this.setState({ inputValue: e.target.value });
    }
  
    handleInputConfirm = () => {
      const state = this.state;
      const inputValue = state.inputValue;
      let tags = state.tags;
      if (inputValue && tags.indexOf(inputValue) === -1) {
        tags = [...tags, inputValue];
      }
      console.log(tags);
      this.setState({
        tags,
        inputVisible: false,
        inputValue: '',
      });
    }
  
    saveInputRef = input => this.input = input
  
    render() {
      const { tags, inputVisible, inputValue } = this.state;
      return (
        <div>
          {tags.map((tag, index) => {
            const isLongTag = tag.length > 20;
            const tagElem = (
              <A10Tag key={tag} closable={index !== 0} afterClose={() => this.handleClose(tag)}>
                {isLongTag ? \`$\{tag.slice(0, 20)}...\` : tag}
              </A10Tag>
            );
            return isLongTag ? <A10Tooltip title={tag} key={tag}>{tagElem}</A10Tooltip> : tagElem;
          })}
          {inputVisible && (
            <A10Input
              ref={this.saveInputRef}
              type="text"
              size="small"
              style={{ width: 78 }}
              value={inputValue}
              onChange={this.handleInputChange}
              onBlur={this.handleInputConfirm}
              onPressEnter={this.handleInputConfirm}
            />
          )}
          {!inputVisible && (
            <A10Tag
              onClick={this.showInput}
              style={{ background: '#fff', borderStyle: 'dashed' }}
            >
              <A10Icon type="plus" /> New A10Tag
            </A10Tag>
          )}
        </div>
      );
    }
  }
  
  ReactDOM.render(<EditableTagGroup />, mountNode);
  `

export const hotString = `import { A10Tag } from 'a10-gui-widgets';

  const CheckableTag = A10Tag.CheckableTag;
  
  const tagsFromServer = ['Movies', 'Books', 'Music', 'Sports'];
  
  class HotTags extends React.Component {
    state = {
      selectedTags: [],
    };
  
    handleChange(tag, checked) {
      const { selectedTags } = this.state;
      const nextSelectedTags = checked
        ? [...selectedTags, tag]
        : selectedTags.filter(t => t !== tag);
      console.log('You are interested in: ', nextSelectedTags);
      this.setState({ selectedTags: nextSelectedTags });
    }
  
    render() {
      const { selectedTags } = this.state;
      return (
        <div>
          <h6 style={{ marginRight: 8, display: 'inline' }}>Categories:</h6>
          {tagsFromServer.map(tag => (
            <CheckableTag
              key={tag}
              checked={selectedTags.indexOf(tag) > -1}
              onChange={checked => this.handleChange(tag, checked)}
            >
              {tag}
            </CheckableTag>
          ))}
        </div>
      );
    }
  }
  
  ReactDOM.render(<HotTags />, mountNode);`

export const checkableString = `import { A10Tag } from 'a10-gui-widgets';

  const { CheckableTag } = A10Tag;
  
  class MyTag extends React.Component {
    state = { checked: true };
  
    handleChange = (checked) => {
      this.setState({ checked });
    }
  
    render() {
      return <CheckableTag {...this.props} checked={this.state.checked} onChange={this.handleChange} />;
    }
  }
  
  ReactDOM.render(
    <div>
      <MyTag>Tag1</MyTag>
      <MyTag>Tag2</MyTag>
      <MyTag>Tag3</MyTag>
    </div>,
    mountNode
  );`

export const controlledString = `import { A10Tag, A10Button } from 'a10-gui-widgets';

  class Demo extends React.Component {
    state = {
      visible: true,
    }
  
    render() {
      return (
        <div>
          <A10Tag
            closable
            visible={this.state.visible}
            onClose={() => this.setState({ visible: false })}
          >
            Movies
          </A10Tag>
          <br />
          <A10Button
            size="small"
            onClick={() => this.setState({ visible: !this.state.visible })}
          >
            Toggle
          </A10Button>
        </div>
      );
    }
  }
  
  ReactDOM.render(<Demo />, mountNode);`