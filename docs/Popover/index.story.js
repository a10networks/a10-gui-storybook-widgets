
import * as React from 'react'

import ClickPopoverExample from './demo/ClickPopover'
import BasicPopoverExample from './demo/BasicPopover'
import ArrowPointingExample from './demo/ArrowPointing'
import HoverClickPopoverCodeExample from './demo/HoverClickPopoverCode'
import { basicPopoverCode, clickPopoverCode, arrowPointingCode, hoverClickPopoverCode } from './demo/code'
import { Code, CodeComponent, CodeCard } from '../utils'
import { withReadme } from 'storybook-readme'
const A10PopoverReadme = require('../../src/Popover/README.md')

const Example = () => {
  const contentDiv = (
    <div>
      <p>Content</p>
      <p>Content</p>
    </div>
  );
  return (
    <CodeComponent>
      <CodeCard
        title="Click Popover"
        desc="Use visible prop to control the display of the card."
        code={<Code string={clickPopoverCode} />}
      >
        <ClickPopoverExample />
      </CodeCard>
      <CodeCard
        title="Placement Popover"
        desc="The Popover has 12 placements choice."
        code={<Code string={basicPopoverCode} />}
      >
        <BasicPopoverExample />
      </CodeCard>
      <CodeCard
        title="Arrow pointing"
        desc="The arrow points to the center of the target element, which set arrowPointAtCenter."
        code={<Code string={arrowPointingCode} />}
      >
        <ArrowPointingExample />
      </CodeCard>
      <CodeCard
        title="Hover with click popover"
        desc="The following example shows how to create a popover which can be hovered and clicked."
        code={<Code string={hoverClickPopoverCode} />}
      >
        <HoverClickPopoverCodeExample />
      </CodeCard>
    </CodeComponent>
  )
}

export default story => {
  story.add('A10Popover', withReadme(A10PopoverReadme, Example))
}
