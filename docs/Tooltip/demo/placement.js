import * as React from 'react'
import { A10Tooltip, A10Button } from '../../../src'
import './index.less'
const Example = () => {
  const text = <span>prompt text</span>;
  const buttonWidth = 70;
  return (
    <div id="placementTooltipSpecific">
      <div className="demo" style={{ marginLeft: '100px' }}>
        <div style={{ marginLeft: buttonWidth, whiteSpace: 'nowrap' }}>
          <A10Tooltip placement="topLeft" title={text}>
            <A10Button>TL</A10Button>
          </A10Tooltip>&nbsp;&nbsp;
        <A10Tooltip placement="top" title={text}>
            <A10Button>Top</A10Button>
          </A10Tooltip>&nbsp;&nbsp;
        <A10Tooltip placement="topRight" title={text}>
            <A10Button>TR</A10Button>
          </A10Tooltip>
        </div>
        <div style={{ width: buttonWidth, float: 'left' }}>
          <div style={{ paddingBottom: '8px', paddingTop: '8px' }}>
            <A10Tooltip placement="leftTop" title={text}>
              <A10Button>LT</A10Button>
            </A10Tooltip>
          </div>
          <div style={{ paddingBottom: '8px' }}>
            <A10Tooltip placement="left" title={text}>
              <A10Button>L</A10Button>
            </A10Tooltip>
          </div>
          <div style={{ paddingBottom: '8px' }}>
            <A10Tooltip placement="leftBottom" title={text}>
              <A10Button>LB</A10Button>
            </A10Tooltip>
          </div>
        </div>
        <div style={{ width: buttonWidth, marginLeft: (buttonWidth * 4) + 24 }}>
          <div style={{ paddingBottom: '8px', paddingTop: '8px' }}>
            <A10Tooltip placement="rightTop" title={text}>
              <A10Button>RT</A10Button>
            </A10Tooltip>
          </div>
          <div style={{ paddingBottom: '8px' }}>
            <A10Tooltip placement="right" title={text}>
              <A10Button>R</A10Button>
            </A10Tooltip>
          </div>
          <div style={{ paddingBottom: '8px' }}>
            <A10Tooltip placement="rightBottom" title={text}>
              <A10Button>RB</A10Button>
            </A10Tooltip>
          </div>
        </div>
        <div style={{ marginLeft: buttonWidth, clear: 'both', whiteSpace: 'nowrap' }}>
          <A10Tooltip placement="bottomLeft" title={text}>
            <A10Button>BL</A10Button>
          </A10Tooltip>&nbsp;&nbsp;
        <A10Tooltip placement="bottom" title={text}>
            <A10Button>Bot</A10Button>
          </A10Tooltip>&nbsp;&nbsp;
        <A10Tooltip placement="bottomRight" title={text}>
            <A10Button>BR</A10Button>
          </A10Tooltip>
        </div>
      </div>
    </div>
  )
}

export default Example
