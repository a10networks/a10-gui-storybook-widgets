import {
  A10Form, A10Icon, A10Input, A10Button, A10Checkbox,
} from '../../../src';
import * as React from 'react';
import './index.less';
import '../styles/demo.less';
const FormItem = A10Form.Item;

class NormalLoginForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <A10Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <A10Input prefix={<A10Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <A10Input prefix={<A10Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <A10Checkbox>Remember me</A10Checkbox>
          )}
          <a className="login-form-forgot" href="">Forgot password</a>
          <A10Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </A10Button>
          Or <a href="">register now!</a>
        </FormItem>
      </A10Form>
    );
  }
}

export default A10Form.create()(NormalLoginForm);
