import * as React from 'react'
import { A10Icon as Icon } from '../../../src'
import './index.less'

const Example = () => {
    return (
        <div className="IconDemoSpecific">
            <div className="icons-list">
                <Icon type="home" />
                <Icon type="setting" theme="filled" />
                <Icon type="smile" theme="outlined" />
                <Icon type="sync" spin />
                <Icon type="loading" />
            </div>
        </div>
    )
}

export default Example
