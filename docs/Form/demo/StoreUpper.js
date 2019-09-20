import * as React from 'react'
import { A10Form, A10Input } from '../../../src';

const FormItem = A10Form.Item;

const CustomizedForm = A10Form.create({
    onFieldsChange(props, changedFields) {
        props.onChange(changedFields);
    },
    mapPropsToFields(props) {
        return {
            username: A10Form.createFormField({
                ...props.username,
                value: props.username.value,
            }),
        };
    },
    onValuesChange(_, values) {
        console.log(values);
    },
})((props) => {
    const { getFieldDecorator } = props.form;
    return (
        <A10Form layout="inline">
            <FormItem label="Username">
                {getFieldDecorator('username', {
                    rules: [{ required: true, message: 'Username is required!' }],
                })(<A10Input />)}
            </FormItem>
        </A10Form>
    );
});

export default class Demo extends React.Component {
    state = {
        fields: {
            username: {
                value: 'benjycui',
            },
        },
    };

    handleFormChange = (changedFields) => {
        this.setState(({ fields }) => ({
            fields: { ...fields, ...changedFields },
        }));
    }

    render() {
        const fields = this.state.fields;
        return (
            <div>
                <CustomizedForm {...fields} onChange={this.handleFormChange} />
                <pre className="language-bash">
                    {JSON.stringify(fields, null, 2)}
                </pre>
            </div>
        );
    }
}
