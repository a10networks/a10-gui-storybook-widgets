import * as React from 'react'
import { withReadme } from 'storybook-readme'
import { CodeComponent, CodeCard, Code } from '../utils'

import * as readme from '../../src/List/README.md'

import BasicListDemo from './demo/Basic'
import LoadMoreList from './demo/Basicmore'
import GridDemo from './demo/Grid'
import ResponsiveGridList from './demo/ResponsiveGridList'
import { basicListCode, code1, code2, code3, code4 } from './demo/code'
import { List, Avatar } from 'antd'
import { A10Avatar } from '../../src'

const basicDesc = `a10-gui-widgets supports a default list size as well as a large and small size.
If a large or small list is desired, set the size property to either large or small respectively. Omit the size property for a list with the default size.
Customizing the header and footer of list by setting header and footer property.`

const data = [
  {
    title: 'a10-gui-widgets Title 1',
  },
  {
    title: 'a10-gui-widgets Title 2',
  },
  {
    title: 'a10-gui-widgets Title 3',
  },
  {
    title: 'a10-gui-widgets Title 4',
  },
];

const Example = () => {
  const message = 'Success Text', type = 'success', closeText = 'Close Me', descriptionText = 'This is my description'
  return (
    <CodeComponent>
      <CodeCard
        title="Simple list"
        desc={basicDesc}
        code={<Code string={basicListCode} />}
      >
        <BasicListDemo />
      </CodeCard>
      <CodeCard
        title="Basic list"
        desc="Basic list."
        code={<Code string={code1} />}
      >
        <div>
          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  avatar={<A10Avatar src="https://a10networks.com" />}
                  title={<a href="https://a10networks.com">{item.title}</a>}
                  description="a10-gui-widgets, a design language for background applications, is refined by Ant UED Team"
                />
              </List.Item>
            )}
          />
        </div>
      </CodeCard>
      <CodeCard
        title="Vertical"
        desc="Setting itemLayout property with vertical to create a vertical list."
        code={<Code string={code2} />}
      >
        <LoadMoreList />
      </CodeCard>
      <CodeCard
        title="Grid"
        desc="Creating a grid list by setting the grid property of List."
        code={<Code string={code3} />}
      >
        <GridDemo />
      </CodeCard>
      <CodeCard
        title="Responsive grid list"
        desc="Responsive grid list. The size property is as same as Layout Grid."
        code={<Code string={code4} />}
      >
        <ResponsiveGridList />
      </CodeCard>
    </CodeComponent>
  )
}

export default story => {
  story.add('A10List', withReadme(readme, Example))
}
