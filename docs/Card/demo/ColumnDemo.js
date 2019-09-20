import * as React from 'react'
// import { A10Card, A10Col, A10Row } from '../../../src';
import { A10Card } from '../../../src';
import { A10Col, A10Row } from '../../../src/Grid'

const ColumnDemo = () => {
    return (
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
        </div >
    )
}

export default ColumnDemo