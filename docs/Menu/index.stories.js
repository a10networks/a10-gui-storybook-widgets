
import * as React from 'react'

import { Code, CodeComponent, CodeCard } from '../utils'
import { A10Tabs } from '../../src'

import { withReadme } from 'storybook-readme'
const readme = require('../../src/Menu/README.md')

import TopNagivationDemo from './demo/TopNagivation'
import InlinemenuDemo from './demo/Inlinemenu'
import CollapsedInlineMenuDemo from './demo/CollapsedInlineMenu'
import OpenCurrentSubmenuOnlyDemo from './demo/OpenCurrentSubmenuOnly'
import VerticalMenuDemo from './demo/VerticalMenu'
import MenuThemesDemo from './demo/MenuThemes'
import SwitchTheMenuTypeDemo from './demo/SwitchTheMenuType'
import {
  topNagivationCode,
  inlinemenu,
  collapsedInlineMenu,
  openCurrentSubmenuOnly,
  verticalMenu,
  menuThemes,
  switchTheMenuType
} from './demo/code'

const Example = () => {
  return (
    <div id="MenuSpecific">
    <CodeComponent>
      <CodeCard
        title="Top Navigation"
        desc="Horizontal top navigation menu."
        code={<Code string={topNagivationCode} />}
      >
        <TopNagivationDemo />
      </CodeCard>
      <div id="NonHorizontalMenus">
      <CodeCard
        title="Inline menu"
        desc="Vertical menu with inline submenus."
        code={<Code string={inlinemenu} />}
      >
        <InlinemenuDemo />
      </CodeCard>
      <CodeCard
        title="Collapsed inline menu"
        desc="Inline menu could be collapsed.

        Here is a complete demo with sider layout."
        code={<Code string={collapsedInlineMenu} />}
      >
        <CollapsedInlineMenuDemo />
      </CodeCard>
      <CodeCard
        title="Open current submenu only"
        desc="Click the menu and you will see that all the other menus gets collapsed to keep the entire menu compact."
        code={<Code string={openCurrentSubmenuOnly} />}
      >
        <OpenCurrentSubmenuOnlyDemo />
      </CodeCard>
      <CodeCard
        title="Vertical menu"
        desc="Submenus open as pop-ups."
        code={<Code string={verticalMenu} />}
      >
        <VerticalMenuDemo />
      </CodeCard>
      <CodeCard
        title="Menu Themes"
        desc="There are two built-in themes: 'light' and 'dark'. The default value is 'light'."
        code={<Code string={menuThemes} />}
      >
        <MenuThemesDemo />
      </CodeCard>
      <CodeCard
        title="Switch the menu type"
        desc="Show the dynamic switching mode (between 'inline' and 'vertical')."
        code={<Code string={switchTheMenuType} />}
      >
        <SwitchTheMenuTypeDemo />
      </CodeCard>
    </div>
    </CodeComponent>
    </div>
  )
}

export default story => {
  story.add('A10Menu', withReadme(readme, Example))
}
