import { A10Steps } from '../../../src';
import * as React from 'react';

const Step = A10Steps.Step;

const StepsExample = () => {
    return (
        <A10Steps size="small" current={1}>
            <Step title="Finished" />
            <Step title="In Progress" />
            <Step title="Waiting" />
        </A10Steps>
    )
}

export default StepsExample