
export const basicTooltipCode = `
import { A10Tooltip } from 'a10-gui-widgets';

ReactDOM.render(
  <A10Tooltip title="prompt text">
    <span>Tooltip will show when mouse enter.</span>
  </A10Tooltip>
, mountNode);
`

export const placementCode = `import { A10Tooltip, A10Button } from 'a10-gui-widget'

const text = <span>prompt text</span>;
const buttonWidth = 70;

ReactDOM.render(
  <div className="demo">
    <div style={{ marginLeft: buttonWidth, whiteSpace: 'nowrap' }}>
      <A10Tooltip placement="topLeft" title={text}>
        <A10Button>Top Left</A10Button>
      </A10Tooltip>
      <A10Tooltip placement="top" title={text}>
        <A10Button>Top</A10Button>
      </A10Tooltip>
      <A10Tooltip placement="topRight" title={text}>
        <A10Button>Top Right</A10Button>
      </A10Tooltip>
    </div>
    <div style={{ width: buttonWidth, float: 'left' }}>
      <A10Tooltip placement="leftTop" title={text}>
        <A10Button>Left Top</A10Button>
      </A10Tooltip>
      <A10Tooltip placement="left" title={text}>
        <A10Button>Left</A10Button>
      </A10Tooltip>
      <A10Tooltip placement="leftBottom" title={text}>
        <A10Button>Left Bottom</A10Button>
      </A10Tooltip>
    </div>
    <div style={{ width: buttonWidth, marginLeft: (buttonWidth * 4) + 24 }}>
      <A10Tooltip placement="rightTop" title={text}>
        <A10Button>Right Top</A10Button>
      </A10Tooltip>
      <A10Tooltip placement="right" title={text}>
        <A10Button>Right</A10Button>
      </A10Tooltip>
      <A10Tooltip placement="rightBottom" title={text}>
        <A10Button>Right Bottom</A10Button>
      </A10Tooltip>
    </div>
    <div style={{ marginLeft: buttonWidth, clear: 'both', whiteSpace: 'nowrap' }}>
      <A10Tooltip placement="bottomLeft" title={text}>
        <A10Button>Bottom Left</A10Button>
      </A10Tooltip>
      <A10Tooltip placement="bottom" title={text}>
        <A10Button>Bottom</A10Button>
      </A10Tooltip>
      <A10Tooltip placement="bottomRight" title={text}>
        <A10Button>Bottom Right</A10Button>
      </A10Tooltip>
    </div>
  </div>
, mountNode);`

export const layoutTooltipCode = `import { A10Tooltip } from 'a10-gui-widget'

ReactDOM.render(
  <A10Tooltip placement="topLeft" title="Prompt Text">
    <A10Button>Align edge </A10Button>
  </A10Tooltip>
  <A10Tooltip placement="topLeft" title="Prompt Text" arrowPointAtCenter>
    <A10Button>Arrow points to center</A10Button>
  </A10Tooltip>
, mountNode);`
