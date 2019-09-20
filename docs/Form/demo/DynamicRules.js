import * as React from 'react';
import {
    A10Form, A10Input, A10Button, A10Checkbox,
} from '../../../src';

const FormItem = A10Form.Item;

const formItemLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 8 },
};
const formTailLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 8, offset: 4 },
};
class DynamicRule extends React.Component {
    state = {
        checkNick: false,
    };

    check = () => {
        this.props.form.validateFields(
            (err) => {
                if (!err) {
                    console.info('success');
                }
            },
        );
    }

    handleChange = (e) => {
        this.setState({
            checkNick: e.target.checked,
        }, () => {
            this.props.form.validateFields(['nickname'], { force: true });
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <FormItem {...formItemLayout} label="Name">
                    {getFieldDecorator('username', {
                        rules: [{
                            required: true,
                            message: 'Please input your name',
                        }],
                    })(
                        <A10Input placeholder="Please input your name" />
                    )}
                </FormItem>
                <FormItem {...formItemLayout} label="Nickname">
                    {getFieldDecorator('nickname', {
                        rules: [{
                            required: this.state.checkNick,
                            message: 'Please input your nickname',
                        }],
                    })(
                        <A10Input placeholder="Please input your nickname" />
                    )}
                </FormItem>
                <FormItem {...formTailLayout}>
                    <A10Checkbox
                        checked={this.state.checkNick}
                        onChange={this.handleChange}
                    >
                        Nickname is required
            </A10Checkbox>
                </FormItem>
                <FormItem {...formTailLayout}>
                    <A10Button type="primary" onClick={this.check}>
                        Check
            </A10Button>
                </FormItem>
            </div>
        );
    }
}

export default A10Form.create()(DynamicRule);