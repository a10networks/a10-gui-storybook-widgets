import * as React from 'react'
import { withReadme } from 'storybook-readme'
import { storiesOf } from '@storybook/react'
import { Card, Divider } from 'antd'
import { CodeComponent, CodeCard, Code } from '../utils'

import * as readme from '../../src/AutoComplete/README.md'
import BasicDemo from './demo/BasicDemo'
import CustomizedDemo from './demo/CustomizedDemo'
import CustomizedInputDemo from './demo/CustomizedInputDemo'
import LookupUncertain from './demo/LookupUncertain'
import LookupCertain from './demo/LookupCertain'
import NonCaseSensitiveDemo from './demo/NonCaseSensitive'
import { basicCode, customizedCode, customizeInputCode, nonCaseSensitiveCode, lookupCertainCode, lookupUncertainCode } from './demo/code'


const Example = () => {
  return (
    <div id="autoCompleteSpecific">
      <CodeComponent>
        <Card title="Basic Usage">
          <BasicDemo />
          <Divider />
          <p>Basic Usage is illustrated by setting datasource of autocomplete with <strong>dataSource</strong> property.</p>
          <Code string={basicCode} />
        </Card>

        <Card title="Customized Input Component">
          <CustomizedInputDemo />
          <Divider />
          <p>Customize Input Component</p>
          <Code string={customizeInputCode} />
        </Card>

        <Card title="Customized">
          <CustomizedDemo />
          <Divider />
          <p>You could pass AutoComplete.Option as children of AutoComplete, instead of using dataSource。</p>
          <Code string={customizedCode} />
        </Card>

        <Card title="Non-case-sensitive AutoComplete">
          <NonCaseSensitiveDemo />
          <Divider />
          <p>A non-case-sensitive AutoComplete</p>
          <Code string={nonCaseSensitiveCode} />
        </Card>

        <Card title="Lookup Uncertain">
          <LookupUncertain />
          <Divider />
          <p>Demonstration of Lookup Patterns: Uncertain Category. Basic Usage, set datasource of autocomplete with dataSource property.</p>
          <Code string={lookupUncertainCode} />
        </Card>


        <Card title="Lookup Certain">
          <LookupCertain />
          <Divider />
          <p>Demonstration of Lookup Patterns: Certain Category. Basic Usage, set datasource of autocomplete with dataSource property.</p>
          <Code string={lookupCertainCode} />
        </Card>
      </CodeComponent>
    </div>
  )
}

export default story => {
  story.add('A10AutoComplete', withReadme(readme, Example))
}
