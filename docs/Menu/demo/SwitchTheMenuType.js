import * as React from 'react'
import { A10Menu, A10Icon, A10Switch } from '../../../src';

const { SubMenu } = A10Menu;

class Sider extends React.Component {
    state = {
        mode: 'inline',
        theme: 'light',
    }

    changeMode = (value) => {
        this.setState({
            mode: value ? 'vertical' : 'inline',
        });
    }

    changeTheme = (value) => {
        this.setState({
            theme: value ? 'dark' : 'light',
        });
    }

    render() {
        return (
            <div>
                <A10Switch onChange={this.changeMode} /> Change Mode
        <span className="ant-divider" style={{ margin: '0 1em' }} />
                <A10Switch onChange={this.changeTheme} /> Change Theme
        <br />
                <br />
                <A10Menu
                    style={{ width: 256 }}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode={this.state.mode}
                    theme={this.state.theme}
                >
                    <A10Menu.Item key="1">
                        <A10Icon type="mail" />
                        Navigation One
          </A10Menu.Item>
                    <A10Menu.Item key="2">
                        <A10Icon type="calendar" />
                        Navigation Two
          </A10Menu.Item>
                    <SubMenu key="sub1" title={<span><A10Icon type="appstore" /><span>Navigation Three</span></span>}>
                        <A10Menu.Item key="3">Option 3</A10Menu.Item>
                        <A10Menu.Item key="4">Option 4</A10Menu.Item>
                        <SubMenu key="sub1-2" title="Submenu">
                            <A10Menu.Item key="5">Option 5</A10Menu.Item>
                            <A10Menu.Item key="6">Option 6</A10Menu.Item>
                        </SubMenu>
                    </SubMenu>
                    <SubMenu key="sub2" title={<span><A10Icon type="setting" /><span>Navigation Four</span></span>}>
                        <A10Menu.Item key="7">Option 7</A10Menu.Item>
                        <A10Menu.Item key="8">Option 8</A10Menu.Item>
                        <A10Menu.Item key="9">Option 9</A10Menu.Item>
                        <A10Menu.Item key="10">Option 10</A10Menu.Item>
                    </SubMenu>
                </A10Menu>
            </div>
        );
    }
}

export default Sider