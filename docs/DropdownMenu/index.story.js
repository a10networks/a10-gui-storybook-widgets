import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs, withReadme } from 'storybook-readme'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react'
import { Icon } from 'antd'

import { Code, CodeComponent, CodeCard } from '../utils'
import { A10DropdownMenu } from '../../src'
import * as readme from '../../src/DropdownMenu/README.md'

const code = `import { A10DropdownMenu } from 'a10-gui-widgets'

const Example = () => {
  const menu = [
    <div name="duplicate">Duplicate</div>,
    <div name="add">Add</div>,
    <div name="delete">Delete</div>,
    <div name="share">Share</div>,
  ]
  const onClick = (Component, index) => {
    console.log(Component, index)
  }
  return <A10DropdownMenu trigger="hover" placement="topRight" arrowPointAtCenter={true} title="Click here to see menu" menu={menu} onClick={onClick} />
}
ReactDOM.render(<Example />, mountNode);`

const Example = () => {
  const menu = [
    <div name="duplicate">Duplicate</div>,
    <div name="add">Add</div>,
    <div name="delete">Delete</div>,
    <div name="share">Share</div>,
  ]
  const onClick = (Component, index) => {
    console.log(Component, index)
  }
  return <A10DropdownMenu trigger="hover" placement="topRight" arrowPointAtCenter={true} title="Click here to see menu" menu={menu} onClick={onClick} />
}

export default story => {
  story.add('A10DropdownMenu', withReadme(readme, () => {
    const Component = () => <div>Test <Icon type="pie-chart" /></div>
    return (
      <CodeComponent>
        <CodeCard title="Basic Usage" desc="Basic Usage Example. Create a list of div's like in the code example below to easily create your dropdown menu." code={<Code string={code} />}>
          <Example />
        </CodeCard>
      </CodeComponent>
    )
  }))
}
