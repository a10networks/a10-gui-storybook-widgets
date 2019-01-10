import * as React from 'react'
import { A10Menu, A10Icon, A10Button } from '../../../src';
import { defaultIfEmpty } from 'rxjs/operator/defaultIfEmpty';

const SubMenu = A10Menu.SubMenu;

class App extends React.Component {
    state = {
        collapsed: false,
    }

    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    render() {
        return (
            <div style={{ width: 256 }}>
                <A10Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
                    <A10Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
                </A10Button>
                <A10Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="light"
                    inlineCollapsed={this.state.collapsed}
                >
                    <A10Menu.Item key="1">
                        <A10Icon type="pie-chart" />
                        <span>Option 1</span>
                    </A10Menu.Item>
                    <A10Menu.Item key="2">
                        <A10Icon type="desktop" />
                        <span>Option 2</span>
                    </A10Menu.Item>
                    <A10Menu.Item key="3">
                        <A10Icon type="inbox" />
                        <span>Option 3</span>
                    </A10Menu.Item>
                    <SubMenu key="sub1" title={<span><A10Icon type="mail" /><span>Navigation One</span></span>}>
                        <A10Menu.Item key="5">Option 5</A10Menu.Item>
                        <A10Menu.Item key="6">Option 6</A10Menu.Item>
                        <A10Menu.Item key="7">Option 7</A10Menu.Item>
                        <A10Menu.Item key="8">Option 8</A10Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" title={<span><A10Icon type="appstore" /><span>Navigation Two</span></span>}>
                        <A10Menu.Item key="9">Option 9</A10Menu.Item>
                        <A10Menu.Item key="10">Option 10</A10Menu.Item>
                        <SubMenu key="sub3" title="Submenu">
                            <A10Menu.Item key="11">Option 11</A10Menu.Item>
                            <A10Menu.Item key="12">Option 12</A10Menu.Item>
                        </SubMenu>
                    </SubMenu>
                </A10Menu>
            </div>
        );
    }
}

export default App