import { A10Button } from '../../../src';
import * as React from 'react'

const TypeDemo = () => {
    return (
        <div>
            <A10Button type="primary">Primary</A10Button>
            <A10Button>Default</A10Button>
            <A10Button type="dashed">Dashed</A10Button>
            <A10Button type="danger">Danger</A10Button>
        </div>
    )
}

export default TypeDemo