import { A10Menu, A10Dropdown, A10Icon } from '../../../src';
import * as React from 'react';

export default class OverlayVisible extends React.Component {
    state = {
        visible: false,
    };

    handleMenuClick = (e) => {
        if (e.key === '3') {
            this.setState({ visible: false });
        }
    }

    handleVisibleChange = (flag) => {
        this.setState({ visible: flag });
    }

    render() {
        const menu = (
            <A10Menu onClick={this.handleMenuClick}>
                <A10Menu.Item key="1">Clicking me will not close the menu.</A10Menu.Item>
                <A10Menu.Item key="2">Clicking me will not close the menu also.</A10Menu.Item>
                <A10Menu.Item key="3">Clicking me will close the menu</A10Menu.Item>
            </A10Menu>
        );
        return (
            <A10Dropdown
                overlay={menu}
                onVisibleChange={this.handleVisibleChange}
                visible={this.state.visible}
            >
                <a className="ant-dropdown-link" href="#">
                    Hover me <A10Icon type="down" />
                </a>
            </A10Dropdown>
        );
    }
}
