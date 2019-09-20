import { A10Steps, A10Button, A10Message } from '../../../src';
import * as React from 'react';

const Step = A10Steps.Step;

const steps = [{
    title: 'First',
    content: 'First-content',
}, {
    title: 'Second',
    content: 'Second-content',
}, {
    title: 'Last',
    content: 'Last-content',
}];

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 0,
        };
    }

    next() {
        const current = this.state.current + 1;
        this.setState({ current });
    }

    prev() {
        const current = this.state.current - 1;
        this.setState({ current });
    }

    render() {
        const { current } = this.state;
        return (
            <div>
                <A10Steps current={current}>
                    {steps.map(item => <Step key={item.title} title={item.title} />)}
                </A10Steps>
                <div className="steps-content">{steps[current].content}</div>
                <div className="steps-action">
                    {
                        current < steps.length - 1
                        && <A10Button type="primary" onClick={() => this.next()}>Next</A10Button>
                    }
                    {
                        current === steps.length - 1
                        && <A10Button type="primary" onClick={() => A10Message.success('Processing complete!')}>Done</A10Button>
                    }
                    {
                        current > 0
                        && (
                            <A10Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                                Previous
            </A10Button>
                        )
                    }
                </div>
            </div>
        );
    }
}
