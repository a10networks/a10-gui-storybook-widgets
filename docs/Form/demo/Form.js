import * as React from 'react'
import {
    A10Form, A10Input, A10Button, A10Radio,
} from '../../../src';

const FormItem = A10Form.Item;

export default class FormLayoutDemo extends React.Component {
    constructor() {
        super();
        this.state = {
            formLayout: 'horizontal',
        };
    }

    handleFormLayoutChange = (e) => {
        this.setState({ formLayout: e.target.value });
    }

    render() {
        const { formLayout } = this.state;
        const formItemLayout = formLayout === 'horizontal' ? {
            labelCol: { span: 4 },
            wrapperCol: { span: 14 },
        } : null;
        const buttonItemLayout = formLayout === 'horizontal' ? {
            wrapperCol: { span: 14, offset: 4 },
        } : null;
        return (
            <div>
                <A10Form layout={formLayout}>
                    <FormItem
                        label="A10Form Layout"
                        {...formItemLayout}
                    >
                        <A10Radio.Group defaultValue="horizontal" onChange={this.handleFormLayoutChange}>
                            <A10Radio.Button value="horizontal">Horizontal</A10Radio.Button>
                            <A10Radio.Button value="vertical">Vertical</A10Radio.Button>
                            <A10Radio.Button value="inline">Inline</A10Radio.Button>
                        </A10Radio.Group>
                    </FormItem>
                    <FormItem
                        label="Field A"
                        {...formItemLayout}
                    >
                        <A10Input placeholder="input placeholder" />
                    </FormItem>
                    <FormItem
                        label="Field B"
                        {...formItemLayout}
                    >
                        <A10Input placeholder="input placeholder" />
                    </FormItem>
                    <FormItem {...buttonItemLayout}>
                        <A10Button type="primary">Submit</A10Button>
                    </FormItem>
                </A10Form>
            </div>
        );
    }
}
