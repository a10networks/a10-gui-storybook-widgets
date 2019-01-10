import * as React from 'react'
import {
    A10Form, A10DatePicker, A10TimePicker, A10Button,
} from '../../../src';
import { TimepickerIcons, DatepickerIcons } from './SuffixIcons'
const FormItem = A10Form.Item;
const { A10MonthPicker, A10RangePicker } = A10DatePicker;

class TimeRelatedForm extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();

        this.props.form.validateFields((err, fieldsValue) => {
            if (err) {
                return;
            }

            // Should format date value before submit.
            const rangeValue = fieldsValue['range-picker'];
            const rangeTimeValue = fieldsValue['range-time-picker'];
            const values = {
                ...fieldsValue,
                'date-picker': fieldsValue['date-picker'].format('YYYY-MM-DD'),
                'date-time-picker': fieldsValue['date-time-picker'].format('YYYY-MM-DD HH:mm:ss'),
                'month-picker': fieldsValue['month-picker'].format('YYYY-MM'),
                'range-picker': [rangeValue[0].format('YYYY-MM-DD'), rangeValue[1].format('YYYY-MM-DD')],
                'range-time-picker': [
                    rangeTimeValue[0].format('YYYY-MM-DD HH:mm:ss'),
                    rangeTimeValue[1].format('YYYY-MM-DD HH:mm:ss'),
                ],
                'time-picker': fieldsValue['time-picker'].format('HH:mm:ss'),
            };
            console.log('Received values of form: ', values);
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };
        const config = {
            rules: [{ type: 'object', required: true, message: 'Please select time!' }],
        };
        const rangeConfig = {
            rules: [{ type: 'array', required: true, message: 'Please select time!' }],
        };
        return (
            <A10Form onSubmit={this.handleSubmit}>
                <FormItem
                    {...formItemLayout}
                    label="A10DatePicker"
                >
                    {getFieldDecorator('date-picker', config)(
                        <A10DatePicker />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="A10DatePicker[showTime]"
                >
                    {getFieldDecorator('date-time-picker', config)(
                        <A10DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="A10MonthPicker"
                >
                    {getFieldDecorator('month-picker', config)(
                        <A10MonthPicker suffixIcon={<DatepickerIcons />} />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="A10RangePicker"
                >
                    {getFieldDecorator('range-picker', rangeConfig)(
                        <A10RangePicker suffixIcon={<DatepickerIcons />} />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="A10RangePicker[showTime]"
                >
                    {getFieldDecorator('range-time-picker', rangeConfig)(
                        <A10RangePicker showTime format="YYYY-MM-DD HH:mm:ss" suffixIcon={<DatepickerIcons />} />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="A10TimePicker"
                >
                    {getFieldDecorator('time-picker', config)(
                        <A10TimePicker suffixIcon={<TimepickerIcons size="large" />} />
                    )}
                </FormItem>
                <FormItem
                    wrapperCol={{
                        xs: { span: 24, offset: 0 },
                        sm: { span: 16, offset: 8 },
                    }}
                >
                    <A10Button type="primary" htmlType="submit">Submit</A10Button>
                </FormItem>
            </A10Form>
        );
    }
}

export default A10Form.create()(TimeRelatedForm);
