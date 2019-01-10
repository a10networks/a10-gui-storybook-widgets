import { A10Button } from '../../../src';
import * as React from 'react'

export default class LoadingDemo extends React.Component {
    state = {
        loading: false,
        iconLoading: false,
    }

    enterLoading = () => {
        this.setState({ loading: true });
    }

    enterIconLoading = () => {
        this.setState({ iconLoading: true });
    }

    render() {
        return (
            <span>
                <A10Button type="primary" loading>
                    Loading
          </A10Button>
                <A10Button type="primary" size="small" loading>
                    Loading
          </A10Button>
                <br />
                <A10Button type="primary" loading={this.state.loading} onClick={this.enterLoading}>
                    Click me!
          </A10Button>
                <A10Button type="primary" icon="poweroff" loading={this.state.iconLoading} onClick={this.enterIconLoading}>
                    Click me!
          </A10Button>
                <br />
                <A10Button shape="circle" loading />
                <A10Button type="primary" shape="circle" loading />
            </span>
        );
    }
}