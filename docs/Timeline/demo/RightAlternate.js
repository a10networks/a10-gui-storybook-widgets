import { A10Timeline, A10Icon } from '../../../src';
import * as React from 'react';

const RightAlternate = () => {
    return (
        <A10Timeline mode="right">
            <A10Timeline.Item>Create a services site 2015-09-01</A10Timeline.Item>
            <A10Timeline.Item>Solve initial network problems 2015-09-01</A10Timeline.Item>
            <A10Timeline.Item dot={<A10Icon type="clock-circle-o" style={{ fontSize: '16px' }} />} color="red">Technical testing 2015-09-01</A10Timeline.Item>
            <A10Timeline.Item>Network problems being solved 2015-09-01</A10Timeline.Item>
        </A10Timeline>
    )
}


export default RightAlternate