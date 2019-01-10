import * as React from 'react'
import { A10Button, A10Radio, A10Icon } from '../../../src';

class ButtonSize extends React.Component {
    state = {
        size: 'large',
    };

    handleSizeChange = (e) => {
        this.setState({ size: e.target.value });
    }

    render() {
        const size = this.state.size;
        return (
            <div>
                <A10Radio.Group value={size} onChange={this.handleSizeChange}>
                    <A10Radio.Button value="large">Large</A10Radio.Button>
                    <A10Radio.Button value="default">Default</A10Radio.Button>
                    <A10Radio.Button value="small">Small</A10Radio.Button>
                </A10Radio.Group>
                <br /><br />
                <A10Button type="primary" size={size}>Primary</A10Button>
                <A10Button size={size}>Normal</A10Button>
                <A10Button type="dashed" size={size}>Dashed</A10Button>
                <A10Button type="danger" size={size}>Danger</A10Button>
                <br />
                <A10Button type="primary" shape="circle" icon="download" size={size} />
                <A10Button type="primary" icon="download" size={size}>Download</A10Button>
                <br />
                {/* Button.Group dne */}
                {/* <A10Button.Group size={size}>
                    <A10Button type="primary">
                        <A10Icon type="left" />Backward
                    </A10Button>
                    <A10Button type="primary">
                        Forward<A10Icon type="right" />
                    </A10Button>
                </A10Button.Group> */}
            </div>
        );
    }
}

export default ButtonSize