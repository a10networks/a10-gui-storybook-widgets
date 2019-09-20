import * as React from 'react'
import { A10PageHeader, A10Tag, A10Tabs, A10Button } from '../../../src'
import { Statistic, Row, Col } from 'antd'

const { TabPane } = A10Tabs

const Description = ({ term, children, span = 12 }) => (
  <Col span={span}>
    <div className="description">
      <div className="term">{term}</div>
      <div className="detail">{children}</div>
    </div>
  </Col>
)

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
)

const extraContent = (
  <Row>
    <Col span={12}>
      <Statistic title="Status" value="Pending" />
    </Col>
    <Col span={12}>
      <Statistic title="Price" prefix="$" value={568.08} />
    </Col>
  </Row>
)

const ComplexExample = () => (
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
  </A10PageHeader>
)

export default ComplexExample
