import * as React from 'react'
import {
    A10Form, A10Input, A10DatePicker, A10Col, A10TimePicker, A10Select, A10Cascader, A10InputNumber,
} from '../../../src';


const FormItem = A10Form.Item;
const Option = A10Select.Option;

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 5 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 },
    },
};


const CustomizeValidationExample = () => {
    return (
        <A10Form>
            <FormItem
                {...formItemLayout}
                label="Fail"
                validateStatus="error"
                help="Should be combination of numbers & alphabets"
            >
                <A10Input placeholder="unavailable choice" id="error" />
            </FormItem>

            <FormItem
                {...formItemLayout}
                label="Warning"
                validateStatus="warning"
            >
                <A10Input placeholder="Warning" id="warning" />
            </FormItem>

            <FormItem
                {...formItemLayout}
                label="Validating"
                hasFeedback
                validateStatus="validating"
                help="The information is being validated..."
            >
                <A10Input placeholder="I'm the content is being validated" id="validating" />
            </FormItem>

            <FormItem
                {...formItemLayout}
                label="Success"
                hasFeedback
                validateStatus="success"
            >
                <A10Input placeholder="I'm the content" id="success" />
            </FormItem>

            <FormItem
                {...formItemLayout}
                label="Warning"
                hasFeedback
                validateStatus="warning"
            >
                <A10Input placeholder="Warning" id="warning" />
            </FormItem>

            <FormItem
                {...formItemLayout}
                label="Fail"
                hasFeedback
                validateStatus="error"
                help="Should be combination of numbers & alphabets"
            >
                <A10Input placeholder="unavailable choice" id="error" />
            </FormItem>

            <FormItem
                {...formItemLayout}
                label="Success"
                hasFeedback
                validateStatus="success"
            >
                <A10DatePicker style={{ width: '100%' }} />
            </FormItem>

            <FormItem
                {...formItemLayout}
                label="Warning"
                hasFeedback
                validateStatus="warning"
            >
                <A10TimePicker style={{ width: '100%' }} />
            </FormItem>

            <FormItem
                {...formItemLayout}
                label="Error"
                hasFeedback
                validateStatus="error"
            >
                <A10Select defaultValue="1">
                    <Option value="1">Option 1</Option>
                    <Option value="2">Option 2</Option>
                    <Option value="3">Option 3</Option>
                </A10Select>
            </FormItem>

            <FormItem
                {...formItemLayout}
                label="Validating"
                hasFeedback
                validateStatus="validating"
                help="The information is being validated..."
            >
                <A10Cascader defaultValue={['1']} options={[]} />
            </FormItem>

            <FormItem
                label="inline"
                {...formItemLayout}
            >
                <A10Col span={11}>
                    <FormItem validateStatus="error" help="Please select the correct date">
                        <A10DatePicker />
                    </FormItem>
                </A10Col>
                <A10Col span={2}>
                    <span style={{ display: 'inline-block', width: '100%', textAlign: 'center' }}>
                        -
            </span>
                </A10Col>
                <A10Col span={11}>
                    <FormItem>
                        <A10DatePicker />
                    </FormItem>
                </A10Col>
            </FormItem>

            <FormItem
                {...formItemLayout}
                label="Success"
                hasFeedback
                validateStatus="success"
            >
                <A10InputNumber style={{ width: '100%' }} />
            </FormItem>
        </A10Form>
    )
}

export default CustomizeValidationExample