import * as React from 'react'
import { A10Affix, A10Button } from '../../../src'
import './index.less'


const Example = () => {
    return (
        <A10Affix offsetTop={120} onChange={affixed => console.log(affixed)}>
            <A10Button>120px to affix top</A10Button>
        </A10Affix>
}

export default Example