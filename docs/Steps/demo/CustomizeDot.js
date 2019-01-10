import { A10Steps, A10Popover } from '../../../src';
import * as React from 'react';

const Step = A10Steps.Step;

const customDot = (dot, { status, index }) => (
    <A10Popover content={<span>step {index} status: {status}</span>}>
        {dot}
    </A10Popover>
);
const CustomizeDotExample = () => {
    return (
        <A10Steps current={1} progressDot={customDot}>
            <Step title="Finished" description="You can hover on the dot." />
            <Step title="In Progress" description="You can hover on the dot." />
            <Step title="Waiting" description="You can hover on the dot." />
            <Step title="Waiting" description="You can hover on the dot." />
        </A10Steps>
    )
}

export default CustomizeDotExample