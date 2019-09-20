
import * as React from 'react'
import { withReadme } from 'storybook-readme'
import { storiesOf } from '@storybook/react'
import { Code, CodeComponent, CodeCard } from '../utils'

import { A10Button } from '../../src'
import * as readme from '../../src/Button/README.md'

import TypeDemo from './demo/TypeDemo'
import IconDemo from './demo/IconDemo'
import SizeDemo from './demo/SizeDemo'
import MultipleDemo from './demo/MultipleDemo'
import GhostDemo from './demo/GhostDemo'
import DisabledDemo from './demo/DisabledDemo'
import BlockDemo from './demo/BlockDemo'
import ButtonGroupDemo from './demo/ButtonGroupDemo'
import LoadingDemo from './demo/LoadingDemo'
import { basicButtonCode, iconButtonCode, sizeCode, disableButtonCode, multipleButtonsCode, buttonGroupCode, ghostButtonCode, loadingButtonCode, blockButtonCode } from './demo/code'
import './demo/index.less'

const Example = () => (
  <CodeComponent>
    <CodeCard
      title="Type"
      desc="There are primary button, default button, dashed button and danger button in a10-gui-widgets."
      code={<Code string={basicButtonCode} />}
    >
      <TypeDemo />
    </CodeCard>

    <CodeCard
      title="Icon Button"
      desc="Button components can contain an Icon. This is done by setting the icon property or placing an Icon component within the Button
      If you want specific control over the positioning and placement of the Icon, then that should be done by placing the Icon component within the Button rather than using the icon property."
      code={<Code string={iconButtonCode} />}
    >
      <IconDemo />
    </CodeCard>

    <CodeCard
      title="Size Button"
      desc="a10-gui-widgets supports a default button size as well as a large and small size.
      If a large or small button is desired, set the size property to either large or small respectively. Omit the size property for a button with the default size."
      code={<Code string={sizeCode} />}
    >
      <SizeDemo />
    </CodeCard>

    <CodeCard
      title="Loading Button"
      desc="A loading indicator can be added to a button by setting the loading property on the Button."
      code={<Code string={loadingButtonCode} />}
    >
      <LoadingDemo />
    </CodeCard>

    <CodeCard
      title="Disabled"
      desc="To mark a button as disabled, add the disabled property to the Button."
      code={<Code string={disableButtonCode} />}
    >
      <DisabledDemo />
      </CodeCard>

    <CodeCard
      title="Button Group"
      desc="Buttons can be grouped by placing multiple Button components into a Button.Group.

      The size can be set to large, small or left unset resulting in a default size."
      code={<Code string={buttonGroupCode} />}
    >
      <ButtonGroupDemo />
      </CodeCard>

    <CodeCard
      title="Multiple Buttons"
      desc="If you need several buttons, we recommend that you use 1 primary button + n secondary buttons, and if there are more than three operations, you can group some of them into Dropdown.Button."
      code={<Code string={multipleButtonsCode} />}
    >
      <MultipleDemo />
      </CodeCard>

    <CodeCard
      title="Ghost Button"
      desc="ghost property will make button's background transparent, it is common used in colored background."
      code={<Code string={ghostButtonCode} />}
    >
      <GhostDemo />
      </CodeCard>

          <CodeCard
      title="Block Button"
      desc="block property will make the button fit to its parent width."
      code={<Code string={blockButtonCode} />}
    >
      <BlockDemo />
      </CodeCard>
  </CodeComponent>
)

export default story => {
  story.add('A10Button', withReadme(readme, Example))
}
