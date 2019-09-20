
import * as React from 'react'

import { A10Timeline } from '../../src'

import BasicTimelineExample from './demo/BasicTimeline'
import { basicTimelineCode } from './demo/code'

import ColorTimelineExample from './demo/ColorTimeline'
import { colorTimelineCode } from './demo/code'

import LastNodeTimelineExample from './demo/LastNodeTimeline'
import { lastNodeTimelineCode } from './demo/code'

import AlternateExample from './demo/Alternate'
import { alternateCode } from './demo/code'

import CustomTimelineExample from './demo/CustomTimeline'
import { customTimelineCode } from './demo/code'

import RightAlternateExample from './demo/RightAlternate'
import { rightAlternateCode } from './demo/code'

import { withReadme } from 'storybook-readme'
import { Code, CodeComponent, CodeCard } from '../utils'
const A10TimelineReadme = require('../../src/Timeline/README.md')

const Example = () => {
  return (
    <CodeComponent>
      <CodeCard
        title="Basic"
        desc="Basic timeline."
        code={<Code string={basicTimelineCode} />}
      >
        <BasicTimelineExample />
      </CodeCard>

      <CodeCard
        title="Color"
        desc="Set the color of circles. green means completed or success status, red means warning or error, and blue means ongoing or other default status."
        code={<Code string={colorTimelineCode} />}
      >
        <ColorTimelineExample />
      </CodeCard>

      <CodeCard
        title="Last node"
        desc="When the timeline is incomplete and ongoing, put a ghost node at last. set pending={true} or pending={a React Element}. Used in ascend chronological order."
        code={<Code string={lastNodeTimelineCode} />}
      >
        <LastNodeTimelineExample />
      </CodeCard>

      <CodeCard
        title="Alternate"
        desc="Alternate timeline."
        code={<Code string={alternateCode} />}
      >
        <AlternateExample />
      </CodeCard>

      <CodeCard
        title="Custom"
        desc="Set a node as an icon or other custom element."
        code={<Code string={customTimelineCode} />}
      >
        <CustomTimelineExample />
      </CodeCard>

      <CodeCard
        title="Right alternate"
        desc="Right alternate timeline."
        code={<Code string={rightAlternateCode} />}
      >
        <RightAlternateExample />
      </CodeCard>

    </CodeComponent>
  )
}

export default story => {
  story.add('A10Timeline', withReadme(A10TimelineReadme, Example))
}
