import { A10Menu, A10Dropdown } from '../../../src';
import * as React from 'react';

const menu = (
    <A10Menu>
        <A10Menu.Item key="1">1st menu item</A10Menu.Item>
        <A10Menu.Item key="2">2nd menu item</A10Menu.Item>
        <A10Menu.Item key="3">3rd menu item</A10Menu.Item>
    </A10Menu>
);

const ContextDemo = () => {
    return (
        <A10Dropdown overlay={menu} trigger={['contextMenu']}>
            <span style={{ userSelect: 'none' }}>Right Click on Me</span>
        </A10Dropdown>
    )
}

export default ContextDemo