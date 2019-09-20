import {
    A10Skeleton, A10Switch, A10List, A10Avatar, A10Icon,
} from '../../../src';
import * as React from 'react';

const listData = [];
for (let i = 0; i < 3; i++) {
    listData.push({
        href: 'https://www.a10networks.com/',
        title: `A10 GUI part ${i}`,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description: 'At A10 Networks we strive to protect our customers with best-in-class solutions and services needed to win the cyberwar.',
        content: 'That\'s why customers in more than 80 countries trust A10 Networks and our suite of secure application services.',
    });
}

const IconText = ({ type, text }) => (
    <span>
        <A10Icon type={type} style={{ marginRight: 8 }} />
        {text}
    </span>
);

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
            <div>
                <A10Switch checked={!loading} onChange={this.onChange} />
                <div style={{ height: '8px' }} />
                <A10List
                    itemLayout="vertical"
                    size="large"
                    dataSource={listData}
                    renderItem={item => (
                        <A10List.Item
                            key={item.title}
                            actions={!loading && [<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]}
                            extra={!loading && <img width={272} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />}
                        >
                            <A10Skeleton loading={loading} active avatar>
                                <A10List.Item.Meta
                                    avatar={<A10Avatar src={item.avatar} />}
                                    title={<a href={item.href}>{item.title}</a>}
                                    description={item.description}
                                />
                                {item.content}
                            </A10Skeleton>
                        </A10List.Item>
                    )}
                />
            </div >
        );
    }
}
