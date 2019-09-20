import { A10Badge, A10Icon } from '../../../src'
import * as React from 'react'

const RedNotificationExample = () => {
    return (
        <div>
            <A10Badge dot>
                <A10Icon type="notification" />
            </A10Badge>
            <A10Badge count={0} dot>
                <A10Icon type="notification" />
            </A10Badge>
            <A10Badge dot>
                <a href="#">Link something</a>
            </A10Badge>
        </div>
    )
}

export default RedNotificationExample