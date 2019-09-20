export const basicPageHeader = `
import { A10PageHeader } from 'a10-gui-widgets';

ReactDOM.render(
  <A10PageHeader onBack={() => null} title="Title" subTitle="This is a subtitle" />,
  mountNode,
);
`

export const useWithBreadcrumbs = `
import { A10PageHeader } from 'a10-gui-widgets';

const routes = [
  {
    path: 'index',
    breadcrumbName: 'First-level Menu',
  },
  {
    path: 'first',
    breadcrumbName: 'Second-level Menu',
  },
  {
    path: 'second',
    breadcrumbName: 'Third-level Menu',
  },
];

ReactDOM.render(<A10PageHeader title="Title" breadcrumb={{ routes }} />, mountNode);
`

export const exampleWithContent = `
import { A10PageHeader, A10Typography } from 'a10-gui-widgets';

const { Paragraph } = A10Typography;

const routes = [
  {
    path: 'index',
    breadcrumbName: 'First-level Menu',
  },
  {
    path: 'first',
    breadcrumbName: 'Second-level Menu',
  },
  {
    path: 'second',
    breadcrumbName: 'Third-level Menu',
  },
];

const content = (
  <div className="content">
    <Paragraph>
      Ant Design interprets the color system into two levels: a system-level color system and a
      product-level color system.
    </Paragraph>
    <Paragraph>
      Ant Design&#x27;s design team preferred to design with the HSB color model, which makes it
      easier for designers to have a clear psychological expectation of color when adjusting colors,
      as well as facilitate communication in teams.
    </Paragraph>
    <p className="contentLink">
      <a>
        <img
          src="https://gw.alipayobjects.com/zos/rmsportal/MjEImQtenlyueSmVEfUD.svg"
          alt="start"
        />
        Quick Start
      </a>
      <a>
        <img src="https://gw.alipayobjects.com/zos/rmsportal/NbuDUAuBlIApFuDvWiND.svg" alt="info" />
        Product Info
      </a>
      <a>
        <img src="https://gw.alipayobjects.com/zos/rmsportal/ohOEPSYdDTNnyMbGuyLb.svg" alt="doc" />
        Product Doc
      </a>
    </p>
  </div>
);

const extraContent = (
  <img
    src="https://gw.alipayobjects.com/mdn/mpaas_user/afts/img/A*KsfVQbuLRlYAAAAAAAAAAABjAQAAAQ/original"
    alt="content"
  />
);

ReactDOM.render(
  <A10PageHeader title="Title" breadcrumb={{ routes }}>
    <div className="wrap">
      <div className="content">{content}</div>
      <div className="extraContent">{extraContent}</div>
    </div>
  </A10PageHeader>,
  mountNode,
);
`

export const complexExample = `
import { A10PageHeader, A10Tag, A10Tabs, A10Button} from 'a10-gui-widgets';
import { Statistic, Row, Col } from 'antd';

const { TabPane } = A10Tabs;

const Description = ({ term, children, span = 12 }) => (
  <Col span={span}>
    <div className="description">
      <div className="term">{term}</div>
      <div className="detail">{children}</div>
    </div>
  </Col>
);

const content = (
  <Row>
    <Description term="Created">Lili Qu</Description>
    <Description term="Association">
      <a>421421</a>
    </Description>
    <Description term="Creation Time">2017-01-10</Description>
    <Description term="Effective Time">2017-10-10</Description>
    <Description term="Remarks" span={24}>
      Gonghu Road, Xihu District, Hangzhou, Zhejiang, China
    </Description>
  </Row>
);

const extraContent = (
  <Row>
    <Col span={12}>
      <Statistic title="Status" value="Pending" />
    </Col>
    <Col span={12}>
      <Statistic title="Price" prefix="$" value={568.08} />
    </Col>
  </Row>
);

ReactDOM.render(
  <A10PageHeader
    onBack={() => window.history.back()}
    title="Title"
    subTitle="This is a subtitle"
    A10Tags={<A10Tag color="red">Warning</A10Tag>}
    extra={[
      <A10Button key="3">Operation</A10Button>,
      <A10Button key="2">Operation</A10Button>,
      <A10Button key="1" type="primary">
        Primary
      </A10Button>,
    ]}
    footer={
      <A10Tabs defaultActiveKey="1">
        <TabPane tab="Details" key="1" />
        <TabPane tab="Rule" key="2" />
      </A10Tabs>
    }
  >
    <div className="wrap">
      <div className="content padding">{content}</div>
      <div className="extraContent">{extraContent}</div>
    </div>
  </A10PageHeader>,
  mountNode,
);
`
