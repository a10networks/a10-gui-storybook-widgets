import { A10Switch, A10Button } from '../../src';
import * as React from 'react';

export default class App extends React.Component {
    state = {
        disabled: true,
    }

    toggle = () => {
        this.setState({
            disabled: !this.state.disabled,
        });
    }

    render() {
        return (
            <div>
                <A10Switch disabled={this.state.disabled} defaultChecked />
                <br />
                <br />
                <A10Button type="primary" onClick={this.toggle}>Toggle disabled</A10Button>
            </div>
        );
    }
}
