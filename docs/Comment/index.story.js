import * as React from 'react'
import { withReadme } from 'storybook-readme'
import { CodeComponent, CodeCard, Code } from '../utils'

import * as readme from '../../src/Comment/README.md'

import BasicExample from './example/Basic'
import NestedExample from './example/Nested'
import ListExample from './example/List'
import ReplyExample from './example/Reply'
import { basicCode, listCode, nestedCode, replyCode } from './example/code'

const Example = () => {
  return (
    <CodeComponent>
      <CodeCard title="Basic Usage" desc="A basic comment with author, avatar, time and actions." code={<Code string={basicCode} />}>
        <BasicExample />
      </CodeCard>

      <CodeCard
        title="Usage with list"
        desc="Displaying a series of comments using the antd List Component."
        code={<Code string={listCode} />}
      >
        <ListExample />
      </CodeCard>

      <CodeCard
        title="Nested comments"
        desc="Comments can be nested."
        code={<Code string={nestedCode} />}
      >
        <NestedExample />
      </CodeCard>

      <CodeCard
        title="Reply Editor"
        desc="Comment can be used as editor, user can customize the editor component."
        code={<Code string={replyCode} />}
      >
        <ReplyExample />
      </CodeCard>
    </CodeComponent>
  )
}

export default story => {
  story.add('A10Comment', withReadme(readme, Example))
}
