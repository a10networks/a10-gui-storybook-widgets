import * as React from 'react'
import {
  A10Row,
  A10Col,
  A10Card,
  A10Pagination,
  A10WidgetLocaleProvider,
  A10Divider,
  A10Anchor,
  A10BackTop,
} from '../../../src'
import zhCN from 'antd/lib/locale-provider/zh_CN'

const otherStyle = {
  height: 200,
  marginBottom: '16px',
}
const { Link } = A10Anchor
const OtherExamples = () => {
  return (
    <A10Card>
      <p
        style={{
          fontSize: 14,
          color: 'rgba(0, 0, 0, 0.85)',
          marginBottom: 16,
          fontWeight: 500,
        }}
      >
        Other Widgets
      </p>
      <A10Row gutter={16}>
        <A10Col span={8}>
          <A10Card title="A10Anchor" style={otherStyle} type="inner">
            <A10Anchor affix={false}>
              <Link href="#basicAnchor" title="Basic Anchor" />
              <Link href="#staticAnchor" title="Static Anchor" />
            </A10Anchor>
          </A10Card>
        </A10Col>
        <A10Col span={8}>
          <A10Card title="A10LocaleProvider" style={otherStyle} type="inner">
            <A10WidgetLocaleProvider locale={zhCN}>
              <A10Pagination
                size="small"
                defaultCurrent={1}
                total={50}
                showSizeChanger
              />
            </A10WidgetLocaleProvider>
          </A10Card>
        </A10Col>
        <A10Col span={8}>
          <A10Card title="A10Divider" style={otherStyle} type="inner">
            <p>Lorem ipsum dolor sit amet</p>
            <A10Divider />
          </A10Card>
        </A10Col>
      </A10Row>

      <A10Row gutter={16}>
        <A10Col span={8}>
          <A10Card title="A10Anchor" type="inner">
            <div style={{ height: '400px' }}>
              Please scroll down the see the back-top button near the bottom
              right corner.
            </div>
            <A10BackTop />
          </A10Card>
        </A10Col>
      </A10Row>
    </A10Card>
  )
}

export default OtherExamples
