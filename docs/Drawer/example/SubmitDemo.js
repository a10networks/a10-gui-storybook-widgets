import {
    A10Drawer, A10Form, A10Button, A10Col, A10Row, A10Input, A10Select, A10DatePicker, A10Icon,
} from '../../../src';
import * as React from 'react';

const { Option } = A10Select;

class DrawerForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { visible: false }
    }

    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <A10Button type="primary" onClick={this.showDrawer}>
                    <A10Icon type="plus" /> New account
                </A10Button>
                <A10Drawer
                    title="Create a new account"
                    width={720}
                    onClose={this.onClose}
                    visible={this.state.visible}
                    style={{
                        overflow: 'auto',
                        height: 'calc(100% - 108px)',
                        paddingBottom: '108px',
                    }}
                >
                    <A10Form layout="vertical" hideRequiredMark>
                        <A10Row gutter={16}>
                            <A10Col span={12}>
                                <A10Form.Item label="Name">
                                    {getFieldDecorator('name', {
                                        rules: [{ required: true, message: 'Please enter user name' }],
                                    })(<A10Input placeholder="Please enter user name" />)}
                                </A10Form.Item>
                            </A10Col>
                            <A10Col span={12}>
                                <A10Form.Item label="Url">
                                    {getFieldDecorator('url', {
                                        rules: [{ required: true, message: 'Please enter url' }],
                                    })(
                                        <A10Input
                                            style={{ width: '100%' }}
                                            addonBefore="http://"
                                            addonAfter=".com"
                                            placeholder="Please enter url"
                                        />
                                    )}
                                </A10Form.Item>
                            </A10Col>
                        </A10Row>
                        <A10Row gutter={16}>
                            <A10Col span={12}>
                                <A10Form.Item label="Owner">
                                    {getFieldDecorator('owner', {
                                        rules: [{ required: true, message: 'Please select an owner' }],
                                    })(
                                        <A10Select placeholder="Please select an owner">
                                            <Option value="xiao">Xiaoxiao Fu</Option>
                                            <Option value="mao">Maomao Zhou</Option>
                                        </A10Select>
                                    )}
                                </A10Form.Item>
                            </A10Col>
                            <A10Col span={12}>
                                <A10Form.Item label="Type">
                                    {getFieldDecorator('type', {
                                        rules: [{ required: true, message: 'Please choose the type' }],
                                    })(
                                        <A10Select placeholder="Please choose the type">
                                            <Option value="private">Private</Option>
                                            <Option value="public">Public</Option>
                                        </A10Select>
                                    )}
                                </A10Form.Item>
                            </A10Col>
                        </A10Row>
                        <A10Row gutter={16}>
                            <A10Col span={12}>
                                <A10Form.Item label="Approver">
                                    {getFieldDecorator('approver', {
                                        rules: [{ required: true, message: 'Please choose the approver' }],
                                    })(
                                        <A10Select placeholder="Please choose the approver">
                                            <Option value="jack">Jack Ma</Option>
                                            <Option value="tom">Tom Liu</Option>
                                        </A10Select>
                                    )}
                                </A10Form.Item>
                            </A10Col>
                            <A10Col span={12}>
                                <A10Form.Item label="DateTime">
                                    {getFieldDecorator('dateTime', {
                                        rules: [{ required: true, message: 'Please choose the dateTime' }],
                                    })(
                                        <A10DatePicker.A10RangePicker
                                            style={{ width: '100%' }}
                                            getPopupContainer={trigger => trigger.parentNode}
                                        />
                                    )}
                                </A10Form.Item>
                            </A10Col>
                        </A10Row>
                        <A10Row gutter={16}>
                            <A10Col span={24}>
                                <A10Form.Item label="Description">
                                    {getFieldDecorator('description', {
                                        rules: [
                                            {
                                                required: true,
                                                message: 'Please enter url description',
                                            },
                                        ],
                                    })(<A10Input.TextArea rows={4} placeholder="Please enter url description" />)}
                                </A10Form.Item>
                            </A10Col>
                        </A10Row>
                    </A10Form>
                    <div
                        style={{
                            position: 'absolute',
                            left: 0,
                            bottom: 0,
                            width: '100%',
                            borderTop: '1px solid #e9e9e9',
                            padding: '10px 16px',
                            background: '#fff',
                            textAlign: 'right',
                        }}
                    >
                        <A10Button onClick={this.onClose} style={{ marginRight: 8 }}>
                            Cancel
                        </A10Button>
                        <A10Button onClick={this.onClose} type="primary">
                            Submit
                        </A10Button>
                    </div>
                </A10Drawer>
            </div>
        );
    }
}

const App = A10Form.create()(DrawerForm);

export default App

