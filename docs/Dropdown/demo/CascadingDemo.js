import { A10Menu, A10Dropdown, A10Icon } from '../../../src';
import * as React from 'react'

const SubMenu = A10Menu.SubMenu;

const menu = (
    <A10Menu>
        <A10Menu.Item>1st menu item</A10Menu.Item>
        <A10Menu.Item>2nd menu item</A10Menu.Item>
        <SubMenu title="sub menu">
            <A10Menu.Item>3rd menu item</A10Menu.Item>
            <A10Menu.Item>4th menu item</A10Menu.Item>
        </SubMenu>
        <SubMenu title="disabled sub menu" disabled>
            <A10Menu.Item>5d menu item</A10Menu.Item>
            <A10Menu.Item>6th menu item</A10Menu.Item>
        </SubMenu>
    </A10Menu>
);

const CascadingDemo = () => {
    return (
        <A10Dropdown overlay={menu}>
            <a className="ant-dropdown-link" href="#">
                Cascading menu <A10Icon type="down" />
            </a>
        </A10Dropdown>
    )
}

export default CascadingDemo