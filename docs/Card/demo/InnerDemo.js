import * as React from 'react'
import { A10Card } from '../../../src';

const InnerDemo = () => {
    return (
        <A10Card title="A10Card title">
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
                title="Inner A10Card title"
                extra={<a href="#">More</a>}
            >
                Inner A10Card content
    </A10Card>
            <A10Card
                style={{ marginTop: 16 }}
                type="inner"
                title="Inner A10Card title"
                extra={<a href="#">More</a>}
            >
                Inner A10Card content
    </A10Card>
        </A10Card>
    )
}

export default InnerDemo