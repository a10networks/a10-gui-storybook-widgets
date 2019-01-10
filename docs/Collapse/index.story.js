import * as React from 'react'
import { withReadme } from 'storybook-readme'
import { storiesOf } from '@storybook/react'
import { Divider } from 'antd'
import { CodeComponent, CodeCard, Code } from '../utils'

import CollapseDemo from './demo/CollapseDemo'
import AccordionDemo from './demo/AccordionDemo'
import NestedDemo from './demo/NestedDemo'
import BorderlessDemo from './demo/BorderlessDemo'
import CustomDemo from './demo/CustomDemo'
import NoArrowDemo from './demo/NoArrowDemo'
import { collapseCode, accordionCode, nestedPanelCode, borderlessCode, customCode, noArrowCode } from './demo/code'

import * as readme from '../../src/Collapse/README.md'

const Example = () => {
    return (
        <CodeComponent>
            <CodeCard title="Collapse">
                <CollapseDemo />
                <Divider />
                <p>More than one panel can be expanded at a time, the first panel is initialized to be active in this case.</p>
                <Code string={collapseCode} />
            </CodeCard>

            <CodeCard title="Accordion">
                <AccordionDemo />
                <Divider />
                <p>Accordion mode, only one panel can be expanded at a time. The first panel will be expanded by default.</p>
                <Code string={accordionCode} />
            </CodeCard>

            <CodeCard title="Nested panel">
                <NestedDemo />
                <Divider />
                <p>Collapse is nested inside the Collapse.</p>
                <Code string={nestedPanelCode} />
            </CodeCard>

            <CodeCard title="Borderless">
                <BorderlessDemo />
                <Divider />
                <p>A borderless style of Collapse.</p>
                <Code string={borderlessCode} />
            </CodeCard>

            <CodeCard title="Custom Panel">
                <CustomDemo />
                <Divider />
                <p>Customize the background, border and margin styles for each panel.</p>
                <Code string={customCode} />
            </CodeCard>

            <CodeCard title="No Arrow">
                <NoArrowDemo />
                <Divider />
                <p>You can disable showing arrow icon by passing showArrow={false} to CollapsePanel component.</p>
                <Code string={noArrowCode} />
            </CodeCard>

        </CodeComponent>
    )
}

export default story => {
    story.add('A10Collapse', withReadme(readme, Example))
}
