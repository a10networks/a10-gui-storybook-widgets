import * as React from 'react'
import { A10Menu, A10Icon, A10Switch } from '../../../src';

const SubMenu = A10Menu.SubMenu;

class Sider extends React.Component {
    state = {
        theme: 'dark',
        current: '1',
    }

    changeTheme = (value) => {
        this.setState({
            theme: value ? 'dark' : 'light',
        });
    }

    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }

    render() {
        return (
            <div>
                <A10Switch
                    checked={this.state.theme === 'dark'}
                    onChange={this.changeTheme}
                    checkedChildren="Dark"
                    unCheckedChildren="Light"
                />
                <br />
                <br />
                <A10Menu
                    theme={this.state.theme}
                    onClick={this.handleClick}
                    style={{ width: 256 }}
                    defaultOpenKeys={['sub1']}
                    selectedKeys={[this.state.current]}
                    mode="inline"
                >
                    <SubMenu key="sub1" title={<span><A10Icon type="mail" /><span>Navigation One</span></span>}>
                        <A10Menu.Item key="1">Option 1</A10Menu.Item>
                        <A10Menu.Item key="2">Option 2</A10Menu.Item>
                        <A10Menu.Item key="3">Option 3</A10Menu.Item>
                        <A10Menu.Item key="4">Option 4</A10Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" title={<span><A10Icon type="appstore" /><span>Navigtion Two</span></span>}>
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
            </div>
        );
    }
}

export default Sider