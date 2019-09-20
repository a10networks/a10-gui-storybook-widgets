import * as React from 'react'
import { A10Card } from '../../../src';

const BorderlessDemo = () => {
    return (
        <div style={{ background: '#ECECEC', padding: '30px' }}>
            <A10Card title="Card title" bordered={false} style={{ width: 300 }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
            </A10Card>
        </div>
    )
}

export default BorderlessDemo