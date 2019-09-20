import * as React from 'react'
import { A10Menu, A10Icon } from '../../../src';

const SubMenu = A10Menu.SubMenu;
const MenuItemGroup = A10Menu.ItemGroup;

function handleClick(e) {
    console.log('click', e);
}
const Example = () => {

    return (
        <A10Menu onClick={handleClick} style={{ width: 256 }} mode="vertical">
            <SubMenu key="sub1" title={<span><A10Icon type="mail" /><span>Navigation One</span></span>}>
                <MenuItemGroup title="Item 1">
                    <A10Menu.Item key="1">Option 1</A10Menu.Item>
                    <A10Menu.Item key="2">Option 2</A10Menu.Item>
                </MenuItemGroup>
                <MenuItemGroup title="Iteom 2">
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
            <SubMenu key="sub4" title={<span><A10Icon type="setting" /><span>Navigation Three</span></span>}>
                <A10Menu.Item key="9">Option 9</A10Menu.Item>
                <A10Menu.Item key="10">Option 10</A10Menu.Item>
                <A10Menu.Item key="11">Option 11</A10Menu.Item>
                <A10Menu.Item key="12">Option 12</A10Menu.Item>
            </SubMenu>
        </A10Menu>
    )
}

export default Example