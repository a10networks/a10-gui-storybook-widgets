
import * as React from 'react'
import { withReadme } from 'storybook-readme'
import { storiesOf } from '@storybook/react'
import { Code, CodeComponent, CodeCard } from '../utils'

import * as readme from '../../src/Breakcrumb/README.md'
import BasicDemo from './demo/BasicDemo'
import BasicDemoWithoutTitle from './demo/BasicDemoWithoutTitle'
import LoadingCardDemo from './demo/LoadingCardDemo'
import BorderlessDemo from './demo/NoBorderDemo'
import CustomizedDemo from './demo/CustomizedDemo'
import ColumnDemo from './demo/ColumnDemo'
import GridDemo from './demo/GridDemo'
import InnerDemo from './demo/InnerDemo'
import WithTabsDemo from './demo/WithTabsDemo'
import MoreConfigDemo from './demo/MoreConfig'
import { basicUsageCode, noBorderCode, basicUsageWithoutTitleCode, customizedContentCode, cardColumnCode, loadingCardDemoCode, gridCode, innerCode, withTabs, moreConfig } from './demo/code'

const readme = require('../../src/Card/README.md')

const Example = () => (
  <CodeComponent>
    <CodeCard
      title="Basic card"
      desc="A basic card containing a title, content and an extra corner content."
      code={<Code string={basicUsageCode} />}
    >
      <BasicDemo />
    </CodeCard>

    <CodeCard
      title="No Border"
      desc="A borderless card on a gray background."
      code={<Code string={noBorderCode} />}
    >
      <BorderlessDemo />
    </CodeCard>

    <CodeCard
      title="Simple card"
      desc="A simple card only containing a content area."
      code={<Code string={basicUsageWithoutTitleCode} />}
    >
      <BasicDemoWithoutTitle />
    </CodeCard>

    <CodeCard
      title="Customized Content"
      desc="You can use Card.Meta to support more flexible content."
      code={<Code string={customizedContentCode} />}
    >
      <CustomizedDemo />
    </CodeCard>

    <CodeCard
      title="Card In Column"
      desc="Cards usually cooperate with grid column layout in overview page."
      code={<Code string={cardColumnCode} />}
    >
      <ColumnDemo />
    </CodeCard>

    <CodeCard
      title="Loading card"
      desc="Shows a loading indicator while the contents of the card is being fetched."
      code={<Code string={loadingCardDemoCode} />}
    >
      <LoadingCardDemo />
    </CodeCard>

    <CodeCard
      title="Grid Card"
      desc="Grid style card content."
      code={<Code string={gridCode} />}
    >
      <GridDemo />
    </CodeCard>

    <CodeCard
      title="Inner Card"
      desc="It can be placed inside the ordinary card to display the information of the multilevel structure."
      code={<Code string={innerCode} />}
    >
      <InnerDemo />
    </CodeCard>

    <CodeCard
      title="With Tabs"
      desc="More content can be hosted."
      code={<Code string={withTabs} />}
    >
      <WithTabsDemo />
    </CodeCard>

    <CodeCard
      title="Support more content configuration"
      desc="A Card that supports cover, avatar, title and description."
      code={<Code string={moreConfig} />}
    >
      <MoreConfigDemo />
    </CodeCard>
  </CodeComponent>
)

export default story => {
  story.add('A10Card', withReadme(readme, Example))
}
