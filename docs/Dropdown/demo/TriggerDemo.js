import * as React from 'react'
import { A10Menu, A10Dropdown, A10Icon } from '../../../src'

const menu = (
    <A10Menu>
        <A10Menu.Item key="0">
            <a href="https://www.a10networks.com">1st menu item</a>
        </A10Menu.Item>
        <A10Menu.Item key="1">
            <a href="https://www.a10networks.com/company/meet-a10">2nd menu item</a>
        </A10Menu.Item>
        <A10Menu.Divider />
        <A10Menu.Item key="3">3rd menu item</A10Menu.Item>
    </A10Menu>
);

const TriggerDemo = () => {
    return (
        <A10Dropdown overlay={menu} trigger={['hover']}>
            <a className="ant-dropdown-link" href="#">
                Click me <A10Icon type="down" />
            </a>
        </A10Dropdown>
    )
}

export default TriggerDemo