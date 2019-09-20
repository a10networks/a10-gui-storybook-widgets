import * as React from 'react'
import { A10Alert } from '../../../src'

const MoreTypesExample = () => {
    return (
        <div>
            <A10Alert message="Success Text" type="success" />
            <div style={{ height: '8px' }} />
            <A10Alert message="Info Text" type="info" />
            <div style={{ height: '8px' }} />
            <A10Alert message="Warning Text" type="warning" />
            <div style={{ height: '8px' }} />
            <A10Alert message="Error Text" type="error" />
        </div>
    )
}

export default MoreTypesExample