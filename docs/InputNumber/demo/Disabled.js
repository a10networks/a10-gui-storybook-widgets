import * as React from 'react'
import { A10InputNumber, A10Button } from '../../../src'

class App extends React.Component {
    state = {
        disabled: true,
    };

    toggle = () => {
        this.setState({
            disabled: !this.state.disabled,
        });
    }

    render() {
        return (
            <div>
                <A10InputNumber min={1} max={10} disabled={this.state.disabled} defaultValue={3} />
                <div style={{ marginTop: 20 }}>
                    <A10Button onClick={this.toggle} type="primary">Toggle disabled</Button>
                </div>
            </div>
        );
    }
}

export default App 