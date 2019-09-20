
import * as React from 'react'
import { A10Popover, A10Button } from '../../../src'

class App extends React.Component {
    state = {
        clicked: false,
        hovered: false,
    };

    hide = () => {
        this.setState({
            clicked: false,
            hovered: false,
        });
    }

    handleHoverChange = (visible) => {
        this.setState({
            hovered: visible,
            clicked: false,
        });
    }

    handleClickChange = (visible) => {
        this.setState({
            clicked: visible,
            hovered: false,
        });
    }

    render() {
        const hoverContent = (
            <div>
                This is hover content.
        </div>
        );
        const clickContent = (
            <div>
                This is click content.
        </div>
        );
        return (
            <A10Popover
                style={{ width: 500 }}
                content={hoverContent}
                title="Hover title"
                trigger="hover"
                visible={this.state.hovered}
                onVisibleChange={this.handleHoverChange}
            >
                <A10Popover
                    content={(
                        <div>
                            {clickContent}
                            <a onClick={this.hide}>Close</a>
                        </div>
                    )}
                    title="Click title"
                    trigger="click"
                    visible={this.state.clicked}
                    onVisibleChange={this.handleClickChange}
                >
                    <A10Button>Hover and click / 悬停并单击</A10Button>
                </A10Popover>
            </A10Popover>
        );
    }
}

export default App