import { A10Tag, A10Button } from '../../../src';
import * as React from 'react';

export default class Demo extends React.Component {
    state = {
        visible: true,
    }

    render() {
        return (
            <div>
                <A10Tag
                    closable
                    visible={this.state.visible}
                    onClose={() => this.setState({ visible: false })}
                >
                    Movies
        </A10Tag>
                <br />
                <A10Button
                    size="small"
                    onClick={() => this.setState({ visible: !this.state.visible })}
                >
                    Toggle
        </A10Button>
            </div>
        );
    }
}
