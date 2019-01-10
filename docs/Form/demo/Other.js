import * as React from 'react';
import './index.less'

import {
    A10Form, A10Select, A10InputNumber, A10Switch, A10Radio,
    A10Slider, A10Button, A10Upload, A10Icon, A10Rate,
} from '../../../src';

const FormItem = A10Form.Item;
const Option = A10Select.Option;
const RadioButton = A10Radio.Button;
const RadioGroup = A10Radio.Group;

class Demo extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }

    normFile = (e) => {
        console.log('A10Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 },
        };
        return (
            <A10Form onSubmit={this.handleSubmit}>
                <FormItem
                    {...formItemLayout}
                    label="Plain Text"
                >
                    <span className="ant-form-text">China</span>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="A10Select"
                    hasFeedback
                >
                    {getFieldDecorator('select', {
                        rules: [
                            { required: true, message: 'Please select your country!' },
                        ],
                    })(
                        <A10Select placeholder="Please select a country">
                            <Option value="china">China</Option>
                            <Option value="usa">U.S.A</Option>
                        </A10Select>
                    )}
                </FormItem>

                <FormItem
                    {...formItemLayout}
                    label="A10Select[multiple]"
                >
                    {getFieldDecorator('select-multiple', {
                        rules: [
                            { required: true, message: 'Please select your favourite colors!', type: 'array' },
                        ],
                    })(
                        <A10Select mode="multiple" placeholder="Please select favourite colors">
                            <Option value="red">Red</Option>
                            <Option value="green">Green</Option>
                            <Option value="blue">Blue</Option>
                        </A10Select>
                    )}
                </FormItem>

                <FormItem
                    {...formItemLayout}
                    label="A10InputNumber"
                >
                    {getFieldDecorator('input-number', { initialValue: 3 })(
                        <A10InputNumber min={1} max={10} />
                    )}
                    <span className="ant-form-text"> machines</span>
                </FormItem>

                <FormItem
                    {...formItemLayout}
                    label="A10Switch"
                >
                    {getFieldDecorator('switch', { valuePropName: 'checked' })(
                        <A10Switch />
                    )}
                </FormItem>

                <FormItem
                    {...formItemLayout}
                    label="A10Slider"
                >
                    {getFieldDecorator('slider')(
                        <A10Slider marks={{
                            0: 'A', 20: 'B', 40: 'C', 60: 'D', 80: 'E', 100: 'F',
                        }}
                        />
                    )}
                </FormItem>

                <FormItem
                    {...formItemLayout}
                    label="A10Radio.Group"
                >
                    {getFieldDecorator('radio-group')(
                        <RadioGroup>
                            <A10Radio value="a">item 1</A10Radio>
                            <A10Radio value="b">item 2</A10Radio>
                            <A10Radio value="c">item 3</A10Radio>
                        </RadioGroup>
                    )}
                </FormItem>

                <FormItem
                    {...formItemLayout}
                    label="A10Radio.A10Button"
                >
                    {getFieldDecorator('radio-button')(
                        <RadioGroup>
                            <RadioButton value="a">item 1</RadioButton>
                            <RadioButton value="b">item 2</RadioButton>
                            <RadioButton value="c">item 3</RadioButton>
                        </RadioGroup>
                    )}
                </FormItem>

                <FormItem
                    {...formItemLayout}
                    label="A10Rate"
                >
                    {getFieldDecorator('rate', {
                        initialValue: 3.5,
                    })(
                        <A10Rate />
                    )}
                </FormItem>

                <FormItem
                    {...formItemLayout}
                    label="A10Upload"
                    extra="longgggggggggggggggggggggggggggggggggg"
                >
                    {getFieldDecorator('upload', {
                        valuePropName: 'fileList',
                        getValueFromEvent: this.normFile,
                    })(
                        <A10Upload name="logo" action="/upload.do" listType="picture">
                            <A10Button>
                                <A10Icon app="global" type="deploy-3" /> Click to upload
              </A10Button>
                        </A10Upload>
                    )}
                </FormItem>

                <FormItem
                    {...formItemLayout}
                    label="Dragger"
                >
                    <div className="dropbox">
                        {getFieldDecorator('dragger', {
                            valuePropName: 'fileList',
                            getValueFromEvent: this.normFile,
                        })(
                            <A10Upload.Dragger name="files" action="/upload.do">
                                <p className="ant-upload-drag-icon">
                                    <A10Icon type="inbox" />
                                </p>
                                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                                <p className="ant-upload-hint">Support for a single or bulk upload.</p>
                            </A10Upload.Dragger>
                        )}
                    </div>
                </FormItem>

                <FormItem
                    wrapperCol={{ span: 12, offset: 6 }}
                >
                    <A10Button type="primary" htmlType="submit">Submit</A10Button>
                </FormItem>
            </A10Form>
        );
    }
}

export default A10Form.create()(Demo);