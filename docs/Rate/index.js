import * as React from 'react'
import { withReadme } from 'storybook-readme'
import { storiesOf } from '@storybook/react'
import { Card, Divider } from 'antd'
import { CodeComponent, CodeCard, Code } from '../utils'

import * as readme from '../../src/Rate/README.md'
import { BasicDemo, basicString } from './basic'
import { HalfStarDemo, halfStarString } from './halfStar'
import { ReadOnlyDemo, readOnlyString } from './readOnly'
import { ShowCopywritingDemo, showCopywritingString } from './showCopywriting'
import { ClearStarDemo, clearStarString } from './clearStar'
import { OtherCharacterDemo, otherCharacterString } from './otherCharacter'

// export default story => {
//   return story.addDecorator(withReadme(readme))
//               .add('A10Rate', () => {
//                 return (
//                   <CodeComponent>
//                     <Card Title="Basic Usage">
//                       <BasicUsageDemo />
//                       <Divider />
//                       <p>The simplest usage.</p>
//                       <Code string={ demoString }/>
//                     </Card>
//                   </CodeComponent>
//                 )
//               })
// }

const Example = () => {
  const message = 'Success Text', type = 'success', closeText = 'Close Me', descriptionText = 'This is my description'
  return (
    <CodeComponent>

      <Card title="Basic">
        <BasicDemo />
        <Divider />
        <p>The simplest usage.</p>
        <Code string={basicString} />
      </Card>

      <Card title="Half star">
        <HalfStarDemo />
        <Divider />
        <p>Support select for half stars.</p>
        <Code string={halfStarString} />
      </Card>


      <Card title="Read only">
        <ReadOnlyDemo />
        <Divider />
        <p>Read only, can't use mouse to interact.</p>
        <Code string={readOnlyString} />
      </Card>


      <Card title="Show copywriting">
        <ShowCopywritingDemo />
        <Divider />
        <p>Add copywriting in rate components.</p>
        <Code string={showCopywritingString} />
      </Card>

      <Card title="Other Character">
        <OtherCharacterDemo />
        <Divider />
        <p>Replace the default star to other characters like letters from the alphabet, digits, iconfont or even Chinese words.</p>
        <Code string={otherCharacterString} />
      </Card>



      <Card title="Clear star">
        <ClearStarDemo />
        <Divider />
        <p>Support set allows stars to clear on second click.</p>
        <Code string={clearStarString} />
      </Card>
    </CodeComponent>
  )
}

export default story => {
  story.add('A10Rate', withReadme(readme, Example))
}
