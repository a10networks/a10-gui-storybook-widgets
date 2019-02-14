
import * as React from 'react'
import {
    A10Card, A10Icon, A10Button, A10Affix,
    A10Breadcrumb, A10Menu, A10Dropdown, A10DropdownMenu,
    A10MenuPopover, A10Menu, A10Explorer, A10Pagination,
    A10Steps, A10Row, A10Col
} from '../../../src'
import DropdownBasicDemo from '../../Dropdown/demo/BasicDemo'
import { Example as DropdownMenuBasicDemo } from '../../DropdownMenu/index.story'
import VerticalMiniStepsDemo from '../../Steps/demo/VerticalMini'
// const Step = A10Steps.Step;
const SubMenu = A10Menu.SubMenu;
const MenuItemGroup = A10Menu.ItemGroup;


const menu3 = [
    {
        key: 'test1',
        content: 'Name2'
    },
    {
        key: 'test2',
        content: 'Name2'
    }
]
const data = [
    {
        name: 'ADC',
        toggled: true,
        children: [
            {
                name: 'Virtual Server',
                toggled: false,
                loading: true,
            }
        ]
    }
]

const rowStyle = {
    marginBottom: '16px'
}
const cardStyle = {
    height: '300px'
}
const NavigationExamples = () => {
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
                Navigation Widgets
            </p>
            <div style={{ background: '#ECECEC', padding: '30px' }}>
                <A10Row gutter={16} style={rowStyle}>
                    <A10Col span={8}>
                        <A10Card title="A10Affix" bordered={false} style={cardStyle}>
                            <A10Affix><A10Button type="primary">A10Affix top</A10Button></A10Affix>
                        </A10Card>
                    </A10Col>

                    <A10Col span={8}>
                        <A10Card title="A10Breadcrumb" bordered={false} style={cardStyle}>
                            <A10Breadcrumb>
                                <A10Breadcrumb.Item>Home</A10Breadcrumb.Item>
                            </A10Breadcrumb>
                        </A10Card>
                    </A10Col>

                    <A10Col span={8}>
                        <A10Card title="A10Dropdown" bordered={false} style={cardStyle}>
                            <DropdownBasicDemo />
                        </A10Card>
                    </A10Col>
                </A10Row>

                <A10Row gutter={16} style={rowStyle}>
                    <A10Col span={8}>
                        <A10Card title="A10DropdownMenu" bordered={false} style={cardStyle}>
                            <DropdownMenuBasicDemo />
                        </A10Card>
                    </A10Col>
                    <A10Col span={8}>
                        <A10Card title="A10Explorer" bordered={false} style={cardStyle}>
                            <A10Explorer data={data} />
                        </A10Card>
                    </A10Col>
                    <A10Col span={8}>
                        <A10Card title="A10Menu" bordered={false} style={cardStyle}>
                            <A10Menu mode="vertical">
                                <SubMenu key="sub1" title={<span><A10Icon type="mail" /><span>Navigation One</span></span>}>
                                    <MenuItemGroup title="Item 1">
                                        <A10Menu.Item key="1">Option 1</A10Menu.Item>
                                        <A10Menu.Item key="2">Option 2</A10Menu.Item>
                                    </MenuItemGroup>
                                    <MenuItemGroup title="Item 2">
                                        <A10Menu.Item key="3">Option 3</A10Menu.Item>
                                        <A10Menu.Item key="4">Option 4</A10Menu.Item>
                                    </MenuItemGroup>
                                </SubMenu>
                                <SubMenu key="sub2" title={<span><A10Icon type="appstore" /><span>Navigation Two</span></span>}>
                                    <A10Menu.Item key="5">Option 5</A10Menu.Item>
                                    <A10Menu.Item key="6">Option 6</A10Menu.Item>
                                    <SubMenu key="sub3" title="Submenu">
                                        <A10Menu.Item key="7">Option 7</A10Menu.Item>
                                        <A10Menu.Item key="8">Option 8</A10Menu.Item>
                                    </SubMenu>
                                </SubMenu>
                            </A10Menu>
                        </A10Card>
                    </A10Col>
                </A10Row>

                <A10Row gutter={16} style={rowStyle}>
                    <A10Col span={8}>
                        <A10Card title="A10MenuPopover" bordered={false} style={cardStyle}>
                            <A10MenuPopover menus={menu3} />
                        </A10Card>
                    </A10Col>
                    <A10Col span={8}>
                        <A10Card title="A10Pagination" bordered={false} style={cardStyle}>
                            <A10Pagination size="small" total={50} />
                        </A10Card>
                    </A10Col>
                    <A10Col span={8}>
                        <A10Card title="A10Steps" bordered={false} style={cardStyle}>
                            <VerticalMiniStepsDemo />
                        </A10Card>
                    </A10Col>
                </A10Row>
            </div>
        </A10Card>
    )
}

export default NavigationExamples