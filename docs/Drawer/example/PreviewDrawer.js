import {
    A10Drawer, A10List, A10Avatar, A10Divider, A10Col, A10Row,
} from '../../../src'
import * as React from 'react'

const pStyle = {
    fontSize: 16,
    color: 'rgba(0,0,0,0.85)',
    lineHeight: '24px',
    display: 'block',
    marginBottom: 16,
};

const DescriptionItem = ({ title, content }) => (
    <div
        style={{
            fontSize: 14,
            lineHeight: '22px',
            marginBottom: 7,
            color: 'rgba(0,0,0,0.65)',
        }}
    >
        <p
            style={{
                marginRight: 8,
                display: 'inline-block',
                color: 'rgba(0,0,0,0.85)',
            }}
        >
            {title}:
      </p>
        {content}
    </div>
);

export default class App extends React.Component {
    state = { visible: false };

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
        return (
            <div>
                <A10List
                    dataSource={[
                        {
                            name: 'Lily',
                        },
                        {
                            name: 'Lily',
                        },
                    ]}
                    bordered
                    renderItem={item => (
                        <A10List.Item key={item.id} actions={[<a onClick={this.showDrawer}>View Profile</a>]}>
                            <A10List.Item.Meta
                                avatar={
                                    <A10Avatar src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" />
                                }
                                title={<a href="https://ant.design/index-cn">{item.name}</a>}
                                description="Progresser AFX"
                            />
                        </A10List.Item>
                    )}
                />
                <A10Drawer
                    width={640}
                    placement="right"
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                >
                    <p style={{ ...pStyle, marginBottom: 24 }}>User Profile</p>
                    <p style={pStyle}>Personal</p>
                    <A10Row>
                        <A10Col span={12}>
                            <DescriptionItem title="Full Name" content="Lily" />{' '}
                        </A10Col>
                        <A10Col span={12}>
                            <DescriptionItem title="Account" content="AntDesign@example.com" />
                        </A10Col>
                    </A10Row>
                    <A10Row>
                        <A10Col span={12}>
                            <DescriptionItem title="City" content="HangZhou" />
                        </A10Col>
                        <A10Col span={12}>
                            <DescriptionItem title="Country" content="China🇨🇳" />
                        </A10Col>
                    </A10Row>
                    <A10Row>
                        <A10Col span={12}>
                            <DescriptionItem title="Birthday" content="February 2,1900" />
                        </A10Col>
                        <A10Col span={12}>
                            <DescriptionItem title="Website" content="-" />
                        </A10Col>
                    </A10Row>
                    <A10Row>
                        <A10Col span={24}>
                            <DescriptionItem
                                title="Message"
                                content="Make things as simple as possible but no simpler."
                            />
                        </A10Col>
                    </A10Row>
                    <A10Divider />
                    <p style={pStyle}>Company</p>
                    <A10Row>
                        <A10Col span={12}>
                            <DescriptionItem title="Position" content="Programmer" />
                        </A10Col>
                        <A10Col span={12}>
                            <DescriptionItem title="Responsibilities" content="Coding" />
                        </A10Col>
                    </A10Row>
                    <A10Row>
                        <A10Col span={12}>
                            <DescriptionItem title="Department" content="AFX" />
                        </A10Col>
                        <A10Col span={12}>
                            <DescriptionItem title="Supervisor" content={<a>Lin</a>} />
                        </A10Col>
                    </A10Row>
                    <A10Row>
                        <A10Col span={24}>
                            <DescriptionItem
                                title="Skills"
                                content="C / C + +, data structures, software engineering, operating systems, computer networks, databases, compiler theory, computer architecture, Microcomputer Principle and Interface Technology, Computer English, Java, ASP, etc."
                            />
                        </A10Col>
                    </A10Row>
                    <A10Divider />
                    <p style={pStyle}>Contacts</p>
                    <A10Row>
                        <A10Col span={12}>
                            <DescriptionItem title="Email" content="AntDesign@example.com" />
                        </A10Col>
                        <A10Col span={12}>
                            <DescriptionItem title="Phone Number" content="+86 181 0000 0000" />
                        </A10Col>
                    </A10Row>
                    <A10Row>
                        <A10Col span={24}>
                            <DescriptionItem
                                title="Github"
                                content={(
                                    <a href="http://github.com/ant-design/ant-design/">
                                        github.com/ant-design/ant-design/
                    </a>
                                )}
                            />
                        </A10Col>
                    </A10Row>
                </A10Drawer>
            </div>
        );
    }
}