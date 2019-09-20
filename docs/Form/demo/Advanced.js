import * as React from 'react';
import './index.less'

import {
    A10Form, A10Row, A10Col, A10Input, A10Button, A10Icon,
} from '../../../src';

const FormItem = A10Form.Item;

class AdvancedSearchForm extends React.Component {
    state = {
        expand: false,
    };

    // To generate mock A10Form.Item
    getFields() {
        const count = this.state.expand ? 10 : 6;
        const { getFieldDecorator } = this.props.form;
        const children = [];
        for (let i = 0; i < 10; i++) {
            children.push(
                <A10Col span={8} key={i} style={{ display: i < count ? 'block' : 'none' }}>
                    <FormItem label={`Field ${i}`}>
                        {getFieldDecorator(`field-${i}`, {
                            rules: [{
                                required: true,
                                message: 'A10Input something!',
                            }],
                        })(
                            <A10Input placeholder="placeholder" />
                        )}
                    </FormItem>
                </A10Col>
            );
        }
        return children;
    }

    handleSearch = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            console.log('Received values of form: ', values);
        });
    }

    handleReset = () => {
        this.props.form.resetFields();
    }

    toggle = () => {
        const { expand } = this.state;
        this.setState({ expand: !expand });
    }

    render() {
        return (
            <A10Form
                className="ant-advanced-search-form"
                onSubmit={this.handleSearch}
            >
                <A10Row gutter={24}>{this.getFields()}</A10Row>
                <A10Row>
                    <A10Col span={24} style={{ textAlign: 'right' }}>
                        <A10Button type="primary" htmlType="submit">Search</A10Button>
                        <A10Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
                            Clear
              </A10Button>
                        <a style={{ marginLeft: 8, fontSize: 12 }} onClick={this.toggle}>
                            Collapse <A10Icon type={this.state.expand ? 'up' : 'down'} />
                        </a>
                    </A10Col>
                </A10Row>
            </A10Form>
        );
    }
}

const WrappedAdvancedSearchForm = A10Form.create()(AdvancedSearchForm);

const AdvancedDemo = () => {
    return (<div>
        <WrappedAdvancedSearchForm />
        <div className="search-result-list">Search Result List</div>
    </div>)
}

export default AdvancedDemo;