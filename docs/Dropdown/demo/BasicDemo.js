import * as React from 'react'
import { A10Dropdown, A10Menu, A10Icon } from '../../../src'

const menu = (
    <A10Menu>
        <A10Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.a10networks.com/">1st menu item</a>
        </A10Menu.Item>
        <A10Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.a10networks.com/company/meet-a10">2nd menu item</a>
        </A10Menu.Item>
        <A10Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.a10networks.com/products">3rd menu item</a>
        </A10Menu.Item>
    </A10Menu>
);

const BasicExample = () => {
    return (
        <A10Dropdown overlay={menu}>
            <a className="ant-dropdown-link" href="#">
                Hover me <A10Icon type="down" />
            </a>
        </A10Dropdown>
    )
}

export default BasicExample