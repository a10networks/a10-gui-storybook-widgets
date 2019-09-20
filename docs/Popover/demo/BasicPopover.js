
import * as React from 'react'
import { A10Popover, A10Button } from '../../../src'

export default class App extends React.Component {
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
      <div id="BasicPopoverSpecific" className="demo" style={{ marginLeft: '100px' }}>
        <div style={{ marginLeft: buttonWidth, whiteSpace: 'nowrap' }}>
          <A10Popover placement="topLeft" title={text} content={content} trigger="click">
            <A10Button>TL</A10Button>
          </A10Popover>&nbsp;&nbsp;
          <A10Popover placement="top" title={text} content={content} trigger="click">
            <A10Button>Top</A10Button>
          </A10Popover>&nbsp;&nbsp;
          <A10Popover placement="topRight" title={text} content={content} trigger="click">
            <A10Button>TR</A10Button>
          </A10Popover>
        </div>
        <div style={{ width: buttonWidth, float: 'left' }}>
          <div style={{ paddingBottom: '8px', paddingTop: '8px' }}>
            <A10Popover placement="leftTop" title={text} content={content} trigger="click">
              <A10Button>LT</A10Button>
            </A10Popover>
          </div>
          <div style={{ paddingBottom: '8px' }}>
            <A10Popover placement="left" title={text} content={content} trigger="click">
              <A10Button>L</A10Button>
            </A10Popover>
          </div>
          <div style={{ paddingBottom: '8px' }}>
            <A10Popover placement="leftBottom" title={text} content={content} trigger="click">
              <A10Button>LB</A10Button>
            </A10Popover>
          </div>
        </div>
        <div style={{ width: buttonWidth, marginLeft: (buttonWidth * 4) + 24 }}>
          <div style={{ paddingBottom: '8px', paddingTop: '8px' }}>
            <A10Popover placement="rightTop" title={text} content={content} trigger="click">
              <A10Button>RT</A10Button>
            </A10Popover>
          </div>
          <div style={{ paddingBottom: '8px' }}>
            <A10Popover placement="right" title={text} content={content} trigger="click">
              <A10Button>R</A10Button>
            </A10Popover>
          </div>
          <div style={{ paddingBottom: '8px' }}>
            <A10Popover placement="rightBottom" title={text} content={content} trigger="click">
              <A10Button>RB</A10Button>
            </A10Popover>
          </div>
        </div>
        <div style={{ marginLeft: buttonWidth, clear: 'both', whiteSpace: 'nowrap' }}>
          <A10Popover placement="bottomLeft" title={text} content={content} trigger="click">
            <A10Button>BL</A10Button>
          </A10Popover>&nbsp;&nbsp;
          <A10Popover placement="bottom" title={text} content={content} trigger="click">
            <A10Button>Bot</A10Button>
          </A10Popover>&nbsp;&nbsp;
          <A10Popover placement="bottomRight" title={text} content={content} trigger="click">
            <A10Button>BR</A10Button>
          </A10Popover>
        </div>
      </div>
    );
  }
}
