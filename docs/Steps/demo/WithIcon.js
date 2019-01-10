import { A10Steps, A10Icon } from '../../../src';
import * as React from 'react';

const Step = A10Steps.Step;

const WithIconExample = () => {
    return (
        <A10Steps>
            <Step status="finish" title="Login" icon={<A10Icon type="user" />} />
            <Step status="finish" title="Verification" icon={<A10Icon type="solution" />} />
            <Step status="process" title="Pay" icon={<A10Icon type="loading" />} />
            <Step status="wait" title="Done" icon={<A10Icon type="smile-o" />} />
        </A10Steps>
    )
}
export default WithIconExample