import * as React from 'react'
import { withDocs, withReadme } from 'storybook-readme'

import { Code, CodeComponent, CodeCard } from '../utils'
import { A10Dropdown, A10Menu, A10Button, A10Icon } from '../../src'
import * as readme from '../../src/Dropdown/README.md'

import BasicDemo from './demo/BasicDemo'
import OtherDemo from './demo/OtherDemo'
import ClickDemo from './demo/ClickDemo'
import CascadingDemo from './demo/CascadingDemo'
import ContextDemo from './demo/ContextDemo'
import PlacementDemo from './demo/PlacementDemo'
import TriggerDemo from './demo/TriggerDemo'
import ButtonDropdownDemo from './demo/ButtonDropdownDemo'
import HidingDemo from './demo/HidingMenuDemo'
import { basicCode, otherCode, clickCode, cascadingCode, contextCode, placementCode, triggerCode, buttonDropdownCode, hidingMenuCode } from './demo/code'
import ButtonDropdownDemo from './demo/ButtonDropdownDemo';

const Example = () => {
  return (
    <CodeComponent>
      <CodeCard
        title="Basic Usage"
        desc="The most basic dropdown menu."
        code={<Code string={basicCode} />}
      >
        <BasicDemo />
      </CodeCard>

      <CodeCard
        title="Other elements"
        desc="Divider and disabled menu item."
        code={<Code string={otherCode} />}
      >
        <OtherDemo />
      </CodeCard>

      <CodeCard
        title="Click event"
        desc="An event will be triggered when you click menu items, in which you can make different operations according to item's key."
        code={<Code string={clickCode} />}
      >
        <ClickDemo />
      </CodeCard>

      <CodeCard
        title="Cascading menu
        "
        desc="The menu has multiple levels."
        code={<Code string={cascadingCode} />}
      >
        <CascadingDemo />
      </CodeCard>

      <CodeCard
        title="Context Menu"
        desc="The default trigger mode is hover, you can change it to contextMenu."
        code={<Code string={contextCode} />}
      >
        <ContextDemo /> 
      </CodeCard>

      <CodeCard
        title="Placement"
        desc="Support 6 placements."
        code={<Code string={placementCode} />}
      >
        <PlacementDemo />
      </CodeCard>

      <CodeCard
        title="Trigger mode"
        desc="The default trigger mode is hover, you can change it to click."
        code={<Code string={triggerCode} />}
      >
        <TriggerDemo />
      </CodeCard>

      <CodeCard
        title="Button with dropdown menu"
        desc="A button is on the left, and a related functional menu is on the right."
        code={<Code string={buttonDropdownCode} />}
      >
        <ButtonDropdownDemo />
      </CodeCard>

      <CodeCard
        title="The way of hiding menu."
        desc="The default is to close the menu when you click on menu items, this feature can be turned off."
        code={<Code string={hidingMenuCode} />}
      >
        <HidingDemo />
      </CodeCard>
    </CodeComponent>
  )
}

export default story => {
  story.add('A10Dropdown', withReadme(readme, Example))
}
