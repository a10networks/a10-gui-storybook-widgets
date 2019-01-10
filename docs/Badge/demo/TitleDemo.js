import { A10Badge } from '../../../src'
import * as React from 'react'

const TitleExample = () => {
    return (
        <div>
            <A10Badge count={5} title="Custom hover text">
                <a href="#" className="head-example" />
            </A10Badge>
        </div>
    )
}

export default TitleExample