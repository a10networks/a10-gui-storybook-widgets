import * as React from 'react'
import { A10Button } from '../../../src';

const IconDemo = () => {
    return (
        <div>
            <A10Button type="primary" shape="circle" icon="search" />
            <A10Button type="primary" icon="search">Search</A10Button>
            <A10Button shape="circle" icon="search" />
            <A10Button icon="search">Search</A10Button>
            <br />
            <A10Button shape="circle" icon="search" />
            <A10Button icon="search">Search</A10Button>
            <A10Button type="dashed" shape="circle" icon="search" />
            <A10Button type="dashed" icon="search">Search</A10Button>
        </div>
    )
}

export default IconDemo