export const basicPopoverCode = `import { A10Popover, A10Button } from 'a10-gui-widgets'

class Example extends React.Component {
  render() {
    const text = <span>Title</span>;
    const content = (
      <div>
        <p>Content</p>
        <p>Content</p>
      </div>
    );
    const buttonWidth = 70;
    return (
      <div className="demo">
          <A10Popover placement="topLeft" title={text} content={content} trigger="click">
            <A10Button>TL</A10Button>
          </A10Popover>
          <A10Popover placement="top" title={text} content={content} trigger="click">
            <A10Button>Top</A10Button>
          </A10Popover>
          <A10Popover placement="topRight" title={text} content={content} trigger="click">
            <A10Button>TR</A10Button>
          </A10Popover>
        <div style={{ width: buttonWidth, float: 'left' }}>
          <A10Popover placement="leftTop" title={text} content={content} trigger="click">
            <A10Button>LT</A10Button>
          </A10Popover>
          <A10Popover placement="left" title={text} content={content} trigger="click">
            <A10Button>Left</A10Button>
          </A10Popover>
          <A10Popover placement="leftBottom" title={text} content={content} trigger="click">
            <A10Button>LB</A10Button>
          </A10Popover>
        </div>
        <div style={{ width: buttonWidth, marginLeft: (buttonWidth * 4) + 24 }}>
          <A10Popover placement="rightTop" title={text} content={content} trigger="click">
            <A10Button>RT</A10Button>
          </A10Popover>
          <A10Popover placement="right" title={text} content={content} trigger="click">
            <A10Button>Right</A10Button>
          </A10Popover>
          <A10Popover placement="rightBottom" title={text} content={content} trigger="click">
            <A10Button>RB</A10Button>
          </A10Popover>
        </div>
        <div style={{ marginLeft: buttonWidth, clear: 'both', whiteSpace: 'nowrap' }}>
          <A10Popover placement="bottomLeft" title={text} content={content} trigger="click">
            <A10Button>BL</A10Button>
          </A10Popover>
          <A10Popover placement="bottom" title={text} content={content} trigger="click">
            <A10Button>Bottom</A10Button>
          </A10Popover>
          <A10Popover placement="bottomRight" title={text} content={content} trigger="click">
            <A10Button>BR</A10Button>
          </A10Popover>
        </div>
      </div>
    );
  }
}
ReactDOM.render(<Example />, mountNode)`

export const clickPopoverCode = `import { A10Popover, A10Button } from 'a10-gui-widgets'

class Example extends React.Component {
  state = {
    visible: false,
  }
  hide = () => {
    this.setState({
      visible: false,
    });
  }
  handleVisibleChange = (visible) => {
    this.setState({ visible });
  }
  render() {
    return (
      <A10Popover
        content={<a onClick={this.hide}>Close</a>}
        title="Title"
        trigger="click"
        visible={this.state.visible}
        onVisibleChange={this.handleVisibleChange}
      >
        <A10Button type="primary">Click me</A10Button>
      </A10Popover>
    );
  }
}
ReactDOM.render(<Example />, mountNode)`

export const arrowPointingCode = `
import { A10Popover, A10Button } from 'a10-gui-widgets'

const text = <span>Title</span>;
const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

ReactDOM.render(
  <div>
    <A10Popover placement="topLeft" title={text} content={content}>
      <A10Button>Align edge / 边缘对齐</A10Button>
    </A10Popover>
    <A10Popover placement="topLeft" title={text} content={content} arrowPointAtCenter>
      <A10Button>Arrow points to center / 箭头指向中心</A10Button>
    </A10Popover>
  </div>,
  mountNode
);

`

export const hoverClickPopoverCode = `
import { A10Popover, A10Button } from 'a10-gui-widgets'

class App extends React.Component {
  state = {
    clicked: false,
    hovered: false,
  };

  hide = () => {
    this.setState({
      clicked: false,
      hovered: false,
    });
  }

  handleHoverChange = (visible) => {
    this.setState({
      hovered: visible,
      clicked: false,
    });
  }

  handleClickChange = (visible) => {
    this.setState({
      clicked: visible,
      hovered: false,
    });
  }

  render() {
    const hoverContent = (
      <div>
        This is hover content.
      </div>
    );
    const clickContent = (
      <div>
        This is click content.
      </div>
    );
    return (
      <A10Popover
        style={{ width: 500 }}
        content={hoverContent}
        title="Hover title"
        trigger="hover"
        visible={this.state.hovered}
        onVisibleChange={this.handleHoverChange}
      >
        <A10Popover
          content={(
            <div>
              {clickContent}
              <a onClick={this.hide}>Close</a>
            </div>
          )}
          title="Click title"
          trigger="click"
          visible={this.state.clicked}
          onVisibleChange={this.handleClickChange}
        >
          <A10Button>Hover and click / 悬停并单击</A10Button>
        </A10Popover>
      </A10Popover>
    );
  }
}

ReactDOM.render(<App />, mountNode);
`