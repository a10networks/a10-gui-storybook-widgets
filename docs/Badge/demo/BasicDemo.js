import { A10Badge, A10Icon } from '../../../src'
import * as React from 'react'

const BasicExample = () => {
    return (
        <div>
            <A10Badge count={5}>
                <a href="#" className="head-example" />
            </A10Badge>
            <A10Badge count={0} showZero>
                <a href="#" className="head-example" />
            </A10Badge>
            <A10Badge count={<A10Icon type="clock-circle" style={{ color: '#f5222d' }} />}>
                <a href="#" className="head-example" />
            </A10Badge>
        </div>
    )
}

export default BasicExample