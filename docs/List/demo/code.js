export const basicListCode = `import * as React from 'react'
import { A10List } from 'a10-gui-widgets'
const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];

const Example = () => {
  return (
    <div>
      <h3 style={{ marginBottom: 16 }}>Default Size</h3>
      <A10List
        header={<div>Header</div>}
        footer={<div>Footer</div>}
        bordered
        dataSource={data}
        renderItem={item => (<A10List.Item>{item}</A10List.Item>)}
      />
      <h3 style={{ margin: '16px 0' }}>Small Size</h3>
      <A10List
        size="small"
        header={<div>Header</div>}
        footer={<div>Footer</div>}
        bordered
        dataSource={data}
        renderItem={item => (<A10List.Item>{item}</A10List.Item>)}
      />
      <h3 style={{ margin: '16px 0' }}>Large Size</h3>
      <A10List
        size="large"
        header={<div>Header</div>}
        footer={<div>Footer</div>}
        bordered
        dataSource={data}
        renderItem={item => (<A10List.Item>{item}</A10List.Item>)}
      />
    </div>
  )
}

ReactDOM.render(<Example />, mountNode);`

export const code1 = `
import { A10List, A10Avatar } from 'a10-gui-widgets';

const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];

ReactDOM.render(
  <A10List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={item => (
      <A10List.Item>
        <A10List.Item.Meta
          avatar={<A10Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
          title={<a href="https://ant.design">{item.title}</a>}
          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
        />
      </A10List.Item>
    )}
  />,
  mountNode
);
`
export const code2 = `
import { A10List, A10Avatar, A10Icon } from 'a10-gui-widgets';

const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: 'http://ant.design',
    title: ant design part i,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}

const IconText = ({ type, text }) => (
  <span>
    <A10Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

ReactDOM.render(
  <A10List
    itemLayout="vertical"
    size="large"
    pagination={{
      onChange: (page) => {
        console.log(page);
      },
      pageSize: 3,
    }}
    dataSource={listData}
    footer={<div><b>ant design</b> footer part</div>}
    renderItem={item => (
      <A10List.Item
        key={item.title}
        actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]}
        extra={<img width={272} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />}
      >
        <A10List.Item.Meta
          avatar={<A10Avatar src={item.avatar} />}
          title={<a href={item.href}>{item.title}</a>}
          description={item.description}
        />
        {item.content}
      </A10List.Item>
    )}
  />,
  mountNode
);`

export const code3 = `
import { A10List, A10Card } from 'a10-gui-widgets';

const data = [
  {
    title: 'Title 1',
  },
  {
    title: 'Title 2',
  },
  {
    title: 'Title 3',
  },
  {
    title: 'Title 4',
  },
];

ReactDOM.render(
  <A10List
    grid={{ gutter: 16, column: 4 }}
    dataSource={data}
    renderItem={item => (
      <A10List.Item>
        <A10Card title={item.title}>Card content</A10Card>
      </A10List.Item>
    )}
  />,
  mountNode
);
`

export const code4 = `
import { A10List, A10Card } from 'a10-gui-widgets';

const data = [
  {
    title: 'Title 1',
  },
  {
    title: 'Title 2',
  },
  {
    title: 'Title 3',
  },
  {
    title: 'Title 4',
  },
  {
    title: 'Title 5',
  },
  {
    title: 'Title 6',
  },
];

ReactDOM.render(
  <A10List
    grid={{
      gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3,
    }}
    dataSource={data}
    renderItem={item => (
      <A10List.Item>
        <A10Card title={item.title}>Card content</A10Card>
      </A10List.Item>
    )}
  />,
  mountNode
);
`