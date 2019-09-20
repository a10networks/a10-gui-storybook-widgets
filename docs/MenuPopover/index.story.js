
import * as React from 'react'

import { Code, CodeComponent, CodeCard } from '../utils'
import { A10MenuPopover } from '../../src'
import { withReadme } from 'storybook-readme'
const readme = require('../../src/MenuPopover/README.md')

const code = `const menuPopoverExample = () => {
  const menus = [
    {
      key: 'test1',
      content: 'Name2'
    },
    {
      key: 'test2',
      content: 'Name2'
    }
  ]
  const onClickMenu = (item, key) => {
    console.log(item, key)
    return true
  }
  return <A10MenuPopover menus={menus} onClickMenu={onClickMenu} />
}`

const menuPopoverExample = () => {
  const menus = [
    {
      key: 'test1',
      content: 'Name2'
    },
    {
      key: 'test2',
      content: 'Name2'
    }
  ]
  const onClickMenu = (item, key) => {
    console.log(item, key)
    return true
  }
  return <A10MenuPopover menus={menus} onClickMenu={onClickMenu} />
}

const Example = () => {
  return (
    <CodeComponent>
      <CodeCard
        title="A10MenuPopover"
        desc=""
        code={<Code string={code} />}
      >
        {menuPopoverExample()}
      </CodeCard>
    </CodeComponent>
  )
}

export default story => {
  story.add('A10MenuPopover', withReadme(readme, Example))
}
