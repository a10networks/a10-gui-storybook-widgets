
export const basicUsageCode = `import { A10Card } from 'a10-gui-widgets';

const Example = () => (
  <A10Card title="Card title" extra={<a href="#">More</a>} style={{ width: 300 }}>
    <p>Card content</p>
    <p>Card content</p>
    <p>Card content</p>
  </A10Card>
)

ReactDOM.render(<Example />, mountNode);`

export const noBorderCode = `import { A10Card } from 'a10-gui-widgets';

ReactDOM.render(
  <div style={{ background: '#ECECEC', padding: '30px' }}>
    <A10Card title="Card title" bordered={false} style={{ width: 300 }}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </A10Card>
  </div>,
  mountNode
);`


export const basicUsageWithoutTitleCode = `import { A10Card } from 'a10-gui-widgets';

const Example = () => (
  <A10Card style={{ width: 300 }}>
    <p>Card content</p>
    <p>Card content</p>
    <p>Card content</p>
  </A10Card>
)

ReactDOM.render(<Example />, mountNode);`

export const customizedContentCode = `import { A10Card } from 'a10-gui-widgets';

const { Meta } = A10Card;

ReactDOM.render(
  <A10Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta
      title="Europe Street beat"
      description="www.instagram.com"
    />
  </A10Card>,
  mountNode
);`

export const cardColumnCode = `import { A10Card, A10Col, A10Row } from 'a10-gui-widgets';

ReactDOM.render(
  <div style={{ background: '#ECECEC', padding: '30px' }}>
    <A10Row gutter={16}>
      <A10Col span={8}>
        <A10Card title="Card title" bordered={false}>Card content</A10Card>
      </A10Col>
      <A10Col span={8}>
        <A10Card title="Card title" bordered={false}>Card content</A10Card>
      </A10Col>
      <A10Col span={8}>
        <A10Card title="Card title" bordered={false}>Card content</A10Card>
      </A10Col>
    </A10Row>
  </div>,
  mountNode
);`

export const loadingCardDemoCode = `import { A10Card } from 'a10-gui-widgets';

const Example = () => (
  <A10Card loading title="Card title" style={{ width: '34%' }}>
    Whatever content
  </A10Card>
)

ReactDOM.render(<Example />, mountNode);`

export const gridCode = `import { A10Card } from 'a10-gui-widgets';

const gridStyle = {
  width: '25%',
  textAlign: 'center',
};

ReactDOM.render(
  <A10Card title="Card Title">
    <A10Card.Grid style={gridStyle}>Content</A10Card.Grid>
    <A10Card.Grid style={gridStyle}>Content</A10Card.Grid>
    <A10Card.Grid style={gridStyle}>Content</A10Card.Grid>
    <A10Card.Grid style={gridStyle}>Content</A10Card.Grid>
    <A10Card.Grid style={gridStyle}>Content</A10Card.Grid>
    <A10Card.Grid style={gridStyle}>Content</A10Card.Grid>
    <A10Card.Grid style={gridStyle}>Content</A10Card.Grid>
  </A10Card>,
  mountNode
);`

export const innerCode = `import { A10Card } from 'a10-gui-widgets';

ReactDOM.render(
  <A10Card title="Card title">
    <p
      style={{
        fontSize: 14,
        color: 'rgba(0, 0, 0, 0.85)',
        marginBottom: 16,
        fontWeight: 500,
      }}
    >
      Group title
    </p>
    <A10Card
      type="inner"
      title="Inner Card title"
      extra={<a href="#">More</a>}
    >
      Inner Card content
    </A10Card>
    <A10Card
      style={{ marginTop: 16 }}
      type="inner"
      title="Inner Card title"
      extra={<a href="#">More</a>}
    >
      Inner Card content
    </A10Card>
  </A10Card>,
  mountNode
);`

export const withTabs = `import { A10Card } from 'a10-gui-widgets';

const tabList = [{
  key: 'tab1',
  tab: 'tab1',
}, {
  key: 'tab2',
  tab: 'tab2',
}];

const contentList = {
  tab1: <p>content1</p>,
  tab2: <p>content2</p>,
};

const tabListNoTitle = [{
  key: 'article',
  tab: 'article',
}, {
  key: 'app',
  tab: 'app',
}, {
  key: 'project',
  tab: 'project',
}];

const contentListNoTitle = {
  article: <p>article content</p>,
  app: <p>app content</p>,
  project: <p>project content</p>,
};

class TabsCard extends React.Component {
  state = {
    key: 'tab1',
    noTitleKey: 'app',
  }

  onTabChange = (key, type) => {
    console.log(key, type);
    this.setState({ [type]: key });
  }

  render() {
    return (
      <div>
        <A10Card
          style={{ width: '100%' }}
          title="Card title"
          extra={<a href="#">More</a>}
          tabList={tabList}
          activeTabKey={this.state.key}
          onTabChange={(key) => { this.onTabChange(key, 'key'); }}
        >
          {contentList[this.state.key]}
        </A10Card>
        <br /><br />
        <A10Card
          style={{ width: '100%' }}
          tabList={tabListNoTitle}
          activeTabKey={this.state.noTitleKey}
          onTabChange={(key) => { this.onTabChange(key, 'noTitleKey'); }}
        >
          {contentListNoTitle[this.state.noTitleKey]}
        </A10Card>
      </div>
    );
  }
}

ReactDOM.render(<TabsCard />, mountNode);`

export const moreConfig = `import { A10Card, A10Icon, A10Avatar } from 'a10-gui-widgets';

const { Meta } = A10Card;

ReactDOM.render(
  <A10Card
    style={{ width: 300 }}
    cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
    actions={[<A10Icon type="setting" />, <A10Icon type="edit" />, <A10Icon type="ellipsis" />]}
  >
    <Meta
      avatar={<A10Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
      title="Card title"
      description="This is the description"
    />
  </A10Card>,
  mountNode
);`