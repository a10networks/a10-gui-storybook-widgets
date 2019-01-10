
import * as React from 'react'
import { withReadme } from 'storybook-readme'
import { storiesOf } from '@storybook/react'
import { CodeComponent, CodeCard, Code } from '../utils'

const readme = require('../../src/Badge/README.md')

import DynamicBadge from './demo/DynamicExample'
import BasicDemo from './demo/BasicDemo'
import OverflowDemo from './demo/OverflowDemo'
import ClickableDemo from './demo/ClickableDemo'
import StatusDemo from './demo/StatusDemo'
import StandaloneDemo from './demo/StandaloneDemo'
import RedBadgeDemo from './demo/RedDemo'
import TitleDemo from './demo/TitleDemo'
import { basicString, overflowString, clickableString, statusString, standaloneString, linkString, dynamicCode, titleCode } from './demo/codes'
import './demo/index.less'

const Example = () => (
  <div id="badgeSpecific">
    <CodeComponent>
      <CodeCard
        title="Basic Usage"
        desc="Simplest Usage. Badge will be hidden when count is 0, but we can use showZero to show it."
        code={<Code string={basicString} />}
      >
        <BasicDemo />
      </CodeCard>

      <CodeCard
        title="Overflow Count"
        desc="${overflowCount}+ is displayed when count is larger than overflowCount. The default value of overflowCount is 99."
        code={<Code string={overflowString} />}
      >
        <OverflowDemo />
      </CodeCard>

      <CodeCard
        title="Clickable"
        desc="The badge can be wrapped with a tag to make it linkable."
        code={<Code string={clickableString} />}
      >
        <ClickableDemo />
      </CodeCard>

      <CodeCard
        title="Status"
        desc="Standalone badge with status."
        code={<Code string={statusString} />}
      >
        <StatusDemo />
      </CodeCard>

      <CodeCard
        title="Standalone"
        desc="Used in standalone when children is empty."
        code={<Code string={standaloneString} />}
      >
        <StandaloneDemo />
      </CodeCard>

      <CodeCard
        title="Red Badge"
        desc="This will simply display a red badge, without a specific count. If count equals 0, it won't display the dot."
        code={<Code string={linkString} />}
      >
        <RedBadgeDemo />
      </CodeCard>

      <CodeCard
        title="Dynamic"
        desc="The count will be animated as it changes."
        code={<Code string={dynamicCode} />}
      >
        <DynamicBadge />
      </CodeCard>

      <CodeCard
        title="Title"
        desc="The badge will display title when hovered over, instead of count."
        code={<Code string={titleCode} />}
      >
        <TitleDemo />
      </CodeCard>
    </CodeComponent>
  </div>
)

export default story => {
  story.add('A10Badge', withReadme(readme, Example))
}
