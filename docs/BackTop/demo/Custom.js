import * as React from 'react'
import { A10BackTop } from '../../../src'
import './index.less'

const Custom = () => {
    return (
        <div class style={{ height: '1000px' }} >
            <A10BackTop visibilityHeight="2000">
                <div className="ant-back-top-inner">UP</div>
            </A10BackTop>
            Scroll down to see the bottom-right
        <strong style={{ color: '#1088e9' }}> blue </strong>
            button.
        </div>
    )
}

export default Custom