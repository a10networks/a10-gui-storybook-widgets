import { A10Badge } from '../../../src'
import * as React from 'react'

const OverflowExample = () => {
    return (
        <div>
            <A10Badge count={99}>
                <a href="#" className="head-example" />
            </A10Badge>
            <A10Badge count={100}>
                <a href="#" className="head-example" />
            </A10Badge>
            <A10Badge count={99} overflowCount={10}>
                <a href="#" className="head-example" />
            </A10Badge>
            <A10Badge count={1000} overflowCount={999}>
                <a href="#" className="head-example" />
            </A10Badge>
        </div>
    )
}

export default OverflowExample