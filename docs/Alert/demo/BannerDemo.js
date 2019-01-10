import * as React from 'react'
import { A10Alert } from '../../../src'

const BannerDemo = () => {
    return (
        <div>
            <A10Alert message="Warning text" banner />
            <div style={{ height: '8px' }} />
            <A10Alert message="Very long warning text warning text text text text text text text" banner closable />
            <div style={{ height: '8px' }} />
            <A10Alert showIcon={false} message="Warning text without icon" banner />
            <div style={{ height: '8px' }} />
            <A10Alert type="error" message="Error text" banner />
        </div>
    )
}

export default BannerDemo