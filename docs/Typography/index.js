import * as React from 'react'

import { Code, CodeComponent, CodeCard } from '../utils'
import { withReadme } from 'storybook-readme'
const readme = require('../../src/Typography/README.md')

import Basic from './demo/Basic'
import TitleComponent from './demo/TitleComponent'
import TextComponent from './demo/TextComponent'
import Interactive from './demo/Interactive'
import Ellipsis from './demo/Ellipsis'

import {
  basicCode,
  titleComponentCode,
  textComponentCode,
  interactiveCode,
  ellipsisCode,
} from './demo/code'

const Example = () => {
  return (
    <CodeComponent>
      <CodeCard
        title="Basic"
        desc="Display the document sample."
        code={<Code string={basicCode} />}
      >
        <Basic />
      </CodeCard>
      <CodeCard
        title="Title Component"
        desc="Display title in different level."
        code={<Code string={titleComponentCode} />}
      >
        <TitleComponent />
      </CodeCard>
      <CodeCard
        title="Text Component"
        desc="Provides multiple types of text."
        code={<Code string={textComponentCode} />}
      >
        <TextComponent />
      </CodeCard>
      <CodeCard
        title="Interactive"
        desc="Provide additional interactive capacity."
        code={<Code string={interactiveCode} />}
      >
        <Interactive />
      </CodeCard>
      <CodeCard
        title="Ellipsis"
        desc="Multiple line ellipsis support."
        code={<Code string={ellipsisCode} />}
      >
        <Ellipsis />
      </CodeCard>
    </CodeComponent>
  )
}

export default story => {
  story.add('A10Typography', withReadme(readme, Example))
}
