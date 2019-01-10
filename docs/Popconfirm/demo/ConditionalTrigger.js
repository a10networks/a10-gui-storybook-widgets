import * as React from 'react'
import { A10Popconfirm, A10Switch, A10Message } from '../../../src';

class App extends React.Component {
    state = {
        visible: false,
        condition: true, // Whether meet the condition, if not show popconfirm.
    }

    changeCondition = (value) => {
        this.setState({ condition: value });
    }

    confirm = () => {
        this.setState({ visible: false });
        A10Message.success('Next step.');
    }

    cancel = () => {
        this.setState({ visible: false });
        A10Message.error('Click on cancel.');
    }

    handleVisibleChange = (visible) => {
        if (!visible) {
            this.setState({ visible });
            return;
        }
        // Determining condition before show the popconfirm.
        console.log(this.state.condition);
        if (this.state.condition) {
            this.confirm(); // next step
        } else {
            this.setState({ visible }); // show the popconfirm
        }
    }

    render() {
        return (
            <div>
                <A10Popconfirm
                    title="Are you sure delete this task?"
                    visible={this.state.visible}
                    onVisibleChange={this.handleVisibleChange}
                    onConfirm={this.confirm}
                    onCancel={this.cancel}
                    okText="Yes"
                    cancelText="No"
                >
                    <a href="#">Delete a task</a>
                </A10Popconfirm>
                <br />
                <br />
                Whether directly execute：<A10Switch defaultChecked onChange={this.changeCondition} />
            </div>
        );
    }
}

export default App