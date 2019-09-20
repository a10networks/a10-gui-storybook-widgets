import { A10Skeleton, A10Button } from '../../../src';
import * as React from 'react';
export default class Demo extends React.Component {
    state = {
        loading: false,
    };

    showSkeleton = () => {
        this.setState({ loading: true });
        setTimeout(() => {
            this.setState({ loading: false });
        }, 3000);
    };

    render() {
        return (
            <div className="article">
                <A10Skeleton loading={this.state.loading}>
                    <div>
                        <h4>a10-gui-widgets</h4>
                        <p>We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.</p>
                    </div>
                </A10Skeleton>
                <A10Button onClick={this.showSkeleton} disabled={this.state.loading}>
                    Show Skeleton
        </A10Button>
            </div>
        );
    }
}

