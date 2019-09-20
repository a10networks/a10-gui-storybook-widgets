import {
  A10Skeleton, A10Switch, A10Card, A10Icon, A10Avatar,
} from '../../../src';
import * as React from 'react';
import './index.less'
const { Meta } = A10Card;

export default class App extends React.Component {
  state = {
    loading: true,
  }

  onChange = (checked) => {
    this.setState({ loading: !checked });
  }

  render() {
    const { loading } = this.state;

    return (
      <div id="LoadingDemoSpecific">
        <A10Switch checked={!loading} onChange={this.onChange} />

        <A10Card style={{ width: 300, marginTop: 16 }} loading={loading}>
          <Meta
            avatar={<A10Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
            title="A10Card title"
            description="This is the description"
          />
        </A10Card>

        <A10Card
          style={{ width: 300, marginTop: 16 }}
          actions={[<A10Icon type="setting" />, <A10Icon type="edit" />, <A10Icon type="ellipsis" />]}
        >
          <A10Skeleton loading={loading} avatar active>
            <Meta
              avatar={<A10Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
              title="A10Card title"
              description="This is the description"
            />
          </A10Skeleton>
        </A10Card>
      </div>
    );
  }
}