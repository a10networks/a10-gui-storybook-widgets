import * as React from 'react'
import { A10Alert } from '../../../src'

export default class SmoothlyUnmountDemo extends React.Component {
    state = {
        visible: true,
    }

    handleClose = () => {
        this.setState({ visible: false });
    }

    render() {
        return (
            <div>
                {
                    this.state.visible ? (
                        <A10Alert
                            message="Alert Message Text"
                            type="success"
                            closable
                            afterClose={this.handleClose}
                        />
                    ) : null
                }
                <div style={{ height: '8px' }} />
                <p>placeholder text here</p>
            </div>
        );
    }
}