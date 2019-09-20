import * as React from 'react'
import { withReadme } from 'storybook-readme'

import { Code, CodeComponent, CodeCard } from '../utils'
import SearchBar from '../../src/Log/SearchBar'
const A10SearchBar = require('../../src/Log/SearchBar/README.md')

const Example = props => {
  const exampleCode = `
    <SearchBar>
      <SearchBar.Label title="test" badgeCount={0} />
      <SearchBar.Label title="test2" badgeCount={100000} />
    </SearchBar>`

  return (
    <CodeComponent>
      <CodeCard title="Basic Usage" code={<Code string={exampleCode} />}>
        <SearchBar
          onChangeTab={index => {
            console.log(index)
          }}
        >
          <SearchBar.Label title="test" badgeCount={0} actived={true} />
          <SearchBar.Label title="test2" badgeCount={100000} />
        </SearchBar>
      </CodeCard>
    </CodeComponent>
  )
}

export default story => {
  story.add('A10LogSearchBar', withReadme(A10SearchBar, Example))
}
