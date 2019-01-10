
import * as React from 'react'
import { withReadme } from 'storybook-readme'
import { storiesOf } from '@storybook/react'
import { CodeComponent, CodeCard, Code } from '../utils'

import MoreIconDemo from './demo/MoreIcon'
import AppIconDemo from './demo/AppIcon'
import { moreIconCode, basicCode, code1, code2 } from './demo/code'
import BasicCodeDemo from './demo/Base'
import Demo1 from './demo/Twoicon'
import Demo2 from './demo/Customicon'

import { A10Icon } from '../../src'
const readme = require('../../src/Icon/README.md')

const Example = () => (
  <CodeComponent>
    <CodeCard
      title="Icon"
      desc=""
      code={<Code string={"<A10Icon type=\"link\" title=\"link\" style={{ fontSize: '40px', width: '20px' }}/>"} />}
    >
      <div className="IconDemoSpecific">
        <A10Icon type="link" title="link" style={{ fontSize: '40px', width: '20px' }} />
      </div>
    </CodeCard>

    <CodeCard
      title="Spin Icon"
      desc=" "
      code={<Code string={"<A10Icon type=\"link\" title=\"link\" spin={ true } style={{ fontSize: '40px', width: '20px' }}/>"} />}
    >
      <div className="IconDemoSpecific">
        <A10Icon type="link" title="link" spin={true} style={{ fontSize: '40px', width: '20px' }} />
      </div>
    </CodeCard>
    <CodeCard
      title="Directional Icons"
      desc="Directional Icons."
      code={<Code string={moreIconCode} />}
    >
      <MoreIconDemo />
    </CodeCard>

    <CodeCard
      title="App Icon"
      desc=""
      code={''}
    >
      <AppIconDemo />
    </CodeCard>
    <CodeCard
      title="Basic"
      desc="Use tag <Icon /> to create an icon and set its type in the type prop. Specific the spin property to show spinning animation and the theme property to switch different themes."
      code={<Code string={basicCode} />}
    >
      <BasicCodeDemo />
    </CodeCard>
    <CodeCard
      title="Two-tone icon and colorful icon"
      desc="Specific them property theme to twoTone to render two-tone icons. You can also set the primary color."
      code={<Code string={code1} />}
    >
      <Demo1 />
    </CodeCard>
    <CodeCard
      title="Custom Icon"
      desc="Create a reusable React component by using <Icon component={...} />. The property component takes a React component that renders to svg element."
      code={<Code string={code2} />}
    >
      <Demo2 />
    </CodeCard>
  </CodeComponent >
)

/* <Content style={{ paddingBottom: '16px' }}>
    <Card title="List of icons"  >
      <p>Click the icon and copy the code</p>
    </Card>
  </Content> */

export default (story: any) => {
  story.add('A10Icon', withReadme(readme, Example))
}
