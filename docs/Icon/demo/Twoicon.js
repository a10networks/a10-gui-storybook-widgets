import * as React from 'react'
import { A10Icon as Icon } from '../../../src'
import './index.less'

const Example = () => {
    return (
        <div className="IconDemoSpecific">
            <div className="icons-list">
                <Icon type="smile" theme="twoTone" />
                <Icon type="heart" theme="twoTone" twoToneColor="#eb2f96" />
                <Icon type="check-circle" theme="twoTone" twoToneColor="#52c41a" />
            </div>
        </div>
    )
}

export default Example
