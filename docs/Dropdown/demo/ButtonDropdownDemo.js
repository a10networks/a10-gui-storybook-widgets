import { A10Menu, A10Dropdown, A10Button, A10Icon, A10Message } from '../../../src'
import * as React from 'react'

function handleButtonClick(e) {
    A10Message.info('Click on left button.');
    console.log('click left button', e);
}

function handleMenuClick(e) {
    A10Message.info('Click on menu item.');
    console.log('click', e);
}

const menu = (
    <A10Menu onClick={handleMenuClick}>
        <A10Menu.Item key="1"><A10Icon type="user" />1st menu item</A10Menu.Item>
        <A10Menu.Item key="2"><A10Icon type="user" />2nd menu item</A10Menu.Item>
        <A10Menu.Item key="3"><A10Icon type="user" />3rd item</A10Menu.Item>
    </A10Menu>
);

const ButtonDropdownDemo = () => {
    return (
        <div>
            <A10Dropdown.Button onClick={handleButtonClick} overlay={menu}>
                A10Dropdown
            </A10Dropdown.Button>

            <A10Dropdown.Button
                onClick={handleButtonClick}
                overlay={menu}
                disabled
                style={{ marginLeft: 8 }}
            >
                A10Dropdown
            </A10Dropdown.Button>

            <A10Dropdown overlay={menu}>
                <A10Button style={{ marginLeft: 8 }}>
                    A10Button <A10Icon type="down" />
                </A10Button>
            </A10Dropdown>
        </div>
    )
}

export default ButtonDropdownDemo