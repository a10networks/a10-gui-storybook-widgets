import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs, withReadme } from 'storybook-readme'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react'
import { Icon } from 'antd'

import { Code, CodeComponent, CodeCard } from '../utils'
import { A10ErrorPage } from '../../src'
import * as readme from '../../src/ErrorPage/README.md'

const code1 = `import { A10ErrorPage } from 'a10-gui-widgets'

const Example = () => {
  return <A10ErrorPage.NotFoundPage404 redirectUrl="/" />
}
ReactDOM.render(<Example />, mountNode);`

const code2 = `import { A10ErrorPage } from 'a10-gui-widgets'

const Example = () => {
  return <A10ErrorPage.UnexpectedErrorPage500 redirectUrl="/" />
}
ReactDOM.render(<Example />, mountNode);`

const code3 = `import { A10ErrorPage } from 'a10-gui-widgets'

const Example = () => {
  return <A10ErrorPage.RedirectPage redirectUrl="/" />
}
ReactDOM.render(<Example />, mountNode);`

const code4 = `import { A10ErrorPage } from 'a10-gui-widgets'

const Example = () => {
  return <A10ErrorPage.RequestTimeoutPage requestUrl="www.baidu.com/test/information.html?tests.xxx" />
}
ReactDOM.render(<Example />, mountNode);`

export const Example = () => {
  return (
    <CodeComponent>
      <CodeCard
        title="NotFoundPage404"
        desc="Basic Usage Example. Create a list of div's like in the code example below to easily create your dropdown menu."
        code={<Code string={code1} />}
      >
        <A10ErrorPage.NotFoundPage404 redirectUrl="/" />
      </CodeCard>
      <CodeCard
        title="UnexpectedErrorPage500"
        desc="Basic Usage Example. Create a list of div's like in the code example below to easily create your dropdown menu."
        code={<Code string={code2} />}
      >
        <A10ErrorPage.UnexpectedErrorPage500 redirectUrl="/" />
      </CodeCard>
      <CodeCard
        title="RedirectPage"
        desc="Basic Usage Example. Create a list of div's like in the code example below to easily create your dropdown menu."
        code={<Code string={code3} />}
      >
        <A10ErrorPage.RedirectPage redirectUrl="/" />
      </CodeCard>
      <CodeCard
        title="RequestTimeoutPage"
        desc="Basic Usage Example. Create a list of div's like in the code example below to easily create your dropdown menu."
        code={<Code string={code4} />}
      >
        <A10ErrorPage.RequestTimeoutPage requestUrl="www.baidu.com/test/information.html?tests.xxx" />
      </CodeCard>
    </CodeComponent>
  )
}

export default story => {
  story.add('A10ErrorPage', withReadme(readme, Example))
}
