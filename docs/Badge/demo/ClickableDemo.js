import { A10Badge } from '../../../src'
import * as React from 'react'

const ClickableExample = () => {
    return (
        <a href="#">
            <A10Badge count={5}>
                <span className="head-example" />
            </A10Badge>
        </a>
    )
}

export default ClickableExample