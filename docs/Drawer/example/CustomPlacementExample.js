import * as React from 'react'
import { A10Drawer, A10Button, A10Radio } from '../../../src';


const RadioGroup = A10Radio.Group;

export default class App extends React.Component {
    state = { visible: false, placement: 'left' };

    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    onChange = (e) => {
        this.setState({
            placement: e.target.value,
        });
    }

    render() {
        return (
            <div>
                <RadioGroup
                    style={{ marginRight: 8 }}
                    defaultValue={this.state.placement}
                    onChange={this.onChange}
                >
                    <A10Radio value="top">top</A10Radio>
                    <A10Radio value="right">right</A10Radio>
                    <A10Radio value="bottom">bottom</A10Radio>
                    <A10Radio value="left">left</A10Radio>
                </RadioGroup>
                <A10Button type="primary" onClick={this.showDrawer}>
                    Open
        </A10Button>
                <A10Drawer
                    title="Basic A10Drawer"
                    placement={this.state.placement}
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </A10Drawer>
            </div>
        );
    }
}
