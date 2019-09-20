import * as React from 'react'
import {
    A10Form, A10Select, A10Input, A10Button,
} from '../../../src';

const FormItem = A10Form.Item;
const Option = A10Select.Option;

class App extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }

    handleSelectChange = (value) => {
        console.log(value);
        this.props.form.setFieldsValue({
            note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <A10Form onSubmit={this.handleSubmit}>
                <FormItem
                    label="Note"
                    labelCol={{ span: 5 }}
                    wrapperCol={{ span: 12 }}
                >
                    {getFieldDecorator('note', {
                        rules: [{ required: true, message: 'Please input your note!' }],
                    })(
                        <A10Input />
                    )}
                </FormItem>
                <FormItem
                    label="Gender"
                    labelCol={{ span: 5 }}
                    wrapperCol={{ span: 12 }}
                >
                    {getFieldDecorator('gender', {
                        rules: [{ required: true, message: 'Please select your gender!' }],
                    })(
                        <A10Select
                            placeholder="A10Select a option and change input text above"
                            onChange={this.handleSelectChange}
                        >
                            <Option value="male">male</Option>
                            <Option value="female">female</Option>
                        </A10Select>
                    )}
                </FormItem>
                <FormItem
                    wrapperCol={{ span: 12, offset: 5 }}
                >
                    <A10Button type="primary" htmlType="submit">
                        Submit
            </A10Button>
                </FormItem>
            </A10Form>
        );
    }
}

export default A10Form.create()(App);