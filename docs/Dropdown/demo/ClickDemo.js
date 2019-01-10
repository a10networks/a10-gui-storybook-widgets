import * as React from 'react'
import { A10Dropdown, A10Menu, A10Icon, A10Message } from '../../../src'

const onClick = ({ key }) => {
    A10Message.info(`Click on item ${key}`);
};

const menu = (
    <A10Menu onClick={onClick}>
        <A10Menu.Item key="1">1st menu item</A10Menu.Item>
        <A10Menu.Item key="2">2nd memu item</A10Menu.Item>
        <A10Menu.Item key="3">3rd menu item</A10Menu.Item>
    </A10Menu>
);

const ClickDemo = () => {
    return (
        <A10Dropdown overlay={menu}>
            <a className="ant-dropdown-link" href="#">
                Hover me, Click menu item <A10Icon type="down" />
            </a>
        </A10Dropdown>
    )
}

export default ClickDemo