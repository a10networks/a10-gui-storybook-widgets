import * as React from 'react'
import { A10Button } from '../../../src';

const GhostDemo = () => {
    return (
        <div style={{ background: 'rgb(190, 200, 200)', padding: '26px 16px 16px' }}>
            <A10Button type="primary" ghost>Primary</A10Button>
            <A10Button ghost>Default</A10Button>
            <A10Button type="dashed" ghost>Dashed</A10Button>
            <A10Button type="danger" ghost>danger</A10Button>
        </div>
    )
}

export default GhostDemo