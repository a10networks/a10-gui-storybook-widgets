import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs, withReadme } from 'storybook-readme'
import * as readme from '../../src/Notfication/README.md'
import { A10Notification } from '../../src'
import { Code, CodeComponent, CodeCard } from '../utils'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react';


export default story => {
  return story.addDecorator(withReadme(readme))
    .add('A10Notification', () => {
      const top = 200, duration = 2
      return (
        <CodeComponent>
          <CodeCard title="Basic Usage" desc="Basic Usage Example" code={<Code string={'<A10Notification top={top} duration={duration} />'} />}>
            <A10Notification />
          </CodeCard>
        </CodeComponent>
      )
    })
}
