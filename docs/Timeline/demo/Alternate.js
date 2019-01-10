import { A10Timeline, A10Icon } from '../../../src';
import * as React from 'react';

const Alternate = () => {
    return (
        <A10Timeline mode="alternate">
            <A10Timeline.Item>Create a services site 2015-09-01</A10Timeline.Item>
            <A10Timeline.Item color="green">Solve initial network problems 2015-09-01</A10Timeline.Item>
            <A10Timeline.Item dot={<A10Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</A10Timeline.Item>
            <A10Timeline.Item color="red">Network problems being solved 2015-09-01</A10Timeline.Item>
            <A10Timeline.Item>Create a services site 2015-09-01</A10Timeline.Item>
            <A10Timeline.Item dot={<A10Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>Technical testing 2015-09-01</A10Timeline.Item>
        </A10Timeline>
    )
}

export default Alternate