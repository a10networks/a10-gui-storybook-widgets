
import * as React from 'react'

import { A10Tooltip, A10Button } from '../../src'
import BasicTooltipDemo from './demo/BasicTooltip'
import PlacementDemo from './demo/placement'

import { basicTooltipCode, placementCode, layoutTooltipCode } from './demo/code'
import { Code, CodeComponent, CodeCard } from '../utils'
import { withReadme } from 'storybook-readme'
import './demo/index.less'
const A10TooltipReadme = require('../../src/Tooltip/README.md')

const Example = () => {
  return (
    <div id="TooltipSpecific">
      <CodeComponent>
        <CodeCard
          title="Basic"
          desc="The simplest usage."
          code={<Code string={basicTooltipCode} />}
        >
          <BasicTooltipDemo />
        </CodeCard>

        <CodeCard
          title="Placement"
          desc="The ToolTip has 12 placements choice."
          code={<Code string={placementCode} />}
        >
          <PlacementDemo />
        </CodeCard>

        <CodeCard
          title="Arrow pointing at the center"
          desc="By specifying arrowPointAtCenter prop, the arrow will point to the center of the target element."
          code={<Code string={layoutTooltipCode} />}
        >
          <A10Tooltip placement="topLeft" title="Prompt Text">
            <A10Button>Align edge </A10Button>
          </A10Tooltip>&nbsp;&nbsp;
        <A10Tooltip placement="topLeft" title="Prompt Text" arrowPointAtCenter>
            <A10Button>Arrow points to center</A10Button>
          </A10Tooltip>
        </CodeCard>
      </CodeComponent>
    </div>
  )
}

export default story => {
  story.add('A10Tooltip', withReadme(A10TooltipReadme, Example))
}
