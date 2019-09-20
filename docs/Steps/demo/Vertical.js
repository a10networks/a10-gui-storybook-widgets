import { A10Steps } from '../../../src';
import * as React from 'react';

const Step = A10Steps.Step;

const VerticalExample = () => {
    return (
        <A10Steps direction="vertical" current={1}>
            <Step title="Finished" description="This is a description." />
            <Step title="In Progress" description="This is a description." />
            <Step title="Waiting" description="This is a description." />
        </A10Steps>
    )
}


export default VerticalExample