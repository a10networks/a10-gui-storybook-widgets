
import * as React from 'react'
import { A10Card, A10Layout, A10Row, A10Col } from '../../../src'
const {
    Header, Footer, Content,
} = A10Layout;

const LayoutExamples = () => {
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
                A10Layout Widgets
    </p>
            <A10Card
                type="inner"
                title="A10Grid"
            >
                <div id="components-grid-demo-basic">
                    <div className="code-box-demo">
                        <A10Row>
                            <A10Col span={12}>col-12</A10Col>
                            <A10Col span={12}>col-12</A10Col>
                        </A10Row>
                        <A10Row>
                            <A10Col span={8}>col-8</A10Col>
                            <A10Col span={8}>col-8</A10Col>
                            <A10Col span={8}>col-8</A10Col>
                        </A10Row>
                        <A10Row>
                            <A10Col span={6}>col-6</A10Col>
                            <A10Col span={6}>col-6</A10Col>
                            <A10Col span={6}>col-6</A10Col>
                            <A10Col span={6}>col-6</A10Col>
                        </A10Row>
                    </div>
                </div>
            </A10Card>
            <A10Card
                style={{ marginTop: 16 }}
                type="inner"
                title="A10Layout"
            >
                <div id="components-layout-demo-basic">
                    <div className="code-box-demo">
                        <A10Layout>
                            <Header>Header</Header>
                            <Content>Content</Content>
                            <Footer>Footer</Footer>
                        </A10Layout>

                    </div>
                </div>
            </A10Card >
        </A10Card >
    )
}

export default LayoutExamples