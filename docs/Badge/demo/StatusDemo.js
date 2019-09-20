import { A10Badge } from '../../../src'
import * as React from 'react'

const StatusExample = () => {
    return (
        <div>
            <A10Badge status="success" />
            <A10Badge status="error" />
            <A10Badge status="default" />
            <A10Badge status="processing" />
            <A10Badge status="warning" />
            <br />
            <A10Badge status="success" text="Success" />
            <br />
            <A10Badge status="error" text="Error" />
            <br />
            <A10Badge status="default" text="Default" />
            <br />
            <A10Badge status="processing" text="Processing" />
            <br />
            <A10Badge status="warning" text="Warning" />
        </div>
    )
}

export default StatusExample