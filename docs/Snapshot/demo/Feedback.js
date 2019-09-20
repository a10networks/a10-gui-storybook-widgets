
import * as React from 'react'
import { A10Row, A10Col, A10Card, A10Alert, A10Drawer, A10Button, A10Modal, A10Message, A10Notification, A10Progress, A10Popconfirm, A10SlidingPage, A10Spin, A10Skeleton } from '../../../src'
import DrawerBasicDemo from '../../Drawer/example/Normal'
import ModalBasicDemo from '../../Modal/demo/BasicModal'
import MoreTypesDemo from '../../Alert/demo/MoreTypesDemo'
import { SuccessMessage } from '../../Message/demo/example'
import { Demo2 } from '../../Progress/index'
import PopconfirmDemo from '../../Popconfirm/demo/Basic'
import BasicSlidingDemo from '../../SlidingPage/demo/BasicSlidingPage'
import SpinBasicDemo from '../../Spin/demo/Basic'
const rowStyle = {
    marginBottom: '16px'
}
const cardStyle = {
    height: '300px'
}
const openNotificationDemo = () => {
    A10Notification.open({
        message: 'Notification Title',
        description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        onClick: () => {
            console.log('Notification Clicked!');
        },
    });
};
const NotificationDemo = () => {
    return (
        <A10Button type="primary" onClick={openNotificationDemo}>Open the notification box</A10Button>
    )
}
const FeedbackExamples = () => {
    return (
        <A10Card>
            <p
                style={{
                    fontSize: 14,
                    color: 'rgba(0, 0, 0, 0.85)',
                    marginBottom: 16,
                    fontWeight: 500,
                }}
            >
                Feedback Widgets
            </p>
            <div style={{ background: '#ECECEC', padding: '30px' }}>
                <A10Row gutter={16} style={rowStyle}>
                    <A10Col span={8}>
                        <A10Card title="A10Alert" bordered={false} style={cardStyle}>
                            <MoreTypesDemo />
                        </A10Card>
                    </A10Col>

                    <A10Col span={8}>
                        <A10Card title="A10Drawer" bordered={false} style={cardStyle}>
                            <DrawerBasicDemo />
                        </A10Card>
                    </A10Col>

                    <A10Col span={8}>
                        <A10Card title="A10Modal" bordered={false} style={cardStyle}>
                            <ModalBasicDemo />
                        </A10Card>
                    </A10Col>
                </A10Row>

                <A10Row gutter={16} style={rowStyle}>
                    <A10Col span={8}>
                        <A10Card title="A10Message" bordered={false} style={cardStyle}>
                            <SuccessMessage />
                        </A10Card>
                    </A10Col>
                    <A10Col span={8}>
                        <A10Card title="A10Notification" bordered={false} style={cardStyle}>
                            <NotificationDemo />
                        </A10Card>
                    </A10Col>
                    <A10Col span={8}>
                        <A10Card title="A10Progress" bordered={false} style={cardStyle}>
                            <Demo2 />
                        </A10Card>
                    </A10Col>
                </A10Row>

                <A10Row gutter={16} style={rowStyle}>
                    <A10Col span={8}>
                        <A10Card title="A10Popconfirm" bordered={false} style={cardStyle}>
                            <PopconfirmDemo />
                        </A10Card>
                    </A10Col>
                    <A10Col span={8}>
                        <A10Card title="A10SlidingPage" bordered={false} style={cardStyle}>
                            <BasicSlidingDemo />
                        </A10Card>
                    </A10Col>
                    <A10Col span={8}>
                        <A10Card title="A10Spin" bordered={false} style={cardStyle}>
                            <SpinBasicDemo />
                        </A10Card>
                    </A10Col>
                </A10Row>

                <A10Row gutter={16} style={rowStyle}>
                    <A10Col span={8}>
                        <A10Card title="A10Skeleton" bordered={false} style={cardStyle}>
                            <A10Skeleton active={true} />
                        </A10Card>
                    </A10Col>
                </A10Row>
            </div>
        </A10Card>
    )
}

export default FeedbackExamples