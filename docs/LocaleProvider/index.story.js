import * as React from 'react'
import { withReadme } from 'storybook-readme'

import { Code, CodeComponent, CodeCard } from '../utils'
import { A10WidgetLocaleProvider, A10Table, A10Pagination } from '../../src'
import * as readme from '../../src/LocaleProvider/README.md'
import * as demo from './demo.txt'
import zhCN from 'antd/lib/locale-provider/zh_CN';

const localization = `
import { A10Pagination, A10WidgetLocaleProvider } from 'a10-gui-widgets';
import zhCN from 'antd/lib/locale-provider/zh_CN';

const App = () => (
  <div>
    <Pagination defaultCurrent={1} total={50} showSizeChanger />
  </div>
);

ReactDOM.render(
  <LocaleProvider locale={zhCN}>
    <App />
  </LocaleProvider>,
  mountNode
);
`

const App = () => (
  <div>
    <A10Pagination defaultCurrent={1} total={50} showSizeChanger />
  </div>
);

const Example = props => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      render: text => <a href="#">{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
  ]
  const data = []
  return (
    <div id="LocaleProviderSpecific">
      <CodeComponent>
        <CodeCard
          title="Localization"
          desc="Wrap your app with LocaleProvider, and apply the corresponding language package."
          code={<Code string={localization} />}
        >
          <A10WidgetLocaleProvider locale={zhCN}>
            <App />
          </A10WidgetLocaleProvider>
        </CodeCard>
        <CodeCard
          title="All components"
          desc="Specify a language data. e.g., zh-cn"
          code={<Code string={demo} />}
        >
          <A10WidgetLocaleProvider locale={A10WidgetLocaleProvider.locales['zh-cn']}>
            <A10Table
              columns={columns}
              dataSource={data}
            />
          </A10WidgetLocaleProvider>
        </CodeCard>
      </CodeComponent>
    </div>
  )
}

export default story => {
  story.add('A10LocaleProvider', withReadme(readme, Example))
}